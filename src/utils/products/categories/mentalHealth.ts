import { ProductDefinition } from '../productTypes';

export const MENTAL_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "focus",
    name: "Focus",
    description: "Formule avancée pour la concentration et la clarté mentale.",
    imageUrl: "/lovable-uploads/75ff84e8-c303-4908-9110-609c7e765eec.png",
    expectedResults: "Concentration améliorée, clarté mentale accrue 🧠",
    recommendationReason: "Soutien cognitif optimal",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/focus",
    categories: ["brain", "concentration"],
    scores: [
      { condition: "Améliorer la concentration", score: 5 },
      { condition: "Soutenir la santé cérébrale", score: 5 }
    ],
    therapeuticClaims: [
      "Amélioration de la concentration",
      "Soutien de la mémoire",
      "Clarté mentale"
    ]
  },
  {
    id: "energie-adaptogene",
    name: "Énergie & Adaptogènes",
    description: "Complexe énergisant avec adaptogènes pour le stress.",
    imageUrl: "/lovable-uploads/69fac7c4-db16-461e-bdbe-8322e037ddcb.png",
    expectedResults: "Énergie stable, meilleure résistance au stress ⚡",
    recommendationReason: "Soutien énergétique et anti-stress",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/energie-adaptogene",
    categories: ["stress", "energy"],
    scores: [
      { condition: "Améliorer l'énergie", score: 5 },
      { condition: "Gérer le stress", score: 4 }
    ],
    therapeuticClaims: [
      "Boost d'énergie naturel",
      "Adaptation au stress"
    ]
  }
];