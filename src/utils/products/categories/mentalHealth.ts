import { ProductDefinition } from '../productTypes';

export const MENTAL_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "focus",
    name: "Focus",
    description: "Aide à la concentration et à la clarté mentale.",
    imageUrl: "/lovable-uploads/75ff84e8-c303-4908-9110-609c7e765eec.png",
    expectedResults: "Amélioration de la concentration et de la mémoire 💡",
    recommendationReason: "Soutien cognitif et mental",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/focus",
    categories: ["brain", "concentration"],
    scores: [
      { condition: "Soutenir la santé cérébrale", score: 3 },
      { condition: "Améliorer l'énergie", score: 2 }
    ],
    therapeuticClaims: ["Concentration", "Mémoire", "Clarté mentale"]
  }
];