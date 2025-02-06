import { ProductDefinition } from '../productTypes';

export const BRAIN_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "focus",
    name: "Focus",
    description: "Formule avancée pour la concentration et la clarté mentale",
    imageUrl: "/lovable-uploads/7ac7bf3d-65ed-4a17-8d76-c34aa2255e4f.png",
    expectedResults: "Amélioration de la concentration et des performances cognitives",
    recommendationReason: "Support optimal pour la fonction cognitive",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/focus",
    categories: ["cerveau", "concentration"],
    scores: [
      { condition: "Concentration", score: 5 },
      { condition: "Performance mentale", score: 5 }
    ],
    therapeuticClaims: [
      "Améliore la concentration",
      "Soutient la mémoire",
      "Favorise la clarté mentale"
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