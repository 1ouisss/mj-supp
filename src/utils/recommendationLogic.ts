import { Answer } from "@/components/quiz/types";
import { Product } from "@/components/results/ProductCard";
import { PRODUCTS } from "./products/productDatabase";
import { ProductCategory, ProductDefinition, TimeFrame } from "./products/productTypes";

const WEIGHTS = {
  PRIMARY_GOAL: 3,
  HEALTH_CONCERN: 2,
  CATEGORY_MATCH: 1.5,
  THERAPEUTIC_CLAIM: 1,
  SYNERGY_BOOST: 1.5,
  MISMATCH_PENALTY: 0.5,
  MIN_CONFIDENCE: 80,
  MAX_CONFIDENCE: 100,
  MIN_CATEGORIES: 2,
  MAX_PRODUCTS_PER_CATEGORY: 2,
  MIN_RECOMMENDATIONS: 3
};

const PRODUCT_SYNERGIES = {
  BRAIN_HEALTH: ['focus', 'omega-3'],
  SLEEP_STRESS: ['magnesium', 'melatonine']
};

function calculateCategoryScore(productCategories: ProductCategory[], targetCategories: string[]): number {
  return productCategories.reduce((score, category) => {
    const isRelevant = targetCategories.includes(category);
    return score + (isRelevant ? WEIGHTS.CATEGORY_MATCH : -WEIGHTS.MISMATCH_PENALTY);
  }, 0);
}

function calculateTherapeuticScore(claims: string[] | undefined, concerns: string[]): number {
  if (!claims) return 0;
  return claims.reduce((score, claim) => {
    const matchingConcerns = concerns.filter(concern => 
      claim.toLowerCase().includes(normalizeAnswer(concern).toLowerCase())
    );
    return score + (matchingConcerns.length * WEIGHTS.THERAPEUTIC_CLAIM);
  }, 0);
}

function normalizeAnswer(answer: string | number): string {
  return String(answer);
}

function isProductGenderAppropriate(product: ProductDefinition, gender: string): boolean {
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

function isAgeAppropriate(product: ProductDefinition, age: string): boolean {
  if (age === "<18" && !product.categories.includes("children")) {
    return false;
  }
  if (age !== "<18" && product.categories.includes("children")) {
    return false;
  }
  return true;
}

function getFallbackProducts(gender: string, age: string): Product[] {
  return PRODUCTS
    .filter(product => 
      product.categories.includes("general_health") &&
      isProductGenderAppropriate(product, gender) &&
      isAgeAppropriate(product, age)
    )
    .map(product => ({
      ...product,
      confidenceLevel: WEIGHTS.MIN_CONFIDENCE
    }))
    .slice(0, 2);
}

function applySynergyBoosts(productId: string, concerns: string[], baseScore: number): number {
  let synergyScore = baseScore;

  if (concerns.includes("Soutenir la santé cérébrale") && 
      PRODUCT_SYNERGIES.BRAIN_HEALTH.includes(productId)) {
    synergyScore *= WEIGHTS.SYNERGY_BOOST;
  }

  if (concerns.includes("Améliorer le sommeil") && 
      concerns.includes("Gérer le stress") && 
      PRODUCT_SYNERGIES.SLEEP_STRESS.includes(productId)) {
    synergyScore *= WEIGHTS.SYNERGY_BOOST;
  }

  return synergyScore;
}

function calculateSeverityMultiplier(answers: Answer[]): { [key: string]: number } {
  const severityMultipliers: { [key: string]: number } = {};
  
  answers.forEach(answer => {
    if (answer.followUpAnswers) {
      answer.followUpAnswers.forEach(followUp => {
        if (followUp.questionId === 402) { // Stress severity question
          const severity = Number(followUp.answers[0]);
          severityMultipliers["Stress"] = severity / 5; // Normalize to a 0-2 range
        }
      });
    }
  });

  return severityMultipliers;
}

function ensureCategoryDiversity(recommendations: Product[]): Product[] {
  const categoryCount: { [key: string]: number } = {};
  const diverseRecommendations: Product[] = [];

  recommendations.forEach(product => {
    const canAdd = product.categories.every(category => 
      (categoryCount[category] || 0) < WEIGHTS.MAX_PRODUCTS_PER_CATEGORY
    );

    if (canAdd) {
      product.categories.forEach(category => {
        categoryCount[category] = (categoryCount[category] || 0) + 1;
      });
      diverseRecommendations.push(product);
    }
  });

  return diverseRecommendations;
}

export function getRecommendations(answers: Answer[]): Product[] {
  console.group("Generating Recommendations");
  
  try {
    const gender = answers.find(a => a.questionId === 1)?.answers[0];
    const age = answers.find(a => a.questionId === 2)?.answers[0];
    const primaryGoal = answers.find(a => a.questionId === 3)?.answers[0];
    const healthConcerns = answers.find(a => a.questionId === 4)?.answers || [];
    const severityMultipliers = calculateSeverityMultiplier(answers);
    
    // Calculate scores for all products
    const scoredProducts = PRODUCTS.map(productDef => {
      if (!gender || 
          !isProductGenderAppropriate(productDef, normalizeAnswer(gender)) ||
          !isAgeAppropriate(productDef, normalizeAnswer(age))) {
        return null;
      }

      let totalScore = 0;
      let matchCount = 0;
      
      // Primary goal scoring
      if (primaryGoal) {
        const goalScore = productDef.scores.find(s => 
          s.condition === normalizeAnswer(primaryGoal))?.score || 0;
        totalScore += goalScore * WEIGHTS.PRIMARY_GOAL;
        if (goalScore > 0) matchCount++;
      }
      
      // Health concerns scoring with severity multiplier
      const normalizedHealthConcerns = healthConcerns.map(normalizeAnswer);
      normalizedHealthConcerns.forEach(concern => {
        const concernScore = productDef.scores.find(s => s.condition === concern)?.score || 0;
        const severityMultiplier = severityMultipliers[concern] || 1;
        totalScore += concernScore * WEIGHTS.HEALTH_CONCERN * severityMultiplier;
        if (concernScore > 0) matchCount++;
      });
      
      // Category and therapeutic claims scoring
      const relevantCategories = [
        ...(primaryGoal ? [normalizeAnswer(primaryGoal)] : []), 
        ...normalizedHealthConcerns
      ];
      totalScore += calculateCategoryScore(productDef.categories, relevantCategories);
      totalScore += calculateTherapeuticScore(productDef.therapeuticClaims, normalizedHealthConcerns);
      
      // Apply synergy boosts
      totalScore = applySynergyBoosts(productDef.id, normalizedHealthConcerns, totalScore);

      // Calculate confidence level (80-100% range)
      const confidenceLevel = Math.min(
        WEIGHTS.MAX_CONFIDENCE,
        Math.max(
          WEIGHTS.MIN_CONFIDENCE,
          WEIGHTS.MIN_CONFIDENCE + (matchCount * 5)
        )
      );

      const product: Product = {
        ...productDef,
        confidenceLevel,
        score: totalScore // Now TypeScript knows this is allowed
      };

      return product;
    }).filter((product): product is Product => 
      product !== null && product.confidenceLevel >= WEIGHTS.MIN_CONFIDENCE
    );

    // Sort by score and ensure category diversity
    let recommendations = ensureCategoryDiversity(
      scoredProducts.sort((a, b) => (b.score || 0) - (a.score || 0))
    );

    // Add fallback products if needed
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
