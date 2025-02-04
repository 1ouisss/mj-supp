import type { Answer } from "@/components/quiz/types";
import type { Product } from "@/components/results/ProductCard";

// Product categories
type ProductCategory = 
  | "relaxation" 
  | "sleep" 
  | "stress" 
  | "digestive" 
  | "general_health" 
  | "brain" 
  | "concentration" 
  | "energy" 
  | "hair_health" 
  | "skin";

interface ProductWithCategories extends Product {
  categories: ProductCategory[];
  keywords: string[];
}

const PRODUCTS: ProductWithCategories[] = [
  {
    id: "melatonine",
    name: "Mélatonine",
    description: "Aide naturelle pour améliorer la qualité du sommeil et réduire l'insomnie.",
    imageUrl: "/lovable-uploads/22745bb0-8d77-4396-a470-13ee7a473f54.png",
    expectedResults: "Sommeil réparateur, réduction des troubles du sommeil 🌙",
    recommendationReason: "Aide naturelle pour le sommeil et la relaxation",
    dietaryInfo: "Vegan, Sans gluten",
    confidenceLevel: 95,
    productUrl: "https://maisonjacynthe.ca/fr/melatonine-cerise",
    categories: ["relaxation", "sleep"],
    keywords: ["sommeil", "insomnie", "stress", "relaxation"]
  },
  {
    id: "magnesium",
    name: "Magnésium",
    description: "Essentiel pour la relaxation musculaire et nerveuse.",
    imageUrl: "/lovable-uploads/1b29c20b-ccd6-4eae-a0cd-81d85ed7aeae.png",
    expectedResults: "Réduction du stress, meilleure qualité de sommeil, soutien musculaire 🛌",
    recommendationReason: "Soutien pour la relaxation et le stress",
    dietaryInfo: "Vegan, Sans gluten",
    confidenceLevel: 90,
    productUrl: "https://maisonjacynthe.ca/fr/capsules-vegetales-magnesium",
    categories: ["relaxation", "stress"],
    keywords: ["stress", "sommeil", "muscles", "relaxation"]
  },
  {
    id: "poudre-dodo",
    name: "Poudre Dodo",
    description: "Mélange naturel pour favoriser le sommeil profond.",
    imageUrl: "/lovable-uploads/7c391ca6-e829-4dbb-ab08-3882ec7920b7.png",
    expectedResults: "Amélioration de l'endormissement, sommeil apaisant 😴",
    recommendationReason: "Solution naturelle pour le sommeil",
    dietaryInfo: "Vegan, Sans gluten",
    confidenceLevel: 85,
    productUrl: "https://maisonjacynthe.ca/fr/dodo-super-poudre",
    categories: ["relaxation", "sleep"],
    keywords: ["sommeil", "relaxation", "stress"]
  },
  {
    id: "respire-bien",
    name: "Respire Bien",
    description: "Aide à calmer le système respiratoire pour un meilleur repos.",
    imageUrl: "/lovable-uploads/09828cf6-98cd-4248-959b-2afb82d3781f.png",
    expectedResults: "Détente physique, amélioration de la respiration 💨",
    recommendationReason: "Soutien respiratoire et relaxation",
    dietaryInfo: "100% Naturel",
    confidenceLevel: 80,
    productUrl: "https://maisonjacynthe.ca/fr/respire-bien-vapo",
    categories: ["relaxation"],
    keywords: ["respiration", "relaxation", "sommeil"]
  },
  {
    id: "jus-aloes",
    name: "Jus d'Aloès",
    description: "Boisson naturelle pour soutenir la santé digestive.",
    imageUrl: "/lovable-uploads/8fe4ae95-85e6-4127-a217-447d2915f2f0.png",
    expectedResults: "Amélioration de la digestion, soulagement des maux d'estomac 🍃",
    recommendationReason: "Soutien digestif naturel",
    dietaryInfo: "100% Naturel, Vegan",
    confidenceLevel: 90,
    productUrl: "https://maisonjacynthe.ca/fr/jus-d-aloes",
    categories: ["digestive"],
    keywords: ["digestion", "estomac", "intestin"]
  },
  {
    id: "fibres-ami",
    name: "Fibres & l'Ami",
    description: "Mélange riche en fibres pour soutenir la santé intestinale.",
    imageUrl: "/lovable-uploads/20a35551-6b6b-4876-8c89-8bc7c88782cc.png",
    expectedResults: "Amélioration du transit intestinal, soutien digestif 🥗",
    recommendationReason: "Santé digestive optimale",
    dietaryInfo: "Vegan, Sans gluten",
    confidenceLevel: 85,
    productUrl: "https://maisonjacynthe.ca/fr/duo-de-base-pour-un-ventre-plat",
    categories: ["digestive"],
    keywords: ["digestion", "transit", "intestin"]
  },
  {
    id: "focus",
    name: "Focus",
    description: "Aide à la concentration et à la clarté mentale.",
    imageUrl: "/lovable-uploads/75ff84e8-c303-4908-9110-609c7e765eec.png",
    expectedResults: "Amélioration de la concentration et de la mémoire 💡",
    recommendationReason: "Soutien cognitif et mental",
    dietaryInfo: "Vegan, Sans gluten",
    confidenceLevel: 95,
    productUrl: "https://maisonjacynthe.ca/fr/focus",
    categories: ["brain", "concentration"],
    keywords: ["concentration", "mémoire", "mental"]
  },
  {
    id: "champignons-adaptogenes",
    name: "Champignons & Adaptogènes",
    description: "Complexe de champignons médicinaux pour la gestion du stress.",
    imageUrl: "/lovable-uploads/b254b737-e6ef-457f-ae66-fa69df445e12.png",
    expectedResults: "Renforcement immunitaire, équilibre du stress, vitalité accrue 🍄",
    recommendationReason: "Gestion du stress et immunité",
    dietaryInfo: "Vegan, Sans gluten",
    confidenceLevel: 90,
    productUrl: "https://maisonjacynthe.ca/fr/champignons-et-adaptogenes",
    categories: ["stress", "brain"],
    keywords: ["stress", "immunité", "énergie"]
  },
  {
    id: "energie-adaptogenes",
    name: "Énergie & Adaptogènes",
    description: "Mélange d'herbes pour augmenter l'énergie et réduire le stress.",
    imageUrl: "/lovable-uploads/d8dda143-00ec-455f-bc07-9fcc6c854721.png",
    expectedResults: "Augmentation de l'énergie, meilleure adaptation au stress ⚡",
    recommendationReason: "Boost d'énergie et gestion du stress",
    dietaryInfo: "Vegan, Sans gluten",
    confidenceLevel: 95,
    productUrl: "https://maisonjacynthe.ca/fr/energie-adaptogene",
    categories: ["energy", "stress"],
    keywords: ["énergie", "stress", "vitalité"]
  },
  {
    id: "zinc",
    name: "Zinc",
    description: "Soutient le système immunitaire et la santé de la peau.",
    imageUrl: "/lovable-uploads/69fac7c4-db16-461e-bdbe-8322e037ddcb.png",
    expectedResults: "Renforcement immunitaire, réduction des inflammations cutanées 🛡️",
    recommendationReason: "Soutien immunitaire et cutané",
    dietaryInfo: "Vegan, Sans gluten",
    confidenceLevel: 85,
    productUrl: "https://maisonjacynthe.ca/fr/zinc-cuivre",
    categories: ["hair_health", "skin"],
    keywords: ["immunité", "peau", "inflammation"]
  },
  {
    id: "cocktail-cheveux",
    name: "Cocktail Cheveux",
    description: "Soutien pour des cheveux plus épais et plus forts.",
    imageUrl: "/lovable-uploads/cf2a70e5-72c3-43e4-b261-cd5d17373860.png",
    expectedResults: "Amélioration de la santé capillaire 💇‍♀️",
    recommendationReason: "Santé et beauté des cheveux",
    dietaryInfo: "Vegan, Sans gluten",
    confidenceLevel: 90,
    productUrl: "https://maisonjacynthe.ca/fr/cocktail-cheveux",
    categories: ["hair_health"],
    keywords: ["cheveux", "beauté"]
  },
  {
    id: "silice",
    name: "Silice",
    description: "Favorise des ongles, cheveux et peau plus sains.",
    imageUrl: "/lovable-uploads/7b075e38-a724-4460-9c61-0636c56e64ac.png",
    expectedResults: "Renforcement des cheveux, éclat de la peau ✨",
    recommendationReason: "Beauté globale",
    dietaryInfo: "Vegan, Sans gluten",
    confidenceLevel: 85,
    productUrl: "https://maisonjacynthe.ca/fr/silice",
    categories: ["hair_health", "skin"],
    keywords: ["cheveux", "peau", "ongles"]
  },
  {
    id: "multivitamines",
    name: "Multivitamines",
    description: "Formule complète pour le soutien quotidien.",
    imageUrl: "/lovable-uploads/83811a8d-7d09-452e-9991-a4f4ef7c4c71.png",
    expectedResults: "Soutien général, renforcement de l'énergie 🏋️‍♂️",
    recommendationReason: "Soutien nutritionnel complet",
    dietaryInfo: "Vegan, Sans gluten",
    confidenceLevel: 80,
    productUrl: "https://maisonjacynthe.ca/fr/multivitamine-la-totale",
    categories: ["general_health"],
    keywords: ["général", "énergie", "vitalité"]
  },
  {
    id: "omega-3",
    name: "Oméga-3",
    description: "Soutient la santé cardiovasculaire et cérébrale.",
    imageUrl: "/lovable-uploads/9b2bbab2-451b-4cae-993b-bbe8ddd50663.png",
    expectedResults: "Soutien cognitif et cardiovasculaire 🧠",
    recommendationReason: "Santé cognitive et cardiaque",
    dietaryInfo: "Sans gluten",
    confidenceLevel: 85,
    productUrl: "https://maisonjacynthe.ca/fr/omega-astaxanthine",
    categories: ["general_health"],
    keywords: ["cerveau", "coeur", "général"]
  }
];

