import { ProductDefinition } from '../productTypes';

export const SPECIALIZED_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "collagene-marin",
    name: "Collagène Marin",
    description: "Supplément de collagène marin pour la santé des articulations et de la peau",
    imageUrl: "/lovable-uploads/dd6224c3-17c2-4887-ba91-609aa9cd867b.png",
    expectedResults: "Amélioration de la santé articulaire et de la peau",
    recommendationReason: "Support pour la santé des tissus conjonctifs",
    dietaryInfo: "Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/collagene-marin",
    categories: ["articulations", "peau"],
    scores: [
      { condition: "Santé articulaire", score: 5 },
      { condition: "Santé de la peau", score: 5 }
    ],
    therapeuticClaims: [
      "Soutient la santé des articulations",
      "Améliore l'élasticité de la peau",
      "Renforce les tissus conjonctifs"
    ],
    relationships: {
      complementaryProducts: ["vitamine-d3"],
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
    id: "huile-tcm",
    name: "Huile TCM",
    description: "Huile de triglycérides à chaîne moyenne pour l'énergie",
    imageUrl: "/lovable-uploads/98f02f89-7e9c-4bac-8a08-994b109e767a.png",
    expectedResults: "Énergie soutenue et clarté mentale",
    recommendationReason: "Source d'énergie rapide et durable",
    dietaryInfo: "Vegan, Sans gluten, Cétogène",
    productUrl: "https://maisonjacynthe.ca/fr/huile-tcm",
    categories: ["énergie", "cerveau"],
    scores: [
      { condition: "Énergie", score: 5 },
      { condition: "Clarté mentale", score: 4 }
    ],
    therapeuticClaims: [
      "Fournit de l'énergie rapide",
      "Soutient la fonction cognitive",
      "Compatible régime cétogène"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: []
    },
    usage: {
      timing: "Matin ou avant l'effort",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  }
];