
import { ProductDefinition } from "../productTypes";

export const MUSCLE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "bcaa-plus",
    name: "BCAA Plus",
    description: "Formule complète d'acides aminés pour la récupération musculaire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Meilleure récupération et développement musculaire",
    recommendationReason: "Support optimal pour la récupération sportive",
    dietaryInfo: "Sans gluten, végan",
    productUrl: "https://maisonjacynthe.ca/fr/bcaa-plus",
    categories: ["sport", "muscles", "récupération"],
    scores: [
      { condition: "Récupération musculaire", score: 5 },
      { condition: "Performance sportive", score: 4 }
    ],
    therapeuticClaims: [
      "Aide à la récupération musculaire",
      "Soutient le développement musculaire",
      "Réduit la fatigue post-entraînement"
    ],
    relationships: {
      complementaryProducts: ["magnesium", "vitamine-d-et-k"],
      contraindications: []
    },
    usage: {
      timing: "Avant ou après l'effort",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "magnesium-sport",
    name: "Magnésium Sport",
    description: "Magnésium hautement absorbable pour les sportifs",
    imageUrl: "/placeholder.svg",
    expectedResults: "Réduction des crampes et meilleure récupération",
    recommendationReason: "Minéral essentiel pour la performance sportive",
    dietaryInfo: "Sans allergènes majeurs",
    productUrl: "https://maisonjacynthe.ca/fr/magnesium-sport",
    categories: ["sport", "minéraux", "récupération"],
    scores: [
      { condition: "Crampes musculaires", score: 5 },
      { condition: "Récupération", score: 4 },
      { condition: "Fatigue", score: 4 }
    ],
    therapeuticClaims: [
      "Aide à prévenir les crampes musculaires",
      "Soutient la récupération post-effort",
      "Contribue à la fonction musculaire normale"
    ],
    relationships: {
      complementaryProducts: ["bcaa-plus", "mineral-drop"],
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
    id: "electrolytes-sport",
    name: "Électrolytes Sport",
    description: "Complexe d'électrolytes pour l'hydratation optimale",
    imageUrl: "/placeholder.svg",
    expectedResults: "Meilleure hydratation et endurance",
    recommendationReason: "Hydratation optimale pendant l'effort",
    dietaryInfo: "Sans sucre ajouté",
    productUrl: "https://maisonjacynthe.ca/fr/electrolytes-sport",
    categories: ["sport", "récupération", "minéraux"],
    scores: [
      { condition: "Déshydratation", score: 5 },
      { condition: "Performance sportive", score: 4 }
    ],
    therapeuticClaims: [
      "Maintient l'équilibre électrolytique",
      "Favorise l'hydratation optimale",
      "Soutient l'endurance"
    ],
    relationships: {
      complementaryProducts: ["magnesium-sport", "mineral-drop"],
      contraindications: []
    },
    usage: {
      timing: "Pendant l'effort",
      duration: "Usage ponctuel",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  }
];
