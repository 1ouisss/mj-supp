import { Answer } from "@/components/quiz/types";
import { ProductDefinition } from "../products/productTypes";

interface ScoredProduct extends ProductDefinition {
  totalScore: number;
}

const QUESTION_WEIGHTS = {
  PRIMARY_GOAL: 5, // Augmenté pour donner plus d'importance à l'objectif principal
  HEALTH_CONCERNS: 3,
  THERAPEUTIC_CLAIMS: 2,
  CATEGORY_MATCH: 2
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
  
  // Get primary goal from first question
  const primaryGoal = answers.find(a => a.questionId === 1)?.answers[0];
  
  if (primaryGoal) {
    // Vérifier les incompatibilités
    const incompatibleCategories = INCOMPATIBLE_CONDITIONS[primaryGoal as keyof typeof INCOMPATIBLE_CONDITIONS] || [];
    if (product.categories.some(cat => incompatibleCategories.includes(cat))) {
      return -1; // Produit incompatible
    }

    // Score direct pour l'objectif principal
    const primaryGoalScore = product.scores.find(s => 
      s.condition.toLowerCase() === primaryGoal.toLowerCase()
    )?.score || 0;
    
    // Bonus pour la compatibilité des catégories
    const compatibleCategories = CATEGORY_COMPATIBILITY[primaryGoal as keyof typeof CATEGORY_COMPATIBILITY] || [];
    const categoryMatch = product.categories.some(cat => compatibleCategories.includes(cat));
    
    totalScore += (primaryGoalScore * QUESTION_WEIGHTS.PRIMARY_GOAL) + 
                 (categoryMatch ? QUESTION_WEIGHTS.CATEGORY_MATCH : 0);
  }

  // Get health concerns from second question
  const healthConcerns = answers.find(a => a.questionId === 2)?.answers || [];
  healthConcerns.forEach(concern => {
    // Score direct pour les préoccupations de santé
    const concernScore = product.scores.find(s => 
      s.condition.toLowerCase() === concern.toLowerCase()
    )?.score || 0;
    
    // Bonus pour la compatibilité des catégories
    const compatibleCategories = CATEGORY_COMPATIBILITY[concern as keyof typeof CATEGORY_COMPATIBILITY] || [];
    const categoryMatch = product.categories.some(cat => compatibleCategories.includes(cat));
    
    totalScore += (concernScore * QUESTION_WEIGHTS.HEALTH_CONCERNS) + 
                 (categoryMatch ? QUESTION_WEIGHTS.CATEGORY_MATCH : 0);
    
    // Bonus pour les allégations thérapeutiques
    if (product.therapeuticClaims?.some(claim => 
      claim.toLowerCase().includes(concern.toLowerCase())
    )) {
      totalScore += QUESTION_WEIGHTS.THERAPEUTIC_CLAIMS;
    }
  });

  return totalScore;
}

export function diversifyRecommendations(
  scoredProducts: ScoredProduct[]
): ScoredProduct[] {
  // Filtrer les produits avec un score positif et trier par score
  const validProducts = scoredProducts
    .filter(p => p.totalScore > 0)
    .sort((a, b) => b.totalScore - a.totalScore);

  // S'assurer d'avoir au moins 3 produits avec un score de confiance > 80%
  const highConfidenceProducts = validProducts.filter(p => 
    Math.min(95, Math.round((p.totalScore / 15) * 100)) >= 80
  );

  if (highConfidenceProducts.length >= 3) {
    // Prendre les 3 meilleurs produits avec haute confiance
    return highConfidenceProducts.slice(0, 3);
  } else {
    // Si nous n'avons pas assez de produits à haute confiance,
    // ajuster les scores pour atteindre le seuil minimum
    const recommendations = validProducts.slice(0, 3).map(product => ({
      ...product,
      totalScore: Math.max(product.totalScore, 12) // Force un minimum de 80% de confiance
    }));

    return recommendations;
  }
}