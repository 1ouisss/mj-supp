import { Answer } from "@/components/quiz/types";
import { ProductDefinition } from "../products/productTypes";

interface ScoredProduct extends ProductDefinition {
  totalScore: number;
}

const QUESTION_WEIGHTS = {
  PRIMARY_GOAL: 3,
  HEALTH_CONCERNS: 2
};

const CATEGORY_COMPATIBILITY = {
  "Améliorer le sommeil": ["sleep", "relaxation"],
  "Gérer le stress": ["stress", "relaxation"],
  "Améliorer la digestion": ["digestive", "general_health"],
  "Soutenir la santé cérébrale": ["brain", "concentration"],
  "Problèmes de peau": ["skin", "hair_health"],
  "Améliorer l'énergie": ["energy", "general_health"],
  "Déséquilibres hormonaux": ["hormonal_health"],
  "Renforcer l'immunité": ["immune", "seasonal"],
  "Problèmes articulaires": ["joint_health", "muscle"],
  "Migraines": ["migraine", "brain"],
  "Problèmes de thyroïde": ["thyroid", "hormonal_health"]
};

export function calculateProductScores(
  product: ProductDefinition,
  answers: Answer[]
): number {
  let totalScore = 0;
  
  // Get primary goal from first question
  const primaryGoal = answers.find(a => a.questionId === 1)?.answers[0];
  if (primaryGoal) {
    // Check direct score matches
    const primaryGoalScore = product.scores.find(s => 
      s.condition.toLowerCase() === primaryGoal.toLowerCase()
    )?.score || 0;
    
    // Check category compatibility
    const compatibleCategories = CATEGORY_COMPATIBILITY[primaryGoal as keyof typeof CATEGORY_COMPATIBILITY] || [];
    const categoryMatch = product.categories.some(cat => compatibleCategories.includes(cat));
    
    totalScore += (primaryGoalScore + (categoryMatch ? 1 : 0)) * QUESTION_WEIGHTS.PRIMARY_GOAL;
  }

  // Get health concerns from second question
  const healthConcerns = answers.find(a => a.questionId === 2)?.answers || [];
  healthConcerns.forEach(concern => {
    // Direct score matches
    const concernScore = product.scores.find(s => 
      s.condition.toLowerCase() === concern.toLowerCase()
    )?.score || 0;
    
    // Category compatibility
    const compatibleCategories = CATEGORY_COMPATIBILITY[concern as keyof typeof CATEGORY_COMPATIBILITY] || [];
    const categoryMatch = product.categories.some(cat => compatibleCategories.includes(cat));
    
    totalScore += (concernScore + (categoryMatch ? 1 : 0)) * QUESTION_WEIGHTS.HEALTH_CONCERNS;
    
    // Bonus for therapeutic claims if they match the concern
    if (product.therapeuticClaims?.some(claim => 
      claim.toLowerCase().includes(concern.toLowerCase())
    )) {
      totalScore += QUESTION_WEIGHTS.HEALTH_CONCERNS;
    }
  });

  return totalScore;
}

export function diversifyRecommendations(
  scoredProducts: ScoredProduct[]
): ScoredProduct[] {
  const recommendations: ScoredProduct[] = [];
  const usedCategories = new Set<string>();
  const mainCategories = new Set<string>();

  // Sort by score descending
  const sortedProducts = [...scoredProducts].sort((a, b) => b.totalScore - a.totalScore);

  for (const product of sortedProducts) {
    // Get main category (first category in the array)
    const mainCategory = product.categories[0];
    
    // Check if we already have a product from this main category
    if (!mainCategories.has(mainCategory) && recommendations.length < 3) {
      recommendations.push(product);
      mainCategories.add(mainCategory);
      product.categories.forEach(cat => usedCategories.add(cat));
    }
  }

  // If we don't have enough recommendations, add highest scoring products
  // from unused categories
  while (recommendations.length < 3 && sortedProducts.length > recommendations.length) {
    const nextProduct = sortedProducts.find(p => 
      !recommendations.includes(p) && 
      p.categories.some(cat => !usedCategories.has(cat))
    );
    
    if (nextProduct) {
      recommendations.push(nextProduct);
      nextProduct.categories.forEach(cat => usedCategories.add(cat));
    } else {
      break;
    }
  }

  return recommendations;
}