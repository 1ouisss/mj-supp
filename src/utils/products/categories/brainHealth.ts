
import { ProductDefinition } from '../productTypes';

export const BRAIN_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "focus",
    name: "Focus",
    description: "Formule avancée pour soutenir les fonctions cognitives et la mémoire",
    imageUrl: "/lovable-uploads/7ac7bf3d-65ed-4a17-8d76-c34aa2255e4f.png",
    expectedResults: "Amélioration des fonctions cognitives et de la mémoire",
    recommendationReason: "Support optimal pour la fonction cognitive et la concentration",
    dietaryInfo: "NPN : 80040236",
    productUrl: "https://maisonjacynthe.ca/fr/focus",
    categories: ["cerveau", "concentration"],
    scores: [
      { condition: "Concentration", score: 5 },
      { condition: "Performance mentale", score: 5 }
    ],
    therapeuticClaims: [
      "Aide à améliorer les fonctions cognitives",
      "Aide à améliorer la mémoire",
      "Aide à améliorer le rendement"
    ],
    relationships: {
      complementaryProducts: ["omega-3", "complexe-b"],
      contraindications: []
    },
    usage: {
      timing: "Le matin ou en début d'après-midi",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
