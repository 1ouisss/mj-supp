
import { ProductDefinition } from "../productTypes";

export const ADAPTOGENIC_PRODUCTS: ProductDefinition[] = [
  {
    id: "energie-et-adaptogenes",
    name: "Énergie et Adaptogènes",
    description: "Aide à accroître l'énergie et la résistance au stress",
    imageUrl: "/placeholder.svg",
    expectedResults: "Meilleure gestion du stress et augmentation de l'énergie",
    recommendationReason: "Solution naturelle pour la fatigue et le stress",
    dietaryInfo: "NPN : 80129617",
    productUrl: "https://maisonjacynthe.ca/fr/energie-et-adaptogenes",
    categories: ["adaptogène", "énergie", "stress"],
    scores: [
      { condition: "Fatigue", score: 5 },
      { condition: "Stress", score: 5 }
    ],
    therapeuticClaims: [
      "Aide à accroître l'énergie et la résistance au stress",
      "Améliore la consommation d'oxygène musculaire",
      "Source d'antioxydants"
    ],
    relationships: {
      complementaryProducts: ["complexe-b", "magnésium"],
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
    id: "champignons-et-adaptogenes",
    name: "Champignons & Adaptogènes",
    description: "Soutien pour la récupération et l'immunité",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration de la résistance et de l'immunité",
    recommendationReason: "Solution naturelle pour la vitalité",
    dietaryInfo: "NPN : 80129449",
    productUrl: "https://maisonjacynthe.ca/fr/champignons-et-adaptogenes",
    categories: ["adaptogène", "immunité", "récupération"],
    scores: [
      { condition: "Fatigue", score: 4 },
      { condition: "Immunité faible", score: 5 }
    ],
    therapeuticClaims: [
      "Aide à soulager l'affaiblissement généralisé",
      "Améliore le rendement mental et physique",
      "Source de polysaccharides immunomodulateurs"
    ],
    relationships: {
      complementaryProducts: ["energie-et-adaptogenes"],
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
