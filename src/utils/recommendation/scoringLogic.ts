import { Answer } from "@/components/quiz/types";
import { ProductDefinition } from "../products/productTypes";
import { Product } from "@/components/results/ProductCard";

const WEIGHTS = {
  PRIMARY_GOAL: 4,
  HEALTH_CONCERN: 3,
  CATEGORY_MATCH: 2,
  THERAPEUTIC_CLAIM: 1.5,
  MULTI_MATCH_BONUS: 1.5,
  MIN_CONFIDENCE: 80,
  MAX_CONFIDENCE: 95
};

function normalizeAnswer(answer: string | number): string {
  return String(answer);
}

export function calculateProductScores(product: ProductDefinition, answers: Answer[]): number {
  let totalScore = 0;
  let matchCount = 0;

  // Score pour l'objectif principal
  const primaryGoalAnswer = answers.find(a => a.questionId === 2)?.answers[0];
  if (primaryGoalAnswer) {
    const primaryGoalScore = product.scores.find(s => 
      s.condition === normalizeAnswer(primaryGoalAnswer))?.score || 0;
    if (primaryGoalScore > 0) {
      totalScore += primaryGoalScore * WEIGHTS.PRIMARY_GOAL;
      matchCount++;
    }
  }

  // Score pour les préoccupations de santé
  const healthConcerns = answers.find(a => a.questionId === 3)?.answers || [];
  healthConcerns.forEach(concern => {
    const concernScore = product.scores.find(s => 
      s.condition === normalizeAnswer(concern))?.score || 0;
    if (concernScore > 0) {
      totalScore += concernScore * WEIGHTS.HEALTH_CONCERN;
      matchCount++;
    }

    // Bonus pour les allégations thérapeutiques correspondantes
    if (product.therapeuticClaims?.some(claim => 
      claim.toLowerCase().includes(normalizeAnswer(concern).toLowerCase())
    )) {
      totalScore += WEIGHTS.THERAPEUTIC_CLAIM;
      matchCount++;
    }
  });

  // Bonus pour correspondances multiples
  if (matchCount > 1) {
    totalScore *= WEIGHTS.MULTI_MATCH_BONUS;
  }

  // Assurer un score minimum pour les produits pertinents
  if (totalScore > 0) {
    totalScore = Math.max(totalScore, WEIGHTS.MIN_CONFIDENCE);
  }

  return Math.min(totalScore, WEIGHTS.MAX_CONFIDENCE);
}