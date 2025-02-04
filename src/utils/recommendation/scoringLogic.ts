import { Answer } from "@/components/quiz/types";
import { ProductDefinition } from "../products/productTypes";
import { Product } from "@/components/results/ProductCard";

const WEIGHTS = {
  PRIMARY_GOAL: 4,
  HEALTH_CONCERN: 3,
  CATEGORY_MATCH: 2,
  THERAPEUTIC_CLAIM: 1.5,
  MULTI_MATCH_BONUS: 1.5,
  MIN_CONFIDENCE: 80 // Minimum confidence level
};

export function calculateProductScores(product: ProductDefinition, answers: Answer[]): number {
  let totalScore = 0;
  let matchCount = 0;

  // Score pour l'objectif principal
  const primaryGoalAnswer = answers.find(a => a.questionId === 2)?.answers[0];
  if (primaryGoalAnswer) {
    const primaryGoalScore = product.scores.find(s => s.condition === primaryGoalAnswer)?.score || 0;
    if (primaryGoalScore > 0) {
      totalScore += primaryGoalScore * WEIGHTS.PRIMARY_GOAL;
      matchCount++;
    }
  }

  // Score pour les préoccupations de santé
  const healthConcerns = answers.find(a => a.questionId === 3)?.answers || [];
  healthConcerns.forEach(concern => {
    const concernScore = product.scores.find(s => s.condition === concern)?.score || 0;
    if (concernScore > 0) {
      totalScore += concernScore * WEIGHTS.HEALTH_CONCERN;
      matchCount++;
    }

    // Bonus pour les allégations thérapeutiques correspondantes
    if (product.therapeuticClaims?.some(claim => 
      claim.toLowerCase().includes(concern.toLowerCase())
    )) {
      totalScore += WEIGHTS.THERAPEUTIC_CLAIM;
      matchCount++;
    }
  });

  // Bonus pour correspondances multiples
  if (matchCount > 1) {
    totalScore *= WEIGHTS.MULTI_MATCH_BONUS;
  }

  return totalScore;
}

export function diversifyRecommendations(scoredProducts: (ProductDefinition & { totalScore: number })[]): Product[] {
  const MIN_CATEGORIES = 2;
  const usedCategories = new Set<string>();
  const recommendations: Product[] = [];

  // Trier par score décroissant
  const sortedProducts = [...scoredProducts].sort((a, b) => b.totalScore - a.totalScore);

  // Première passe : sélectionner les produits les plus pertinents
  for (const product of sortedProducts) {
    if (recommendations.length >= 3) break;

    // Calculer le niveau de confiance
    let confidenceLevel = Math.min(95, Math.round((product.totalScore / 15) * 100));
    
    // Assurer un niveau minimum de confiance
    confidenceLevel = Math.max(confidenceLevel, WEIGHTS.MIN_CONFIDENCE);

    // Vérifier si une catégorie du produit est déjà utilisée
    const categoryOverlap = product.categories.some(cat => usedCategories.has(cat));
    
    if (!categoryOverlap || recommendations.length < 3) {
      recommendations.push({
        ...product,
        confidenceLevel
      });
      product.categories.forEach(cat => usedCategories.add(cat));
    }
  }

  // Deuxième passe : assurer la diversité minimale
  if (usedCategories.size < MIN_CATEGORIES && sortedProducts.length > recommendations.length) {
    for (const product of sortedProducts) {
      if (recommendations.some(r => r.id === product.id)) continue;

      const newCategories = product.categories.filter(cat => !usedCategories.has(cat));
      if (newCategories.length > 0) {
        recommendations.push({
          ...product,
          confidenceLevel: Math.max(WEIGHTS.MIN_CONFIDENCE, 
            Math.min(95, Math.round((product.totalScore / 15) * 100)))
        });
        newCategories.forEach(cat => usedCategories.add(cat));
      }

      if (usedCategories.size >= MIN_CATEGORIES || recommendations.length >= 3) {
        break;
      }
    }
  }

  return recommendations;
}