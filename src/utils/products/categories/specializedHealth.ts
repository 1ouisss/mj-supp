
import { ProductDefinition } from "../productTypes";

export const SPECIALIZED_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "detox",
    name: "Détox",
    description: "Support pour les fonctions hépatiques et la détoxification",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soutien des fonctions hépatiques et digestives",
    recommendationReason: "Soutien naturel pour la détoxification",
    dietaryInfo: "NPN: 80116539",
    productUrl: "https://maisonjacynthe.ca/fr/detox",
    categories: ["détox", "digestif"],
    scores: [
      { condition: "Fonction hépatique", score: 9 },
      { condition: "Digestion", score: 8 }
    ],
    therapeuticClaims: [
      "Aide à appuyer les fonctions hépatiques",
      "Soulage les troubles de digestion",
      "Source d'antioxydants"
    ],
    relationships: {
      complementaryProducts: ["lAmi", "probiotiques"],
      contraindications: []
    },
    usage: {
      timing: "Avant les repas",
      duration: "Cure de 1-3 mois",
      seasonality: ["printemps", "automne"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "astaxanthine",
    name: "Astaxanthine",
    description: "Antioxydant puissant pour la santé oculaire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Réduction de la fatigue oculaire",
    recommendationReason: "Support pour la santé des yeux",
    dietaryInfo: "NPN: 80118375",
    productUrl: "https://maisonjacynthe.ca/fr/astaxanthine",
    categories: ["antioxydant"],
    scores: [
      { condition: "Fatigue oculaire", score: 9 },
      { condition: "Protection antioxydante", score: 8 }
    ],
    therapeuticClaims: [
      "Source d'antioxydants",
      "Aide à réduire la fatigue oculaire"
    ],
    relationships: {
      complementaryProducts: ["omega3"],
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

