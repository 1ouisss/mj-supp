import { Answer } from "@/components/quiz/types";
import { ProductDefinition } from "../products/productTypes";
import { Product } from "@/components/results/ProductCard";
import { WEIGHTS } from "./constants";
import { calculateCategoryScore, calculateTherapeuticScore } from "./scoring";
import { applySynergyBoosts } from "./synergy";

export function calculateProductScore(
  productDef: ProductDefinition, 
  answers: Answer[]
): Product {
  let totalScore = 0;
  let matchCount = 0;
  
  // Score for primary goal
  const primaryGoal = answers.find(a => a.questionId === 3)?.answers[0];
  if (primaryGoal) {
    const goalScore = productDef.scores.find(s => 
      s.condition === String(primaryGoal))?.score || 0;
    totalScore += goalScore * WEIGHTS.PRIMARY_GOAL;
    if (goalScore > 0) {
      matchCount++;
      console.log(`${productDef.name} matches primary goal: +${goalScore * WEIGHTS.PRIMARY_GOAL}`);
    }
  }
  
  // Score for health concerns
  const healthConcerns = answers.find(a => a.questionId === 4)?.answers || [];
  healthConcerns.forEach(concern => {
    const concernScore = productDef.scores.find(s => 
      s.condition === String(concern))?.score || 0;
    totalScore += concernScore * WEIGHTS.HEALTH_CONCERN;
    if (concernScore > 0) {
      matchCount++;
      console.log(`${productDef.name} matches health concern ${concern}: +${concernScore * WEIGHTS.HEALTH_CONCERN}`);
    }
  });
  
  // Category score
  const categoryScore = calculateCategoryScore(productDef.categories, [
    ...(primaryGoal ? [String(primaryGoal)] : []), 
    ...healthConcerns
  ]);
  totalScore += categoryScore;
  if (categoryScore > 0) {
    matchCount++;
    console.log(`${productDef.name} category score: +${categoryScore}`);
  }

  // Therapeutic claims score
  const therapeuticScore = calculateTherapeuticScore(productDef.therapeuticClaims, healthConcerns);
  totalScore += therapeuticScore;
  if (therapeuticScore > 0) {
    matchCount++;
    console.log(`${productDef.name} therapeutic score: +${therapeuticScore}`);
  }
  
  // Apply synergy boosts
  totalScore = applySynergyBoosts(productDef.id, healthConcerns, totalScore);

  // Calculate confidence level
  const confidenceLevel = Math.min(
    WEIGHTS.MAX_CONFIDENCE,
    Math.max(
      WEIGHTS.MIN_CONFIDENCE,
      WEIGHTS.MIN_CONFIDENCE + (matchCount * 5)
    )
  );

  return {
    ...productDef,
    confidenceLevel,
    score: totalScore
  };
}