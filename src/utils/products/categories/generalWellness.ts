import { ProductDefinition } from '../productTypes';

export const GENERAL_WELLNESS_PRODUCTS: ProductDefinition[] = [
  {
    id: "omega-3",
    name: "Multivitamines La Totale",
    description: "Complexe complet de vitamines et minéraux essentiels.",
    imageUrl: "/lovable-uploads/9fe3dcb7-455a-4684-af23-43bb9a63de07.png",
    expectedResults: "Soutien nutritionnel complet 🌟",
    recommendationReason: "Base nutritionnelle essentielle",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/multivitamines",
    categories: ["general_health", "essential", "long_term"],
    scores: [
      { condition: "Soutien nutritionnel", score: 5 },
      { condition: "Santé générale", score: 5 }
    ],
    therapeuticClaims: [
      "Apport quotidien en vitamines et minéraux",
      "Soutien du système immunitaire",
      "Énergie et vitalité"
    ],
    relationships: {
      complementaryProducts: ["magnesium"],
      contraindications: []
    },
    usage: {
      timing: "Prendre avec un repas",
      duration: "Utilisation quotidienne recommandée",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  }
];