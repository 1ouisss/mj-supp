
import { ProductDefinition } from "../productTypes";

export const SPECIALIZED_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "bobome",
    name: "Bobôme",
    description: "Baume apaisant pour les irritations cutanées",
    imageUrl: "/lovable-uploads/b44d19fb-631d-40bb-acba-aa274dc40fd8.png",
    expectedResults: "Soulagement des irritations cutanées et piqûres d'insectes",
    recommendationReason: "Formule naturelle pour le soulagement des irritations mineures de la peau",
    dietaryInfo: "NPN : 80106560",
    productUrl: "https://maisonjacynthe.ca/fr/bobome",
    categories: ["topique", "peau"],
    scores: [
      { condition: "Irritations cutanées", score: 5 },
      { condition: "Cicatrisation", score: 4 }
    ],
    therapeuticClaims: [
      "Utilisé traditionnellement en phytothérapie pour aider à la cicatrisation des plaies",
      "Aide à soulager les inflammations et les irritations de la peau"
    ],
    relationships: {
      complementaryProducts: ["formule-apaisante"],
      contraindications: []
    },
    usage: {
      timing: "Appliquer localement selon le besoin",
      duration: "Usage ponctuel",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "formule-apaisante",
    name: "Formule Apaisante",
    description: "Mélange d'huiles essentielles pour les soins de la peau",
    imageUrl: "/lovable-uploads/0592f1d5-124f-4219-8fdf-a197d9906a5c.png",
    expectedResults: "Apaisement des rougeurs et des irritations cutanées",
    recommendationReason: "Formule 100% naturelle pour le soin des irritations cutanées",
    dietaryInfo: "NPN : 80094787",
    productUrl: "https://maisonjacynthe.ca/fr/formule-apaisante",
    categories: ["topique", "peau"],
    scores: [
      { condition: "Irritations cutanées", score: 5 },
      { condition: "Rougeurs", score: 4 }
    ],
    therapeuticClaims: [
      "Utilisé en aromathérapie pour soulager les irritations mineures de la peau"
    ],
    relationships: {
      complementaryProducts: ["bobome"],
      contraindications: []
    },
    usage: {
      timing: "3 soirs par semaine",
      duration: "Selon les besoins",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "miel-protecteur",
    name: "Miel Protecteur",
    description: "Formule apaisante pour la gorge",
    imageUrl: "/lovable-uploads/ce08bdaa-0440-4064-9cd7-04bd6a5ed979.png",
    expectedResults: "Soulagement des maux de gorge et de la toux",
    recommendationReason: "Adoucissant naturel pour les symptômes du mal de gorge",
    dietaryInfo: "NPN : 80108553",
    productUrl: "https://maisonjacynthe.ca/fr/miel-protecteur",
    categories: ["gorge", "immunité"],
    scores: [
      { condition: "Mal de gorge", score: 5 },
      { condition: "Toux", score: 4 }
    ],
    therapeuticClaims: [
      "Adoucissant oral pour apaiser les maux de gorge et la toux",
      "Aide à soulager temporairement les symptômes du mal de gorge et de la toux"
    ],
    relationships: {
      complementaryProducts: ["vitamine-c", "zinc"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage ponctuel",
      seasonality: ["automne", "hiver"]
    },
    timeFrame: "court_terme"
  }
];
