import { ProductDefinition } from '../productTypes';

export const BRAIN_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "focus",
    name: "Focus",
    description: "Formule avancée pour la concentration et la clarté mentale.",
    imageUrl: "/lovable-uploads/ce08bdaa-0440-4064-9cd7-04bd6a5ed979.png",
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
  },
  {
    id: "omega-3",
    name: "Oméga-3",
    description: "Acides gras essentiels pour la santé cérébrale et cardiovasculaire.",
    imageUrl: "/lovable-uploads/9fe3dcb7-455a-4684-af23-43bb9a63de07.png",
    expectedResults: "Soutien à la santé cognitive et réduction de l'inflammation",
    recommendationReason: "Essentiel pour le bon fonctionnement du cerveau",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/omega-3",
    categories: ["cerveau", "santé_générale"],
    scores: [
      { condition: "Santé cérébrale", score: 5 },
      { condition: "Inflammation", score: 4 }
    ],
    therapeuticClaims: [
      "Soutient la santé cognitive",
      "Réduit l'inflammation",
      "Améliore la circulation sanguine"
    ],
    relationships: {
      complementaryProducts: ["focus", "complexe-b"],
      contraindications: []
    },
    usage: {
      timing: "Avec un repas",
      duration: "Usage quotidien recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "complexe-b",
    name: "Complexe B",
    description: "Formule complète de vitamines B essentielles pour le système nerveux et l'énergie.",
    imageUrl: "/lovable-uploads/b254b737-e6ef-457f-ae66-fa69df445e12.png",
    expectedResults: "Meilleure gestion du stress et soutien énergétique",
    recommendationReason: "Support nutritionnel essentiel pour le système nerveux",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/complexe-b",
    categories: ["stress", "énergie", "cerveau"],
    scores: [
      { condition: "Stress", score: 4 },
      { condition: "Fatigue", score: 4 },
      { condition: "Santé cérébrale", score: 4 }
    ],
    therapeuticClaims: [
      "Soutient le système nerveux",
      "Aide à la production d'énergie",
      "Contribue à la formation des globules rouges"
    ],
    relationships: {
      complementaryProducts: ["magnesium", "omega-3"],
      contraindications: []
    },
    usage: {
      timing: "Avec un repas",
      duration: "Usage quotidien recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "energie-adaptogene",
    name: "Énergie & Adaptogène",
    description: "Supplément énergétique et adaptogène pour accroître l'énergie et la résistance au stress.",
    imageUrl: "/lovable-uploads/b34b8702-e883-457c-80f3-0ede7e7ca946.png",
    expectedResults: "Augmentation rapide de l'énergie et amélioration de la résistance au stress",
    recommendationReason: "Formule complète combinant adaptogènes et vitamines pour un effet énergisant rapide",
    dietaryInfo: "Sans produits laitiers, sans gluten.",
    productUrl: "https://maisonjacynthe.ca/fr/energie-adaptogene",
    categories: ["énergie", "stress", "concentration", "vitalité"],
    scores: [
      { condition: "Fatigue", score: 5 },
      { condition: "Stress", score: 4 },
      { condition: "Performance physique", score: 4 },
      { condition: "Concentration", score: 3 }
    ],
    therapeuticClaims: [
      "Aide à accroître l'énergie et la résistance au stress",
      "Améliore les performances lors d'exercices intenses",
      "Source d'antioxydants"
    ],
    relationships: {
      complementaryProducts: ["champignons-adaptogenes", "magnesium", "vitamine-d3"],
      contraindications: ["Contre-indiqué avec certains médicaments pour le cœur ou la pression sanguine"]
    },
    usage: {
      timing: "3 capsules 1 fois par jour avec de la nourriture.",
      duration: "Consulter un praticien si l'utilisation dépasse 15 jours",
      dosage: "3 capsules par jour",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  }
];
