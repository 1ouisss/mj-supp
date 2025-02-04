import { Answer } from "@/components/quiz/types";
import { ProductDefinition, ProductCategory } from "../products/productTypes";

interface ScoredProduct extends ProductDefinition {
  totalScore: number;
}

const WEIGHTS = {
  PRIMARY_GOAL: 4, // Augmenté de 3 à 4
  HEALTH_CONCERN: 3, // Augmenté de 2 à 3
  CATEGORY_MATCH: 2, // Augmenté de 1.5 à 2
  THERAPEUTIC_CLAIM: 1.5, // Augmenté de 1 à 1.5
  MULTI_MATCH_BONUS: 1.5 // Nouveau multiplicateur pour les correspondances multiples
};

function calculatePrimaryGoalScore(
  product: ProductDefinition,
  primaryGoal: string
): number {
  let score = 0;
  
  // Score basé sur les scores directs du produit
  const primaryGoalScore = product.scores.find(s => 
    s.condition === primaryGoal
  )?.score || 0;
  
  score += primaryGoalScore * WEIGHTS.PRIMARY_GOAL;
  
  // Bonus pour les catégories correspondantes
  const relevantCategories = PRIMARY_GOAL_CATEGORIES[primaryGoal] || [];
  const matchingCategories = product.categories.filter(cat => 
    relevantCategories.includes(cat)
  );
  
  if (matchingCategories.length > 0) {
    score += WEIGHTS.CATEGORY_MATCH * matchingCategories.length;
    
    // Bonus supplémentaire pour les correspondances multiples
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
    // Score basé sur les scores directs du produit
    const concernScore = product.scores.find(s => 
      s.condition === concern
    )?.score || 0;
    
    if (concernScore > 0) {
      score += concernScore * WEIGHTS.HEALTH_CONCERN;
      matchCount++;
    }
    
    // Score bonus pour les allégations thérapeutiques correspondantes
    if (product.therapeuticClaims?.some(claim => 
      claim.toLowerCase().includes(concern.toLowerCase())
    )) {
      score += WEIGHTS.THERAPEUTIC_CLAIM;
      matchCount++;
    }
  });

  // Bonus pour les correspondances multiples
  if (matchCount > 1) {
    score *= WEIGHTS.MULTI_MATCH_BONUS;
  }

  return score;
}

const PRIMARY_GOAL_CATEGORIES: Record<string, ProductCategory[]> = {
  "Renforcer l'immunité": ["immune", "seasonal"],
  "Améliorer l'énergie": ["energy", "concentration"],
  "Soutenir la santé cérébrale": ["brain", "concentration"],
  "Gérer le stress": ["stress", "relaxation"],
  "Améliorer le sommeil": ["sleep", "relaxation"],
  "Améliorer la digestion": ["digestive"]
};

export function calculateProductScores(
  product: ProductDefinition,
  answers: Answer[]
): number {
  console.group(`Calculating score for ${product.name}`);
  
  try {
    let totalScore = 0;
    
    // Score pour l'objectif principal
    const primaryGoal = answers.find(a => a.questionId === 1)?.answers[0];
    if (primaryGoal) {
      const primaryGoalScore = calculatePrimaryGoalScore(product, primaryGoal);
      totalScore += primaryGoalScore;
      console.log(`Primary goal score: ${primaryGoalScore}`);
    }
    
    // Score pour les préoccupations de santé
    const healthConcerns = answers.find(a => a.questionId === 2)?.answers || [];
    if (healthConcerns.length > 0) {
      const healthConcernsScore = calculateHealthConcernsScore(product, healthConcerns);
      totalScore += healthConcernsScore;
      console.log(`Health concerns score: ${healthConcernsScore}`);
    }
    
    console.log(`Final score for ${product.name}: ${totalScore}`);
    return totalScore;
  } catch (error) {
    console.error(`Error calculating score for ${product.name}:`, error);
    return 0;
  } finally {
    console.groupEnd();
  }
}

export function diversifyRecommendations(
  scoredProducts: ScoredProduct[]
): ScoredProduct[] {
  console.group("Diversifying recommendations");
  
  try {
    // Filtrer les produits avec un score positif et trier par score
    const validProducts = scoredProducts
      .filter(p => p.totalScore > 0)
      .sort((a, b) => b.totalScore - a.totalScore);

    if (validProducts.length === 0) {
      console.log("No valid products found");
      return [];
    }

    const recommendations: ScoredProduct[] = [];
    const usedCategories = new Set<ProductCategory>();

    // Ajouter le produit avec le meilleur score
    recommendations.push(validProducts[0]);
    validProducts[0].categories.forEach(cat => usedCategories.add(cat));

    // Ajouter des produits avec des catégories différentes
    for (const product of validProducts.slice(1)) {
      const hasNewCategories = product.categories.some(
        cat => !usedCategories.has(cat)
      );
      
      if (hasNewCategories && recommendations.length < 3) {
        recommendations.push(product);
        product.categories.forEach(cat => usedCategories.add(cat));
      }

      if (recommendations.length >= 3) break;
    }

    // Si nous n'avons pas assez de recommandations, ajouter les meilleurs produits restants
    while (recommendations.length < 2 && validProducts.length > recommendations.length) {
      const nextProduct = validProducts[recommendations.length];
      if (!recommendations.includes(nextProduct)) {
        recommendations.push(nextProduct);
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