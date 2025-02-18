
import { ProductDefinition } from '../productTypes';

export const ENERGY_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "energie-adaptogene",
    name: "Énergie & Adaptogène",
    description: "Formule adaptogène pour accroître l'énergie et la résistance au stress",
    imageUrl: "/lovable-uploads/b34b8702-e883-457c-80f3-0ede7e7ca946.png",
    expectedResults: "Augmentation de l'énergie et amélioration de la résistance au stress",
    recommendationReason: "Aide au métabolisme de l'énergie et améliore la performance lors d'exercices intenses",
    dietaryInfo: "NPN : 80129617",
    productUrl: "https://maisonjacynthe.ca/fr/energie-adaptogene",
    categories: ["énergie", "stress", "concentration"],
    scores: [
      { condition: "Fatigue", score: 5 },
      { condition: "Stress", score: 4 },
      { condition: "Performance physique", score: 4 }
    ],
    therapeuticClaims: [
      "Utilisé en phytothérapie comme adaptogène pour aider à accroître l'énergie et la résistance au stress",
      "Aide au métabolisme de l'énergie",
      "Aide à la formation de globules rouges",
      "Aide à la production d'énergie",
      "Améliore la consommation d'oxygène musculaire",
      "Améliore les performances lors d'exercices intenses"
    ],
    relationships: {
      complementaryProducts: ["complexe-b", "magnesium"],
      contraindications: []
    },
    usage: {
      timing: "Le matin ou en début d'après-midi",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "complexe-b",
    name: "Complexe B",
    description: "Soutient la production d'énergie et le métabolisme",
    imageUrl: "/lovable-uploads/9e2a27a2-80a8-45c6-a120-57d6f9250958.png",
    expectedResults: "Meilleure production d'énergie et métabolisme optimal",
    recommendationReason: "Aide à la formation de globules rouges et au métabolisme des nutriments",
    dietaryInfo: "NPN : 80103784. La B3 est sous forme de niacinamide donc pas de flushing (sans rougeur)",
    productUrl: "https://maisonjacynthe.ca/fr/complexe-b",
    categories: ["énergie", "métabolisme"],
    scores: [
      { condition: "Fatigue", score: 5 },
      { condition: "Métabolisme", score: 4 }
    ],
    therapeuticClaims: [
      "Soutient la production d'énergie",
      "Aide à la formation de globules rouges",
      "Aide à maintenir une bonne santé",
      "Aide aux capacités du corps à métaboliser les nutriments",
      "Aide à la formation des tissus"
    ],
    relationships: {
      complementaryProducts: ["magnesium", "mineral-drop"],
      contraindications: []
    },
    usage: {
      timing: "Avec un repas",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
