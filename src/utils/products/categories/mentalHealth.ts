import { ProductDefinition } from '../productTypes';

export const MENTAL_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "focus",
    name: "Focus",
    description: "Formule avancée pour la concentration et la clarté mentale",
    imageUrl: "/lovable-uploads/0b9112e3-186c-444b-aada-1333656178cf.png",
    expectedResults: "Amélioration des fonctions cognitives, de la mémoire et du rendement",
    recommendationReason: "Soutien cognitif optimal et amélioration de la concentration",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/focus",
    categories: ["cerveau", "concentration", "long_terme"],
    scores: [
      { condition: "Soutenir la santé cérébrale", score: 5 },
      { condition: "Améliorer la concentration", score: 5 }
    ],
    therapeuticClaims: [
      "Améliore la clarté mentale et la performance cognitive",
      "Améliore la concentration et la mémoire",
      "Soutient les fonctions cognitives"
    ],
    relationships: {
      complementaryProducts: ["energie-adaptogene"],
      contraindications: ["Sensibilité à la caféine"]
    },
    usage: {
      timing: "Prendre le matin ou en début d'après-midi",
      duration: "Utilisation quotidienne pour des résultats optimaux",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "energie-adaptogene",
    name: "Énergie & Adaptogènes",
    description: "Complexe énergisant avec adaptogènes pour le stress.",
    imageUrl: "/lovable-uploads/4ccea2a6-43df-472a-8f3c-848d654e081f.png",
    expectedResults: "Énergie stable, meilleure résistance au stress ⚡",
    recommendationReason: "Soutien énergétique et anti-stress",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/energie-adaptogene",
    categories: ["énergie", "stress", "long_terme"],
    scores: [
      { condition: "Améliorer l'énergie", score: 5 },
      { condition: "Gérer le stress", score: 4 }
    ],
    therapeuticClaims: [
      "Boost d'énergie naturel et durable",
      "Adaptation au stress chronique",
      "Soutien du système nerveux"
    ],
    relationships: {
      complementaryProducts: ["focus"],
      contraindications: ["Hypertension non contrôlée"]
    },
    usage: {
      timing: "Prendre le matin avec le petit-déjeuner",
      duration: "Utilisation continue recommandée",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "force-botanique",
    name: "Force Botanique",
    description: "Complexe énergisant naturel",
    imageUrl: "/lovable-uploads/3d4695a5-4f00-4d50-8c0f-ba0fc614d742.png",
    expectedResults: "Énergie naturelle et vitalité 🌱",
    recommendationReason: "Boost d'énergie botanique",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/force-botanique",
    categories: ["énergie", "stress"],
    scores: [
      { condition: "Énergie", score: 5 },
      { condition: "Vitalité", score: 5 }
    ],
    therapeuticClaims: [
      "Boost d'énergie naturel",
      "Soutient la vitalité"
    ],
    relationships: {
      complementaryProducts: [],
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