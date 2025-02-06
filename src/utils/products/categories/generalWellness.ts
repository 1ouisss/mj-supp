import { ProductDefinition } from '../productTypes';

export const GENERAL_WELLNESS_PRODUCTS: ProductDefinition[] = [
  {
    id: "omega-3",
    name: "Multivitamines La Totale",
    description: "Complexe complet de vitamines et minéraux essentiels.",
    imageUrl: "/lovable-uploads/b1645716-9315-4412-9bda-c2b124ef8e6e.png",
    expectedResults: "Soutien nutritionnel complet 🌟",
    recommendationReason: "Base nutritionnelle essentielle",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/multivitamines",
    categories: ["santé_générale", "essentiel", "long_terme"],
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
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];