import { ProductDefinition } from '../productTypes';

export const MUSCLE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "creatine",
    name: "Créatine",
    description: "Supplément de créatine pure pour la performance musculaire",
    imageUrl: "/lovable-uploads/f2d4ffb2-0e13-424f-bc29-2acaa73c0a00.png",
    expectedResults: "Amélioration de la force et de la récupération musculaire",
    recommendationReason: "Support optimal pour la performance musculaire",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/creatine",
    categories: ["muscles", "énergie"],
    scores: [
      { condition: "Performance musculaire", score: 5 },
      { condition: "Récupération", score: 4 }
    ],
    therapeuticClaims: [
      "Améliore la force musculaire",
      "Favorise la récupération",
      "Soutient la performance"
    ],
    relationships: {
      complementaryProducts: ["glutamine"],
      contraindications: []
    },
    usage: {
      timing: "Avant ou après l'entraînement",
      duration: "Utilisation régulière recommandée",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "glutamine",
    name: "Glutamine",
    description: "Acide aminé essentiel pour la récupération musculaire",
    imageUrl: "/lovable-uploads/ace7b125-c27e-49d9-88c0-0a87e53b96a2.png",
    expectedResults: "Meilleure récupération et soutien immunitaire",
    recommendationReason: "Support pour la récupération musculaire",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/glutamine",
    categories: ["muscles", "immunité"],
    scores: [
      { condition: "Récupération musculaire", score: 5 },
      { condition: "Système immunitaire", score: 4 }
    ],
    therapeuticClaims: [
      "Favorise la récupération musculaire",
      "Soutient le système immunitaire",
      "Aide à maintenir l'intégrité intestinale"
    ],
    relationships: {
      complementaryProducts: ["creatine"],
      contraindications: []
    },
    usage: {
      timing: "Après l'entraînement ou avant le coucher",
      duration: "Utilisation régulière recommandée",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];