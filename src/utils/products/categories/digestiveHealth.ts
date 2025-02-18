
import { ProductDefinition } from "../productTypes";

export const DIGESTIVE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "probiotiques",
    name: "Probiotiques",
    description: "Régénérant actif de la flore intestinale",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration du confort intestinal",
    recommendationReason: "Soutien de la santé digestive",
    dietaryInfo: "NPN : 80012298",
    productUrl: "https://maisonjacynthe.ca/fr/probiotiques",
    categories: ["digestif", "santé_générale"],
    scores: [
      { condition: "Santé intestinale", score: 5 },
      { condition: "Confort digestif", score: 5 }
    ],
    therapeuticClaims: [
      "Régénérant actif de la flore intestinale",
      "Améliore le confort intestinal",
      "Effet bénéfique pour la santé"
    ],
    relationships: {
      complementaryProducts: ["jus-aloes", "fibres-essentielles"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "probiotiques-enfants",
    name: "Probiotiques pour enfants",
    description: "Probiotique adapté aux enfants pour une flore intestinale saine",
    imageUrl: "/placeholder.svg",
    expectedResults: "Maintien d'une flore intestinale équilibrée chez l'enfant",
    recommendationReason: "Soutien digestif spécial enfants",
    dietaryInfo: "NPN : 80012363",
    productUrl: "https://maisonjacynthe.ca/fr/probiotiques-enfants",
    categories: ["digestif", "enfants", "santé_générale"],
    scores: [
      { condition: "Santé intestinale enfants", score: 5 },
      { condition: "Système immunitaire enfants", score: 4 }
    ],
    therapeuticClaims: [
      "Contribue à une flore intestinale naturelle en santé",
      "Contient de l'arabinogalactane",
      "Effet bénéfique pour la santé"
    ],
    relationships: {
      complementaryProducts: ["multivitamines-croquer"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
