import { ProductDefinition } from '../productTypes';

export const SPECIALIZED_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "omega-3",
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
    id: "zinc-cuivre",
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
    id: "silice",
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
  },
  {
    id: "formule-menopause",
    name: "Formule Ménopause",
    description: "Support naturel pour la ménopause",
    imageUrl: "/lovable-uploads/69fac7c4-db16-461e-bdbe-8322e037ddcb.png",
    expectedResults: "Confort et équilibre hormonal 🌸",
    recommendationReason: "Soutien hormonal naturel",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/formule-menopause",
    categories: ["women_specific", "hormones"],
    scores: [
      { condition: "Symptômes ménopause", score: 5 },
      { condition: "Équilibre hormonal", score: 5 }
    ],
    therapeuticClaims: [
      "Soulage les symptômes de la ménopause",
      "Équilibre hormonal"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  },
  {
    id: "soutien-sante",
    name: "Soutien Santé",
    description: "Complexe multivitaminé ciblé",
    imageUrl: "/lovable-uploads/4ccea2a6-43df-472a-8f3c-848d654e081f.png",
    expectedResults: "Soutien immunitaire et vitalité 🌟",
    recommendationReason: "Support nutritionnel complet",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/soutien-sante",
    categories: ["immune", "essential"],
    scores: [
      { condition: "Immunité", score: 5 },
      { condition: "Santé générale", score: 5 }
    ],
    therapeuticClaims: [
      "Renforce l'immunité",
      "Soutien nutritionnel global"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  },
  {
    id: "multivitamines-la-totale",
    name: "Multivitamines La Totale",
    description: "Complexe multivitaminé complet",
    imageUrl: "/lovable-uploads/7336c578-a712-4ec7-bf62-9be26f615a1f.png",
    expectedResults: "Santé globale et vitalité 🌈",
    recommendationReason: "Nutrition complète quotidienne",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/multivitamine-la-totale",
    categories: ["essential", "general_health"],
    scores: [
      { condition: "Santé générale", score: 5 },
      { condition: "Nutrition", score: 5 }
    ],
    therapeuticClaims: [
      "Support nutritionnel complet",
      "Maintien de la santé globale"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  },
  {
    id: "extrait-the-vert",
    name: "Extrait de Thé Vert",
    description: "Concentré d'antioxydants naturels",
    imageUrl: "/lovable-uploads/4ccea2a6-43df-472a-8f3c-848d654e081f.png",
    expectedResults: "Protection antioxydante et métabolisme optimal 🍃",
    recommendationReason: "Soutien antioxydant naturel",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/extrait-de-the-vert",
    categories: ["skin", "metabolism"],
    scores: [
      { condition: "Antioxydants", score: 5 },
      { condition: "Métabolisme", score: 4 }
    ],
    therapeuticClaims: [
      "Riche en antioxydants",
      "Soutient le métabolisme",
      "Protège la peau"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: ["Sensibilité à la caféine"]
    },
    usage: {
      timing: "Matin ou après-midi",
      duration: "Usage quotidien",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  },
  {
    id: "mineral-drop",
    name: "Mineral Drop",
    description: "Solution d'électrolytes concentrée",
    imageUrl: "/lovable-uploads/d4d5dd78-75fc-4f0d-bc94-18072b2a4115.png",
    expectedResults: "Hydratation optimale et équilibre électrolytique ⚡",
    recommendationReason: "Réhydratation naturelle",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/electrolytes-mineral-drop-4-oz",
    categories: ["energy", "muscle"],
    scores: [
      { condition: "Hydratation", score: 5 },
      { condition: "Récupération", score: 4 }
    ],
    therapeuticClaims: [
      "Rééquilibre les électrolytes",
      "Soutient l'hydratation",
      "Améliore la récupération"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage régulier ou ponctuel",
      seasonality: ["all_year"]
    },
    timeFrame: "short_term"
  }
];