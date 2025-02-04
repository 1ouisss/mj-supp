import { Answer } from "@/components/quiz/types";
import { ProductDefinition } from "../products/productTypes";

interface ScoredProduct extends ProductDefinition {
  totalScore: number;
}

const QUESTION_WEIGHTS = {
  PRIMARY_GOAL: 3,
  HEALTH_CONCERNS: 2,
  CATEGORY_MATCH: 1.5,
  THERAPEUTIC_CLAIMS: 1
};

// Mapping des objectifs principaux aux catégories
const PRIMARY_GOAL_CATEGORIES = {
  "Renforcer l'immunité": ["immune", "seasonal"],
  "Améliorer l'énergie": ["energy", "concentration"],
  "Soutenir la santé cérébrale": ["brain", "concentration"],
  "Gérer le stress": ["stress", "relaxation"],
  "Améliorer le sommeil": ["sleep", "relaxation"],
  "Améliorer la digestion": ["digestive"]
} as const;

export function calculateProductScores(
  product: ProductDefinition,
  answers: Answer[]
): number {
  let totalScore = 0;
  console.group(`Calculating score for ${product.name}`);

  // Get primary goal from first question
  const primaryGoal = answers.find(a => a.questionId === 1)?.answers[0];
  if (primaryGoal) {
    // Score based on direct product scores
    const primaryGoalScore = product.scores.find(s => 
      s.condition === primaryGoal
    )?.score || 0;
    
    totalScore += primaryGoalScore * QUESTION_WEIGHTS.PRIMARY_GOAL;
    
    // Additional score for category match
    const relevantCategories = PRIMARY_GOAL_CATEGORIES[primaryGoal as keyof typeof PRIMARY_GOAL_CATEGORIES] || [];
    const hasRelevantCategory = product.categories.some(cat => 
      relevantCategories.includes(cat as any)
    );
    
    if (hasRelevantCategory) {
      totalScore += QUESTION_WEIGHTS.CATEGORY_MATCH;
    }

    console.log(`Primary goal score for ${primaryGoal}: ${primaryGoalScore * QUESTION_WEIGHTS.PRIMARY_GOAL}`);
  }

  // Get health concerns from second question
  const healthConcerns = answers.find(a => a.questionId === 2)?.answers || [];
  healthConcerns.forEach(concern => {
    // Score based on direct product scores
    const concernScore = product.scores.find(s => 
      s.condition === concern
    )?.score || 0;
    
    totalScore += concernScore * QUESTION_WEIGHTS.HEALTH_CONCERNS;

    // Additional score for therapeutic claims match
    if (product.therapeuticClaims?.some(claim => 
      claim.toLowerCase().includes(concern.toLowerCase())
    )) {
      totalScore += QUESTION_WEIGHTS.THERAPEUTIC_CLAIMS;
    }

    console.log(`Health concern score for ${concern}: ${concernScore * QUESTION_WEIGHTS.HEALTH_CONCERNS}`);
  });

  console.log(`Final score for ${product.name}: ${totalScore}`);
  console.groupEnd();

  return totalScore;
}

export function diversifyRecommendations(
  scoredProducts: ScoredProduct[]
): ScoredProduct[] {
  console.group("Diversifying recommendations");
  
  try {
    // Filter products with positive scores and sort by score
    const validProducts = scoredProducts
      .filter(p => p.totalScore > 0)
      .sort((a, b) => b.totalScore - a.totalScore);

    if (validProducts.length === 0) {
      console.log("No valid products found");
      console.groupEnd();
      return [];
    }

    const recommendations: ScoredProduct[] = [];
    const usedCategories = new Set<string>();

    // Always include the highest scoring product
    recommendations.push(validProducts[0]);
    validProducts[0].categories.forEach(cat => usedCategories.add(cat));

    // Add remaining products while ensuring category diversity
    for (const product of validProducts.slice(1)) {
      // Check if this product adds new categories
      const newCategories = product.categories.filter(cat => !usedCategories.has(cat));
      
      if (newCategories.length > 0 && recommendations.length < 3) {
        recommendations.push(product);
        newCategories.forEach(cat => usedCategories.add(cat));
      }

      if (recommendations.length >= 3) break;
    }

    // If we still need more recommendations, add highest scoring remaining products
    while (recommendations.length < 2 && validProducts.length > recommendations.length) {
      const nextProduct = validProducts[recommendations.length];
      if (!recommendations.includes(nextProduct)) {
        recommendations.push(nextProduct);
      }
    }

    console.log("Final recommendations:", recommendations.map(r => ({
      name: r.name,
      score: r.totalScore,
      categories: r.categories
    })));
    
    console.groupEnd();
    return recommendations;
  } catch (error) {
    console.error("Error in diversifyRecommendations:", error);
    console.groupEnd();
    throw error;
  }
}