import { Answer } from "@/components/quiz/types";
import { Product } from "@/components/results/ProductCard";
import { PRODUCTS } from "./products/productDatabase";
import { WEIGHTS } from "./recommendation/constants";
import { calculateCategoryScore, calculateTherapeuticScore, normalizeAnswer } from "./recommendation/scoring";
import { isAgeAppropriate, isProductGenderAppropriate } from "./recommendation/filters";
import { getFallbackProducts } from "./recommendation/fallback";
import { ensureCategoryDiversity } from "./recommendation/diversity";
import { applySynergyBoosts } from "./recommendation/synergy";
import { ProductDefinition } from "./products/productTypes";

function calculateSeverityMultiplier(answers: Answer[]): { [key: string]: number } {
  const severityMultipliers: { [key: string]: number } = {};
  
  answers.forEach(answer => {
    if (answer.followUpAnswers) {
      answer.followUpAnswers.forEach(followUp => {
        if (followUp.questionId === 402) {
          const severity = Number(followUp.answers[0]);
          severityMultipliers["Stress"] = severity / 5;
        }
      });
    }
  });

  return severityMultipliers;
}

export function getRecommendations(answers: Answer[]): Product[] {
  console.group("Generating Recommendations");
  
  try {
    const gender = answers.find(a => a.questionId === 1)?.answers[0];
    const age = answers.find(a => a.questionId === 2)?.answers[0];
    const primaryGoal = answers.find(a => a.questionId === 3)?.answers[0];
    const healthConcerns = answers.find(a => a.questionId === 4)?.answers || [];
    const severityMultipliers = calculateSeverityMultiplier(answers);
    
    const scoredProducts = PRODUCTS.map(productDef => {
      if (!gender || 
          !isProductGenderAppropriate(productDef, normalizeAnswer(gender)) ||
          !isAgeAppropriate(productDef, normalizeAnswer(age))) {
        return null;
      }

      let totalScore = 0;
      let matchCount = 0;
      
      if (primaryGoal) {
        const goalScore = productDef.scores.find(s => 
          s.condition === normalizeAnswer(primaryGoal))?.score || 0;
        totalScore += goalScore * WEIGHTS.PRIMARY_GOAL;
        if (goalScore > 0) matchCount++;
      }
      
      const normalizedHealthConcerns = healthConcerns.map(normalizeAnswer);
      normalizedHealthConcerns.forEach(concern => {
        const concernScore = productDef.scores.find(s => s.condition === concern)?.score || 0;
        const severityMultiplier = severityMultipliers[concern] || 1;
        totalScore += concernScore * WEIGHTS.HEALTH_CONCERN * severityMultiplier;
        if (concernScore > 0) matchCount++;
      });
      
      const relevantCategories = [
        ...(primaryGoal ? [normalizeAnswer(primaryGoal)] : []), 
        ...normalizedHealthConcerns
      ];
      totalScore += calculateCategoryScore(productDef.categories, relevantCategories);
      totalScore += calculateTherapeuticScore(productDef.therapeuticClaims, normalizedHealthConcerns);
      
      totalScore = applySynergyBoosts(productDef.id, normalizedHealthConcerns, totalScore);

      const confidenceLevel = Math.min(
        WEIGHTS.MAX_CONFIDENCE,
        Math.max(
          WEIGHTS.MIN_CONFIDENCE,
          WEIGHTS.MIN_CONFIDENCE + (matchCount * 5)
        )
      );

      const product: Product = {
        id: productDef.id,
        name: productDef.name,
        description: productDef.description,
        imageUrl: productDef.imageUrl,
        expectedResults: productDef.expectedResults,
        recommendationReason: productDef.recommendationReason,
        dietaryInfo: productDef.dietaryInfo,
        productUrl: productDef.productUrl,
        categories: productDef.categories,
        therapeuticClaims: productDef.therapeuticClaims,
        confidenceLevel,
        score: totalScore
      };

      return product;
    }).filter((product): product is Product => 
      product !== null && product.confidenceLevel >= WEIGHTS.MIN_CONFIDENCE
    );

    let recommendations = ensureCategoryDiversity(
      scoredProducts.sort((a, b) => (b.score || 0) - (a.score || 0))
    );

    if (recommendations.length < WEIGHTS.MIN_RECOMMENDATIONS && gender && age) {
      const fallbackProducts = getFallbackProducts(
        normalizeAnswer(gender),
        normalizeAnswer(age)
      );
      recommendations = [...recommendations, ...fallbackProducts]
        .slice(0, WEIGHTS.MIN_RECOMMENDATIONS);
    }

    console.log("Final recommendations:", recommendations);
    console.groupEnd();

    return recommendations;
  } catch (error) {
    console.error("Error generating recommendations:", error);
    console.groupEnd();
    throw error;
  }
}