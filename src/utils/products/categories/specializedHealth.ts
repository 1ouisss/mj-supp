
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
      { condition: "Digestion", score: 8 },
      { condition: "Détoxification", score: 9 }
    ],
    therapeuticClaims: [
      "Aide à appuyer les fonctions hépatiques",
      "Soulage les troubles de digestion",
      "Source d'antioxydants",
      "Aide à la détoxification de l'organisme",
      "Soutient la santé du foie",
      "Favorise une bonne digestion"
    ],
    relationships: {
      complementaryProducts: ["l-ami", "probiotiques"],
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
    description: "Antioxydant puissant pour la santé oculaire et la protection cellulaire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Réduction de la fatigue oculaire et protection antioxydante",
    recommendationReason: "Support pour la santé des yeux et antioxydant puissant",
    dietaryInfo: "NPN: 80118375",
    productUrl: "https://maisonjacynthe.ca/fr/astaxanthine",
    categories: ["antioxydant", "santé_oculaire"],
    scores: [
      { condition: "Fatigue oculaire", score: 9 },
      { condition: "Protection antioxydante", score: 9 },
      { condition: "Santé oculaire", score: 8 }
    ],
    therapeuticClaims: [
      "Source d'antioxydants pour le maintien d'une bonne santé",
      "Aide à réduire la fatigue oculaire",
      "Soutient la santé des yeux",
      "Protège contre le stress oxydatif",
      "Contribue à la santé de la vision"
    ],
    relationships: {
      complementaryProducts: ["omega3", "vitamine-c"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien avec un repas",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
