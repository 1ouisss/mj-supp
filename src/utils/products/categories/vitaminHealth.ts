
import { ProductDefinition } from "../productTypes";

export const VITAMIN_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "vitamine-d-k",
    name: "Vitamine D & K",
    description: "Support pour la santé osseuse et immunitaire",
    imageUrl: "/lovable-uploads/0def73d4-861c-4e96-8a86-247966b03669.png",
    expectedResults: "Renforcement des os et du système immunitaire",
    recommendationReason: "Essentiel pour la santé osseuse",
    dietaryInfo: "NPN: 80110681",
    productUrl: "https://maisonjacynthe.ca/fr/vitamine-d-k",
    categories: ["santé_osseuse", "immunité"],
    scores: [
      { condition: "Santé osseuse", score: 9 },
      { condition: "Immunité", score: 8 }
    ],
    therapeuticClaims: [
      "Aide au développement des os et des dents",
      "Soutient les fonctions immunitaires",
      "Favorise l'absorption du calcium"
    ],
    relationships: {
      complementaryProducts: ["calcium", "magnesium"],
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
    id: "coenzyme-q10",
    name: "Coenzyme Q10",
    description: "Support pour la santé cardiovasculaire et les migraines",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration de la santé cardiovasculaire",
    recommendationReason: "Support naturel pour les migraines",
    dietaryInfo: "NPN: 80121736",
    productUrl: "https://maisonjacynthe.ca/fr/coenzyme-q10",
    categories: ["santé_cardiaque", "migraine"],
    scores: [
      { condition: "Santé cardiovasculaire", score: 9 },
      { condition: "Migraines", score: 8 }
    ],
    therapeuticClaims: [
      "Soutient la santé cardiovasculaire",
      "Aide à réduire la fréquence des migraines",
      "Source d'antioxydants"
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
