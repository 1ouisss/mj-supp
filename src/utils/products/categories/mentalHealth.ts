
import { ProductDefinition } from '../productTypes';

export const MENTAL_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "energie-adaptogene",
    name: "Énergie & Adaptogène",
    description: "Supplément énergétique et adaptogène pour accroître l'énergie et la résistance au stress",
    imageUrl: "/lovable-uploads/b34b8702-e883-457c-80f3-0ede7e7ca946.png",
    expectedResults: "Augmentation de l'énergie et amélioration de la résistance au stress",
    recommendationReason: "Formule complète combinant adaptogènes et vitamines",
    dietaryInfo: "NPN: 80129617",
    productUrl: "https://maisonjacynthe.ca/fr/energie-adaptogene",
    categories: ["énergie", "stress", "concentration", "adaptogène"],
    scores: [
      { condition: "Fatigue", score: 9 },
      { condition: "Stress", score: 8 },
      { condition: "Performance", score: 8 }
    ],
    therapeuticClaims: [
      "Aide à accroître l'énergie et la résistance au stress",
      "Améliore la consommation d'oxygène musculaire",
      "Améliore les performances lors d'exercices intenses",
      "Source d'antioxydants",
      "Aide au métabolisme de l'énergie",
      "Aide à la formation de globules rouges"
    ],
    relationships: {
      complementaryProducts: ["champignons-adaptogenes", "magnesium"],
      contraindications: ["Pression artérielle"]
    },
    usage: {
      timing: "3 capsules 1 fois par jour avec de la nourriture",
      duration: "15 jours ou selon recommandations",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "focus",
    name: "Focus",
    description: "Formule avancée pour soutenir les fonctions cognitives et la concentration",
    imageUrl: "/lovable-uploads/08b3afe7-d173-4bc6-b68b-575f171df2ff.png",
    expectedResults: "Amélioration de la concentration et de la clarté mentale",
    recommendationReason: "Support optimal pour la fonction cognitive",
    dietaryInfo: "NPN: 80040236",
    productUrl: "https://maisonjacynthe.ca/fr/focus",
    categories: ["cerveau", "concentration"],
    scores: [
      { condition: "Concentration", score: 9 },
      { condition: "Mémoire", score: 8 },
      { condition: "Clarté mentale", score: 8 }
    ],
    therapeuticClaims: [
      "Améliore les fonctions cognitives",
      "Aide à améliorer la mémoire",
      "Soutient la concentration",
      "Améliore la performance mentale"
    ],
    relationships: {
      complementaryProducts: ["omega3", "complexe-b"],
      contraindications: []
    },
    usage: {
      timing: "Matin ou début d'après-midi",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
