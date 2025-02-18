
import { ProductDefinition } from "../productTypes";

export const ADAPTOGENIC_PRODUCTS: ProductDefinition[] = [
  {
    id: "champignons-adaptogenes",
    name: "Champignons & Adaptogènes",
    description: "Formule unique de champignons médicinaux et plantes adaptogènes",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration de la résistance au stress et soutien immunitaire",
    recommendationReason: "Support naturel pour l'adaptation au stress",
    dietaryInfo: "NPN: 80095432. Végétalien, sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/champignons-adaptogenes",
    categories: ["adaptogène", "immunité", "stress"],
    scores: [
      { condition: "Stress", score: 9 },
      { condition: "Système immunitaire", score: 9 },
      { condition: "Énergie", score: 8 }
    ],
    therapeuticClaims: [
      "Aide à l'adaptation au stress",
      "Soutient le système immunitaire",
      "Favorise l'énergie naturelle"
    ],
    relationships: {
      complementaryProducts: ["energieAdaptogene", "vitaminec"],
      contraindications: []
    },
    usage: {
      timing: "Matin ou midi",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "astaxanthine",
    name: "Astaxanthine",
    description: "Puissant antioxydant naturel",
    imageUrl: "/placeholder.svg",
    expectedResults: "Protection cellulaire et soutien anti-âge",
    recommendationReason: "Antioxydant super puissant",
    dietaryInfo: "NPN: 80095433. Végétarien",
    productUrl: "https://maisonjacynthe.ca/fr/astaxanthine",
    categories: ["antioxydant", "peau", "santé_générale"],
    scores: [
      { condition: "Protection cellulaire", score: 9 },
      { condition: "Santé de la peau", score: 8 },
      { condition: "Vieillissement", score: 8 }
    ],
    therapeuticClaims: [
      "Protection antioxydante puissante",
      "Soutient la santé de la peau",
      "Contribue à la santé cellulaire"
    ],
    relationships: {
      complementaryProducts: ["vitaminec", "vitamineDK"],
      contraindications: []
    },
    usage: {
      timing: "Avec un repas",
      duration: "Usage quotidien recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
