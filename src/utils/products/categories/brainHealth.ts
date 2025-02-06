import { ProductDefinition } from '../productTypes';

export const BRAIN_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "focus",
    name: "Focus",
    description: "Formule avancée pour la concentration et la clarté mentale",
    imageUrl: "/lovable-uploads/3a632e75-b5ae-4c52-ac4e-1f7fde0d4c2c.png",
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
    description: "Acides gras essentiels pour la santé cérébrale et cardiovasculaire",
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
    description: "Formule complète de vitamines B essentielles pour le système nerveux",
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
  }
];