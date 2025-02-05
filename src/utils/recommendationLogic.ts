import { Answer } from "@/components/quiz/types";
import { Product } from "@/components/results/ProductCard";
import { PRODUCTS } from "./products/productDatabase";
import { ProductCategory } from "./products/productTypes";

const WEIGHTS = {
  PRIMARY_GOAL: 3,
  HEALTH_CONCERN: 2,
  CATEGORY_MATCH: 1.5,
  THERAPEUTIC_CLAIM: 1,
  MIN_CONFIDENCE: 80,
  MAX_CONFIDENCE: 95,
  MIN_SCORE: 5
};

function calculateCategoryScore(productCategories: ProductCategory[], targetCategories: string[]): number {
  return productCategories.reduce((score, category) => {
    return score + (targetCategories.includes(category) ? WEIGHTS.CATEGORY_MATCH : 0);
  }, 0);
}

function calculateTherapeuticScore(claims: string[] | undefined, concerns: string[]): number {
  if (!claims) return 0;
  return claims.reduce((score, claim) => {
    return score + (concerns.some(concern => 
      claim.toLowerCase().includes(concern.toLowerCase())
    ) ? WEIGHTS.THERAPEUTIC_CLAIM : 0);
  }, 0);
}

function normalizeAnswer(answer: string | number): string {
  return String(answer);
}

export function getRecommendations(answers: Answer[]): Product[] {
  console.group("Generating Recommendations");
  
  try {
    const gender = answers.find(a => a.questionId === 1)?.answers[0];
    const primaryGoal = answers.find(a => a.questionId === 2)?.answers[0];
    const healthConcerns = answers.find(a => a.questionId === 3)?.answers || [];
    
    // Calculate scores for all products
    const scoredProducts = PRODUCTS.map(productDef => {
      if (!gender || !isProductGenderAppropriate(productDef, normalizeAnswer(gender))) {
        return null;
      }

      let totalScore = 0;
      
      // Primary goal scoring
      if (primaryGoal) {
        const goalScore = productDef.scores.find(s => s.condition === normalizeAnswer(primaryGoal))?.score || 0;
        totalScore += goalScore * WEIGHTS.PRIMARY_GOAL;
      }
      
      // Health concerns scoring
      const normalizedHealthConcerns = healthConcerns.map(normalizeAnswer);
      normalizedHealthConcerns.forEach(concern => {
        const concernScore = productDef.scores.find(s => s.condition === concern)?.score || 0;
        totalScore += concernScore * WEIGHTS.HEALTH_CONCERN;
      });
      
      // Category matching
      const relevantCategories = [
        ...(primaryGoal ? [normalizeAnswer(primaryGoal)] : []), 
        ...normalizedHealthConcerns
      ];
      totalScore += calculateCategoryScore(productDef.categories, relevantCategories);
      
      // Therapeutic claims scoring
      totalScore += calculateTherapeuticScore(productDef.therapeuticClaims, normalizedHealthConcerns);

      // Calculate confidence level (80-95% range)
      const confidenceLevel = Math.min(
        WEIGHTS.MAX_CONFIDENCE,
        Math.max(
          WEIGHTS.MIN_CONFIDENCE,
          Math.round((totalScore / 15) * 100)
        )
      );

      const product: Product = {
        ...productDef,
        confidenceLevel,
      };

      return product;
    }).filter((product): product is Product => 
      product !== null && product.confidenceLevel >= WEIGHTS.MIN_CONFIDENCE
    );

    // Sort by confidence level and take top recommendations
    const recommendations = scoredProducts
      .sort((a, b) => b.confidenceLevel - a.confidenceLevel)
      .slice(0, 5);

    console.log("Final recommendations:", recommendations);
    console.groupEnd();

    return recommendations;
  } catch (error) {
    console.error("Error generating recommendations:", error);
    console.groupEnd();
    throw error;
  }
}

function isProductGenderAppropriate(product: Product, gender: string): boolean {
  if (gender === "Homme" && product.categories.includes("women_specific")) {
    return false;
  }
  if (gender === "Femme" && product.categories.includes("men_specific")) {
    return false;
  }
  if (gender === "Je préfère ne pas répondre" && 
      (product.categories.includes("women_specific") || product.categories.includes("men_specific"))) {
    return false;
  }
  return true;
}