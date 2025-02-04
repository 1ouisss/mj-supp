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
    categories: ["brain", "heart_health"],
    scores: [
      { condition: "Soutenir la santé cérébrale", score: 3 },
      { condition: "Préoccupations cardiovasculaires", score: 3 }
    ],
    therapeuticClaims: ["Santé cardiovasculaire", "Fonction cognitive"]
  }
];