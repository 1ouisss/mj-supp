import { ProductDefinition } from '../productTypes';

export const ENERGY_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "energie-adaptogene",
    name: "Énergie & Adaptogène",
    description: "Supplément énergétique et adaptogène pour accroître l'énergie et la résistance au stress",
    imageUrl: "/lovable-uploads/b34b8702-e883-457c-80f3-0ede7e7ca946.png",
    expectedResults: "Augmentation de l'énergie et amélioration de la résistance au stress",
    recommendationReason: "Formule complète pour un effet énergisant naturel",
    dietaryInfo: "Sans produits laitiers, sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/energie-adaptogene",
    categories: ["énergie", "stress", "concentration", "vitalité"],
    scores: [
      { condition: "Fatigue", score: 5 },
      { condition: "Stress", score: 4 },
      { condition: "Performance physique", score: 4 }
    ],
    therapeuticClaims: [
      "Accroît l'énergie naturellement",
      "Améliore la résistance au stress",
      "Source d'antioxydants"
    ],
    relationships: {
      complementaryProducts: ["complexe-b", "magnesium"],
      contraindications: []
    },
    usage: {
      timing: "Le matin ou en début d'après-midi",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "mineral-drop",
    name: "Mineral Drop",
    description: "Concentré de minéraux essentiels pour l'énergie et la vitalité",
    imageUrl: "/lovable-uploads/d4d5dd78-75fc-4f0d-bc94-18072b2a4115.png",
    expectedResults: "Meilleur niveau d'énergie et équilibre minéral",
    recommendationReason: "Source concentrée de minéraux essentiels",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/mineral-drop",
    categories: ["énergie", "minéraux", "vitalité"],
    scores: [
      { condition: "Fatigue", score: 4 },
      { condition: "Équilibre minéral", score: 5 }
    ],
    therapeuticClaims: [
      "Soutient les niveaux d'énergie",
      "Équilibre minéral optimal",
      "Améliore la vitalité"
    ],
    relationships: {
      complementaryProducts: ["magnesium", "complexe-b"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "la-totale",
    name: "La Totale",
    description: "Complexe multivitaminé complet pour une santé optimale",
    imageUrl: "/lovable-uploads/2e0bb200-ebeb-42d1-9631-c0fd9eb9d463.png",
    expectedResults: "Soutien nutritionnel complet et énergie optimale",
    recommendationReason: "Formule complète pour une santé globale",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/la-totale",
    categories: ["santé_générale", "énergie", "vitalité"],
    scores: [
      { condition: "Santé générale", score: 5 },
      { condition: "Énergie", score: 4 },
      { condition: "Vitalité", score: 4 }
    ],
    therapeuticClaims: [
      "Soutien nutritionnel complet",
      "Améliore les niveaux d'énergie",
      "Renforce la vitalité"
    ],
    relationships: {
      complementaryProducts: ["mineral-drop", "omega-3"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien avec un repas",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];