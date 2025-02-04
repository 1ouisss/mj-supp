import { Answer } from "@/components/quiz/types";
import { ProductDefinition } from "../products/productTypes";

interface ScoredProduct extends ProductDefinition {
  totalScore: number;
}

const QUESTION_WEIGHTS = {
  PRIMARY_GOAL: 3,
  HEALTH_CONCERNS: 2,
  THERAPEUTIC_CLAIMS: 1.5
};

// Définir les conditions incompatibles
const INCOMPATIBLE_CONDITIONS = {
  "Améliorer l'énergie": ["sleep", "relaxation"],
  "Améliorer le sommeil": ["energy", "concentration"],
  "Soutenir la santé cérébrale": [],
  "Améliorer la digestion": [],
  "Gérer le stress": []
};

const CATEGORY_COMPATIBILITY = {
  "Améliorer le sommeil": ["sleep", "relaxation"],
  "Gérer le stress": ["stress", "relaxation"],
  "Améliorer la digestion": ["digestive", "general_health"],
  "Soutenir la santé cérébrale": ["brain", "concentration"],
  "Problèmes de peau": ["skin", "hair_health"],
  "Améliorer l'énergie": ["energy", "concentration"],
  "Déséquilibres hormonaux": ["hormonal_health", "thyroid"],
  "Renforcer l'immunité": ["immune", "seasonal"],
  "Problèmes articulaires": ["joint_health", "muscle"],
  "Migraines": ["migraine", "brain"],
  "Problèmes de thyroïde": ["thyroid", "hormonal_health"]
};

export function calculateProductScores(
  product: ProductDefinition,
  answers: Answer[]
): number {
  let totalScore = 0;
  let hasIncompatibleCondition = false;
  
  // Get primary goal from first question
  const primaryGoal = answers.find(a => a.questionId === 1)?.answers[0];
  
  // Vérifier les incompatibilités
  if (primaryGoal) {
    const incompatibleCategories = INCOMPATIBLE_CONDITIONS[primaryGoal as keyof typeof INCOMPATIBLE_CONDITIONS] || [];
    if (product.categories.some(cat => incompatibleCategories.includes(cat))) {
      return -1; // Produit incompatible
    }

    // Check direct score matches
    const primaryGoalScore = product.scores.find(s => 
      s.condition.toLowerCase() === primaryGoal.toLowerCase()
    )?.score || 0;
    
    // Check category compatibility
    const compatibleCategories = CATEGORY_COMPATIBILITY[primaryGoal as keyof typeof CATEGORY_COMPATIBILITY] || [];
    const categoryMatch = product.categories.some(cat => compatibleCategories.includes(cat));
    
    totalScore += (primaryGoalScore + (categoryMatch ? 1 : 0)) * QUESTION_WEIGHTS.PRIMARY_GOAL;
  }

  // Get health concerns from second question
  const healthConcerns = answers.find(a => a.questionId === 2)?.answers || [];
  healthConcerns.forEach(concern => {
    // Direct score matches
    const concernScore = product.scores.find(s => 
      s.condition.toLowerCase() === concern.toLowerCase()
    )?.score || 0;
    
    // Category compatibility
    const compatibleCategories = CATEGORY_COMPATIBILITY[concern as keyof typeof CATEGORY_COMPATIBILITY] || [];
    const categoryMatch = product.categories.some(cat => compatibleCategories.includes(cat));
    
    totalScore += (concernScore + (categoryMatch ? 1 : 0)) * QUESTION_WEIGHTS.HEALTH_CONCERNS;
    
    // Bonus pour les allégations thérapeutiques
    if (product.therapeuticClaims?.some(claim => 
      claim.toLowerCase().includes(concern.toLowerCase())
    )) {
      totalScore += QUESTION_WEIGHTS.THERAPEUTIC_CLAIMS;
    }
  });

  return hasIncompatibleCondition ? -1 : totalScore;
}

export function diversifyRecommendations(
  scoredProducts: ScoredProduct[]
): ScoredProduct[] {
  const recommendations: ScoredProduct[] = [];
  const usedCategories = new Set<string>();
  
  // Filtrer les produits avec un score positif et trier par score
  const validProducts = scoredProducts
    .filter(p => p.totalScore > 0)
    .sort((a, b) => b.totalScore - a.totalScore);

  // Sélectionner les meilleurs produits en évitant les doublons de catégories
  for (const product of validProducts) {
    const mainCategory = product.categories[0];
    
    // Vérifier si nous avons déjà un produit de cette catégorie principale
    if (!usedCategories.has(mainCategory) && recommendations.length < 3) {
      recommendations.push(product);
      product.categories.forEach(cat => usedCategories.add(cat));
    }
  }

  // Si nous n'avons pas assez de recommandations, ajouter les produits suivants
  // avec des catégories différentes
  while (recommendations.length < 3 && validProducts.length > recommendations.length) {
    const nextProduct = validProducts.find(p => 
      !recommendations.includes(p) && 
      p.categories.some(cat => !usedCategories.has(cat))
    );
    
    if (nextProduct) {
      recommendations.push(nextProduct);
      nextProduct.categories.forEach(cat => usedCategories.add(cat));
    } else {
      break;
    }
  }

  return recommendations;
}