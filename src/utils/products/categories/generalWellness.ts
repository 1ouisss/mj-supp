import { ProductDefinition } from '../productTypes';

export const GENERAL_WELLNESS_PRODUCTS: ProductDefinition[] = [
  {
    id: "omega-3",
    name: "Oméga-3",
    description: "Soutient la santé cardiovasculaire et cérébrale.",
    imageUrl: "/lovable-uploads/9b2bbab2-451b-4cae-993b-bbe8ddd50663.png",
    expectedResults: "Soutien cognitif et cardiovasculaire 🧠",
    recommendationReason: "Santé cognitive et cardiaque",
    dietaryInfo: "Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/omega-astaxanthine",
    categories: ["brain", "heart_health", "joints", "long_term"],
    scores: [
      { condition: "Soutenir la santé cérébrale", score: 3 },
      { condition: "Préoccupations cardiovasculaires", score: 3 }
    ],
    therapeuticClaims: [
      "Supports brain, heart, and joint health 🐟",
      "Améliore la santé cardiovasculaire",
      "Soutient les fonctions cognitives",
      "Réduit l'inflammation articulaire"
    ],
    relationships: {
      complementaryProducts: ["focus"],
      contraindications: ["Troubles de la coagulation"]
    },
    usage: {
      timing: "Prendre avec un repas pour une meilleure absorption",
      duration: "Utilisation quotidienne recommandée",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  }
];