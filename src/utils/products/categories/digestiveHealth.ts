import { ProductDefinition } from '../productTypes';

export const DIGESTIVE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "bobome",
    name: "Bobôme",
    description: "Solution naturelle pour le confort digestif",
    imageUrl: "/lovable-uploads/ace7b125-c27e-49d9-88c0-0a87e53b96a2.png",
    expectedResults: "Soulagement des inconforts digestifs",
    recommendationReason: "Support naturel pour la digestion",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/bobome",
    categories: ["digestif"],
    scores: [
      { condition: "Confort digestif", score: 5 },
      { condition: "Digestion", score: 5 }
    ],
    therapeuticClaims: [
      "Soulage les inconforts digestifs",
      "Favorise une bonne digestion"
    ],
    relationships: {
      complementaryProducts: [],
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
    id: "formule-apaisante",
    name: "Formule Apaisante",
    description: "Mélange apaisant pour le système digestif",
    imageUrl: "/lovable-uploads/634957a0-0968-43f3-94ce-f0924832632a.png",
    expectedResults: "Apaisement du système digestif",
    recommendationReason: "Solution naturelle pour le confort digestif",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/formule-apaisante",
    categories: ["digestif", "relaxation"],
    scores: [
      { condition: "Confort digestif", score: 5 },
      { condition: "Relaxation", score: 4 }
    ],
    therapeuticClaims: [
      "Apaise le système digestif",
      "Favorise la relaxation",
      "Soutient le bien-être digestif"
    ],
    relationships: {
      complementaryProducts: ["bobome"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  }
];