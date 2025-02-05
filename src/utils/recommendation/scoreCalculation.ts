import { Answer } from "@/components/quiz/types";
import { ProductDefinition } from "../products/productTypes";
import { Product } from "@/components/results/ProductCard";
import { WEIGHTS } from "./constants";
import { calculateCategoryScore, calculateTherapeuticScore } from "./scoring";
import { applySynergyBoosts } from "./synergy";

const MIN_CONFIDENCE = 80;

// Helper function to convert answer values to strings
const convertAnswersToStrings = (answers: (string | number)[]): string[] => {
  return answers.map(answer => String(answer));
};

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
  const stringHealthConcerns = convertAnswersToStrings(healthConcerns);
  
  stringHealthConcerns.forEach(concern => {
    const concernScore = productDef.scores.find(s => 
      s.condition === concern)?.score || 0;
    totalScore += concernScore * WEIGHTS.HEALTH_CONCERN;
    if (concernScore > 0) {
      matchCount++;
      console.log(`${productDef.name} matches health concern ${concern}: +${concernScore * WEIGHTS.HEALTH_CONCERN}`);
    }
  });
  
  // Category score
  const categoryScore = calculateCategoryScore(
    productDef.categories, 
    [...(primaryGoal ? [String(primaryGoal)] : []), ...stringHealthConcerns]
  );
  totalScore += categoryScore;
  if (categoryScore > 0) {
    matchCount++;
    console.log(`${productDef.name} category score: +${categoryScore}`);
  }

  // Therapeutic claims score
  const therapeuticScore = calculateTherapeuticScore(
    productDef.therapeuticClaims, 
    stringHealthConcerns
  );
  totalScore += therapeuticScore;
  if (therapeuticScore > 0) {
    matchCount++;
    console.log(`${productDef.name} therapeutic score: +${therapeuticScore}`);
  }
  
  // Apply synergy boosts
  totalScore = applySynergyBoosts(productDef.id, stringHealthConcerns, totalScore);

  // Calculate confidence level and ensure it meets minimum threshold
  const confidenceLevel = Math.max(
    MIN_CONFIDENCE,
    Math.min(
      WEIGHTS.MAX_CONFIDENCE,
      WEIGHTS.MIN_CONFIDENCE + (matchCount * 5)
    )
  );

  // Return product only if it meets minimum confidence threshold
  if (confidenceLevel >= MIN_CONFIDENCE) {
    return {
      ...productDef,
      confidenceLevel,
      score: totalScore
    };
  }

  // If confidence is too low, return product with zero score to be filtered out
  return {
    ...productDef,
    confidenceLevel,
    score: 0
  };
}