function calculateProductScore(
  product: ProductWithCategories,
  primaryGoal: string,
  healthConcerns: string[]
): number {
  let score = 0;
  
  // Primary Goal scoring (Weight = 3)
  if (product.keywords.some(keyword => 
    primaryGoal.toLowerCase().includes(keyword) || 
    keyword.includes(primaryGoal.toLowerCase())
  )) {
    score += 3;
  }

  // Health Concerns scoring (Weight = 2 per concern)
  healthConcerns.forEach(concern => {
    if (product.keywords.some(keyword => 
      concern.toLowerCase().includes(keyword) || 
      keyword.includes(concern.toLowerCase())
    )) {
      score += 2;
    }
  });

  return score;
}

export function getRecommendations(answers: Answer[]): Product[] {
  // Get primary goal and health concerns from answers
  const primaryGoal = answers.find(a => a.questionId === 1)?.answers[0] || "";
  const healthConcerns = answers.find(a => a.questionId === 2)?.answers || [];

  // Calculate scores for all products
  const scoredProducts = PRODUCTS.map(product => ({
    ...product,
    score: calculateProductScore(product, primaryGoal, healthConcerns)
  }));

  // Sort by score
  scoredProducts.sort((a, b) => b.score - a.score);

  // Get top 3 products, ensuring category diversity
  const recommendations: Product[] = [];
  const usedCategories = new Set<ProductCategory>();

  // Add highest scoring products while maintaining category diversity
  for (const product of scoredProducts) {
    if (recommendations.length >= 3) break;

    // Check if this product adds a new category
    const newCategory = product.categories.find(cat => !usedCategories.has(cat));
    
    if (newCategory || recommendations.length < 2) {
      recommendations.push(product);
      product.categories.forEach(cat => usedCategories.add(cat));
    }
  }

  // If we have fewer than 3 recommendations, add general wellness products
  while (recommendations.length < 3) {
    const fallbackProduct = PRODUCTS.find(p => 
      p.categories.includes("general_health") && 
      !recommendations.includes(p)
    );
    if (fallbackProduct) {
      recommendations.push(fallbackProduct);
    } else {
      break;
    }
  }

  return recommendations;
}