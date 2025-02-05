import { ProductDefinition } from '../productTypes';

export const MUSCLE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "creatine",
    name: "Créatine",
    description: "Supplément pour la performance musculaire",
    imageUrl: "/lovable-uploads/1d810f06-0339-45be-99be-d0dbab2ddc53.png",
    expectedResults: "Amélioration de la force et de la récupération musculaire",
    recommendationReason: "Support optimal pour la performance musculaire",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/creatine",
    categories: ["muscles", "énergie", "santé_générale"],
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
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "glutamine",
    name: "Glutamine",
    description: "Acide aminé essentiel pour la récupération musculaire",
    imageUrl: "/lovable-uploads/ebabf56c-a23d-4352-abb0-330d981d4400.png",
    expectedResults: "Meilleure récupération et santé intestinale",
    recommendationReason: "Support pour la récupération et l'immunité",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/glutamine",
    categories: ["muscles", "immunité"],
    scores: [
      { condition: "Récupération musculaire", score: 5 },
      { condition: "Santé intestinale", score: 4 }
    ],
    therapeuticClaims: [
      "Favorise la récupération musculaire",
      "Soutient la santé intestinale",
      "Renforce le système immunitaire"
    ],
    relationships: {
      complementaryProducts: ["creatine"],
      contraindications: []
    },
    usage: {
      timing: "Post-entraînement",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];