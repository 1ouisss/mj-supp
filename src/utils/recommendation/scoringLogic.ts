import { Answer } from "@/components/quiz/types";
import { ProductDefinition } from "../products/productTypes";

interface ScoredProduct extends ProductDefinition {
  totalScore: number;
}

const QUESTION_WEIGHTS = {
  PRIMARY_GOAL: 3,
  HEALTH_CONCERNS: 2
};

export function calculateProductScores(
  product: ProductDefinition,
  answers: Answer[]
): number {
  let totalScore = 0;
  
  // Get primary goal from first question
  const primaryGoal = answers.find(a => a.questionId === 1)?.answers[0];
  if (primaryGoal) {
    const primaryGoalScore = product.scores.find(s => 
      s.condition.toLowerCase() === primaryGoal.toLowerCase()
    )?.score || 0;
    totalScore += primaryGoalScore * QUESTION_WEIGHTS.PRIMARY_GOAL;
  }

  // Get health concerns from second question
  const healthConcerns = answers.find(a => a.questionId === 2)?.answers || [];
  healthConcerns.forEach(concern => {
    const concernScore = product.scores.find(s => 
      s.condition.toLowerCase() === concern.toLowerCase()
    )?.score || 0;
    totalScore += concernScore * QUESTION_WEIGHTS.HEALTH_CONCERNS;
  });

  return totalScore;
}

export function diversifyRecommendations(
  scoredProducts: ScoredProduct[]
): ScoredProduct[] {
  const recommendations: ScoredProduct[] = [];
  const usedCategories = new Set<string>();

  // Sort by score descending
  const sortedProducts = [...scoredProducts].sort((a, b) => b.totalScore - a.totalScore);

  for (const product of sortedProducts) {
    // Check if this product's categories are already well represented
    const newCategories = product.categories.filter(cat => !usedCategories.has(cat));
    
    if (newCategories.length > 0 && recommendations.length < 3) {
      recommendations.push(product);
      product.categories.forEach(cat => usedCategories.add(cat));
    }
  }

  return recommendations;
}