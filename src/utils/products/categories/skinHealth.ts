
import { ProductDefinition } from "../productTypes";

export const SKIN_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "dermo-calm",
    name: "Dermo-Calm",
    description: "Complexe apaisant pour peaux sensibles",
    imageUrl: "/placeholder.svg",
    expectedResults: "Apaisement et protection de la peau sensible",
    recommendationReason: "Solution naturelle pour les peaux réactives",
    dietaryInfo: "Sans allergènes majeurs",
    productUrl: "https://maisonjacynthe.ca/fr/dermo-calm",
    categories: ["peau_sensible", "peau", "défense"],
    scores: [
      { condition: "Peau sensible", score: 5 },
      { condition: "Irritations cutanées", score: 4 }
    ],
    therapeuticClaims: [
      "Apaise les peaux sensibles et réactives",
      "Renforce la barrière cutanée",
      "Réduit les rougeurs et irritations"
    ],
    relationships: {
      complementaryProducts: ["omega-3", "zinc"],
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
    id: "apaisant-cutane",
    name: "Apaisant Cutané",
    description: "Formule apaisante pour les réactions cutanées",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement rapide des irritations",
    recommendationReason: "Apaisement immédiat des peaux sensibles",
    dietaryInfo: "Application topique",
    productUrl: "https://maisonjacynthe.ca/fr/apaisant-cutane",
    categories: ["peau_sensible", "topique", "antiseptique"],
    scores: [
      { condition: "Réactions cutanées", score: 5 },
      { condition: "Démangeaisons", score: 4 }
    ],
    therapeuticClaims: [
      "Soulage rapidement les irritations",
      "Effet apaisant immédiat",
      "Action antiseptique naturelle"
    ],
    relationships: {
      complementaryProducts: ["dermo-calm"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage ponctuel",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "protection-cutanee",
    name: "Protection Cutanée",
    description: "Formule protectrice pour peaux fragiles",
    imageUrl: "/placeholder.svg",
    expectedResults: "Protection et renforcement de la barrière cutanée",
    recommendationReason: "Protection quotidienne des peaux sensibles",
    dietaryInfo: "Sans parfum, hypoallergénique",
    productUrl: "https://maisonjacynthe.ca/fr/protection-cutanee",
    categories: ["peau_sensible", "peau", "défense"],
    scores: [
      { condition: "Fragilité cutanée", score: 5 },
      { condition: "Protection peau", score: 4 }
    ],
    therapeuticClaims: [
      "Renforce la barrière cutanée",
      "Protège contre les agressions extérieures",
      "Maintient l'hydratation naturelle"
    ],
    relationships: {
      complementaryProducts: ["dermo-calm", "omega-3"],
      contraindications: []
    },
    usage: {
      timing: "Matin et soir",
      duration: "Usage quotidien",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
