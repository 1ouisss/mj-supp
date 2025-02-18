
import { ProductDefinition } from "../productTypes";

export const ANTIOXIDANT_PRODUCTS: ProductDefinition[] = [
  {
    id: "antioxydant-plus",
    name: "Antioxydant Plus",
    description: "Complexe puissant d'antioxydants naturels",
    imageUrl: "/placeholder.svg",
    expectedResults: "Protection cellulaire et anti-âge",
    recommendationReason: "Protection antioxydante complète",
    dietaryInfo: "Végétalien, sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/antioxydant-plus",
    categories: ["antioxydant", "vitalité", "santé_générale"],
    scores: [
      { condition: "Stress oxydatif", score: 9 },
      { condition: "Vieillissement", score: 8 }
    ],
    therapeuticClaims: [
      "Combat les radicaux libres",
      "Soutient la santé cellulaire",
      "Effet anti-âge naturel"
    ],
    relationships: {
      complementaryProducts: ["vitamine-c", "selenium"],
      contraindications: []
    },
    usage: {
      timing: "Avec les repas",
      duration: "Usage quotidien",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "resveratrol-complex",
    name: "Complexe Resvératrol",
    description: "Formule concentrée de resvératrol et antioxydants",
    imageUrl: "/placeholder.svg",
    expectedResults: "Protection cellulaire et longévité",
    recommendationReason: "Antioxydant puissant pour la longévité",
    dietaryInfo: "Sans allergènes majeurs",
    productUrl: "https://maisonjacynthe.ca/fr/resveratrol-complex",
    categories: ["antioxydant", "santé_cardiaque", "vitalité"],
    scores: [
      { condition: "Vieillissement", score: 9 },
      { condition: "Santé cardiovasculaire", score: 8 }
    ],
    therapeuticClaims: [
      "Soutient la longévité cellulaire",
      "Protection antioxydante puissante",
      "Favorise la santé cardiovasculaire"
    ],
    relationships: {
      complementaryProducts: ["coq10", "curcuma"],
      contraindications: []
    },
    usage: {
      timing: "Matin",
      duration: "Usage quotidien",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
