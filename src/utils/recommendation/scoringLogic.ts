import { Answer } from "@/components/quiz/types";
import { ProductDefinition, ProductCategory } from "../products/productTypes";

interface ScoredProduct extends ProductDefinition {
  totalScore: number;
}

const WEIGHTS = {
  PRIMARY_GOAL: 4,
  HEALTH_CONCERN: 3,
  CATEGORY_MATCH: 2,
  THERAPEUTIC_CLAIM: 1.5,
  MULTI_MATCH_BONUS: 1.5
};

const MIN_CATEGORIES = 2;
const MAX_PRODUCTS_PER_CATEGORY = 1;
const RELEVANCE_THRESHOLD = 0.4; // 40% du score maximum possible

function calculatePrimaryGoalScore(
  product: ProductDefinition,
  primaryGoal: string
): number {
  let score = 0;
  
  const primaryGoalScore = product.scores.find(s => 
    s.condition === primaryGoal
  )?.score || 0;
  
  score += primaryGoalScore * WEIGHTS.PRIMARY_GOAL;
  
  const relevantCategories = PRIMARY_GOAL_CATEGORIES[primaryGoal] || [];
  const matchingCategories = product.categories.filter(cat => 
    relevantCategories.includes(cat)
  );
  
  if (matchingCategories.length > 0) {
    score += WEIGHTS.CATEGORY_MATCH * matchingCategories.length;
    
    if (matchingCategories.length > 1) {
      score *= WEIGHTS.MULTI_MATCH_BONUS;
    }
  }

  return score;
}

function calculateHealthConcernsScore(
  product: ProductDefinition,
  healthConcerns: string[]
): number {
  let score = 0;
  let matchCount = 0;

  healthConcerns.forEach(concern => {
    const concernScore = product.scores.find(s => 
      s.condition === concern
    )?.score || 0;
    
    if (concernScore > 0) {
      score += concernScore * WEIGHTS.HEALTH_CONCERN;
      matchCount++;
    }
    
    if (product.therapeuticClaims?.some(claim => 
      claim.toLowerCase().includes(concern.toLowerCase())
    )) {
      score += WEIGHTS.THERAPEUTIC_CLAIM;
      matchCount++;
    }
  });

  if (matchCount > 1) {
    score *= WEIGHTS.MULTI_MATCH_BONUS;
  }

  return score;
}

function isProductRelevant(product: ScoredProduct, maxScore: number): boolean {
  return product.totalScore >= maxScore * RELEVANCE_THRESHOLD;
}

function getUniqueCategories(products: ProductDefinition[]): Set<ProductCategory> {
  return new Set(products.flatMap(p => p.categories));
}

function diversifyRecommendations(
  scoredProducts: ScoredProduct[]
): ScoredProduct[] {
  console.group("Diversifying recommendations");
  
  try {
    const validProducts = scoredProducts
      .filter(p => p.totalScore > 0)
      .sort((a, b) => b.totalScore - a.totalScore);

    if (validProducts.length === 0) {
      console.log("No valid products found");
      return [];
    }

    const maxScore = Math.max(...validProducts.map(p => p.totalScore));
    const recommendations: ScoredProduct[] = [];
    const usedCategories = new Set<ProductCategory>();

    // Première passe : sélectionner les produits les plus pertinents
    for (const product of validProducts) {
      // Vérifier si le produit est suffisamment pertinent
      if (!isProductRelevant(product, maxScore)) {
        continue;
      }

      // Vérifier si une catégorie du produit est déjà trop représentée
      const categoryOverlap = product.categories.some(cat => 
        usedCategories.has(cat)
      );

      if (!categoryOverlap && recommendations.length < 3) {
        recommendations.push(product);
        product.categories.forEach(cat => usedCategories.add(cat));
      }
    }

    // Deuxième passe : s'assurer d'avoir au moins MIN_CATEGORIES catégories
    if (usedCategories.size < MIN_CATEGORIES && validProducts.length > recommendations.length) {
      for (const product of validProducts) {
        if (recommendations.includes(product)) continue;

        const newCategories = product.categories.filter(cat => !usedCategories.has(cat));
        if (newCategories.length > 0 && isProductRelevant(product, maxScore)) {
          recommendations.push(product);
          newCategories.forEach(cat => usedCategories.add(cat));
        }

        if (usedCategories.size >= MIN_CATEGORIES || recommendations.length >= 3) {
          break;
        }
      }
    }

    console.log("Final recommendations:", recommendations.map(r => ({
      name: r.name,
      score: r.totalScore,
      categories: r.categories
    })));
    
    return recommendations;
  } catch (error) {
    console.error("Error in diversifyRecommendations:", error);
    throw error;
  } finally {
    console.groupEnd();
  }
}

export { calculateProductScores, diversifyRecommendations };

const PRIMARY_GOAL_CATEGORIES: Record<string, ProductCategory[]> = {
  "Renforcer l'immunité": ["immune", "seasonal"],
  "Améliorer l'énergie": ["energy", "concentration"],
  "Soutenir la santé cérébrale": ["brain", "concentration"],
  "Gérer le stress": ["stress", "relaxation"],
  "Améliorer le sommeil": ["sleep", "relaxation"],
  "Améliorer la digestion": ["digestive"]
};
