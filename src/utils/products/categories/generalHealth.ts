import { ProductDefinition } from '../productTypes';

export const GENERAL_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "multivitamines-la-totale",
    name: "Multivitamines La Totale",
    description: "Formule complète de multivitamines",
    imageUrl: "/lovable-uploads/f2d4ffb2-0e13-424f-bc29-2acaa73c0a00.png",
    expectedResults: "Couverture optimale des besoins nutritionnels",
    recommendationReason: "Formule complète pour une santé optimale",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/multivitamines-la-totale",
    categories: ["essentiel", "santé_générale"],
    scores: [
      { condition: "Soutien nutritionnel", score: 5 },
      { condition: "Santé générale", score: 5 }
    ],
    therapeuticClaims: [
      "Apport complet en vitamines et minéraux",
      "Soutient la santé globale",
      "Formule complète"
    ],
    relationships: {
      complementaryProducts: ["mineraux"],
      contraindications: []
    },
    usage: {
      timing: "Avec un repas",
      duration: "Usage quotidien",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];