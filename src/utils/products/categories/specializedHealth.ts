import { ProductDefinition } from '../productTypes';

export const SPECIALIZED_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "coenzyme-q10",
    name: "Oméga-3 & Astaxanthine",
    description: "Supplément pour la santé cérébrale et cardiovasculaire.",
    imageUrl: "/lovable-uploads/920207d8-51b1-428d-9a7f-8ccb55c5becf.png",
    expectedResults: "Soutien cognitif et cardiovasculaire 🧠",
    recommendationReason: "Santé cognitive et cardiaque",
    dietaryInfo: "Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/omega-astaxanthine",
    categories: ["brain", "heart_health", "joints"],
    scores: [
      { condition: "Soutenir la santé cérébrale", score: 5 },
      { condition: "Préoccupations cardiovasculaires", score: 5 }
    ],
    therapeuticClaims: [
      "Supports brain, heart, and joint health 🐟",
      "Améliore la santé cardiovasculaire",
      "Soutient les fonctions cognitives"
    ],
    relationships: {
      complementaryProducts: ["zinc"],
      contraindications: ["Troubles de la coagulation"]
    },
    usage: {
      timing: "Prendre avec un repas",
      duration: "Usage quotidien",
      dosage: "1-2 gélules par jour",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  },
  {
    id: "selenium",
    name: "Zinc & Cuivre",
    description: "Minéraux essentiels pour le système immunitaire.",
    imageUrl: "/lovable-uploads/d4d5dd78-75fc-4f0d-bc94-18072b2a4115.png",
    expectedResults: "Système immunitaire renforcé 🌟",
    recommendationReason: "Soutien immunitaire",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/zinc-cuivre",
    categories: ["immune", "essential"],
    scores: [
      { condition: "Renforcer l'immunité", score: 5 }
    ],
    therapeuticClaims: [
      "Soutien du système immunitaire",
      "Antioxydant"
    ],
    relationships: {
      complementaryProducts: ["vitamine-d"],
      contraindications: []
    },
    usage: {
      timing: "Prendre avec un repas",
      duration: "Usage quotidien",
      dosage: "1 gélule par jour",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  },
  {
    id: "vitamine-d",
    name: "Silice",
    description: "Essentielle pour la santé des cheveux, de la peau et des ongles.",
    imageUrl: "/lovable-uploads/2fb75906-9c07-4df4-b771-2358014101ea.png",
    expectedResults: "Beauté et santé de la peau, des cheveux et des ongles 💆‍♀️",
    recommendationReason: "Soutien beauté naturel",
    dietaryInfo: "Vegan",
    productUrl: "https://maisonjacynthe.ca/fr/silice",
    categories: ["hair_health", "skin", "nails"],
    scores: [
      { condition: "Santé des cheveux", score: 5 },
      { condition: "Santé de la peau", score: 5 },
      { condition: "Santé des ongles", score: 5 }
    ],
    therapeuticClaims: [
      "Renforce les cheveux et les ongles",
      "Améliore l'élasticité de la peau",
      "Soutient la production de collagène"
    ],
    relationships: {
      complementaryProducts: ["selenium"],
      contraindications: []
    },
    usage: {
      timing: "Prendre avec un repas",
      duration: "Usage quotidien",
      dosage: "1 gélule par jour",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  }
];