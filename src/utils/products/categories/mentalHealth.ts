import { ProductDefinition } from '../productTypes';

export const MENTAL_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "Focus",
    description: "Formule avancée pour la concentration et la clarté mentale.",
    imageUrl: "/lovable-uploads/a4cf23a3-0970-4fb3-be63-daa3935ae49c.png",
    expectedResults: "Concentration améliorée, clarté mentale accrue 🧠",
    recommendationReason: "Soutien cognitif optimal",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/focus",
    categories: ["brain", "concentration", "long_term"],
    scores: [
      { condition: "Soutenir la santé cérébrale", score: 5 },
      { condition: "Améliorer la concentration", score: 5 }
    ],
    therapeuticClaims: [
      "Enhances cognitive clarity and mental performance 🧠",
      "Améliore la concentration et la mémoire",
      "Soutient les fonctions cognitives"
    ],
    relationships: {
      complementaryProducts: ["550e8400-e29b-41d4-a716-446655440001"],
      contraindications: ["Sensibilité à la caféine"]
    },
    usage: {
      timing: "Prendre le matin ou en début d'après-midi",
      duration: "Utilisation quotidienne pour des résultats optimaux",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Énergie & Adaptogènes",
    description: "Complexe énergisant avec adaptogènes pour le stress.",
    imageUrl: "/lovable-uploads/4ccea2a6-43df-472a-8f3c-848d654e081f.png",
    expectedResults: "Énergie stable, meilleure résistance au stress ⚡",
    recommendationReason: "Soutien énergétique et anti-stress",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/energie-adaptogene",
    categories: ["energy", "stress", "long_term"],
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
      complementaryProducts: ["550e8400-e29b-41d4-a716-446655440000"],
      contraindications: ["Hypertension non contrôlée"]
    },
    usage: {
      timing: "Prendre le matin avec le petit-déjeuner",
      duration: "Utilisation continue recommandée",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  }
];