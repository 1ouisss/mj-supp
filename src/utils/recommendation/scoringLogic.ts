import { Answer } from "@/components/quiz/types";
import { ProductDefinition } from "../products/productTypes";
import { Product } from "@/components/results/ProductCard";

const WEIGHTS = {
  PRIMARY_GOAL: 4,
  HEALTH_CONCERN: 3,
  CATEGORY_MATCH: 2,
  THERAPEUTIC_CLAIM: 1.5,
  MULTI_MATCH_BONUS: 1.5
};

export function calculateProductScores(product: ProductDefinition, answers: Answer[]): number {
  let totalScore = 0;

  // Score pour l'objectif principal
  const primaryGoalAnswer = answers.find(a => a.questionId === 2)?.answers[0];
  if (primaryGoalAnswer) {
    const primaryGoalScore = product.scores.find(s => s.condition === primaryGoalAnswer)?.score || 0;
    totalScore += primaryGoalScore * WEIGHTS.PRIMARY_GOAL;
  }

  // Score pour les préoccupations de santé
  const healthConcerns = answers.find(a => a.questionId === 3)?.answers || [];
  healthConcerns.forEach(concern => {
    const concernScore = product.scores.find(s => s.condition === concern)?.score || 0;
    if (concernScore > 0) {
      totalScore += concernScore * WEIGHTS.HEALTH_CONCERN;
    }

    // Bonus pour les allégations thérapeutiques correspondantes
    if (product.therapeuticClaims?.some(claim => 
      claim.toLowerCase().includes(concern.toLowerCase())
    )) {
      totalScore += WEIGHTS.THERAPEUTIC_CLAIM;
    }
  });

  // Bonus pour correspondances multiples
  if (healthConcerns.length > 1) {
    const matchingScores = product.scores.filter(s => 
      healthConcerns.includes(s.condition)
    );
    if (matchingScores.length > 1) {
      totalScore *= WEIGHTS.MULTI_MATCH_BONUS;
    }
  }

  return totalScore;
}

export function diversifyRecommendations(scoredProducts: (ProductDefinition & { totalScore: number })[]): Product[] {
  const MIN_CATEGORIES = 2;
  const usedCategories = new Set<string>();
  const recommendations: (ProductDefinition & { totalScore: number })[] = [];

  // Trier par score décroissant
  const sortedProducts = [...scoredProducts].sort((a, b) => b.totalScore - a.totalScore);

  // Première passe : sélectionner les produits les plus pertinents
  for (const product of sortedProducts) {
    if (recommendations.length >= 3) break;

    // Vérifier si une catégorie du produit est déjà utilisée
    const categoryOverlap = product.categories.some(cat => usedCategories.has(cat));
    
    if (!categoryOverlap) {
      recommendations.push(product);
      product.categories.forEach(cat => usedCategories.add(cat));
    }
  }

  // Deuxième passe : assurer la diversité minimale
  if (usedCategories.size < MIN_CATEGORIES && sortedProducts.length > recommendations.length) {
    for (const product of sortedProducts) {
      if (recommendations.includes(product)) continue;

      const newCategories = product.categories.filter(cat => !usedCategories.has(cat));
      if (newCategories.length > 0) {
        recommendations.push(product);
        newCategories.forEach(cat => usedCategories.add(cat));
      }

      if (usedCategories.size >= MIN_CATEGORIES || recommendations.length >= 3) {
        break;
      }
    }
  }

  return recommendations;
}