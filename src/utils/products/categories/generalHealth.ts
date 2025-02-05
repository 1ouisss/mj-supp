import { ProductDefinition } from '../productTypes';

export const GENERAL_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "soutien-sante",
    name: "Soutien Santé",
    description: "Formule complète pour la vitalité et l'immunité",
    imageUrl: "/lovable-uploads/4ccea2a6-43df-472a-8f3c-848d654e081f.png",
    expectedResults: "Amélioration de la vitalité et de l'immunité",
    recommendationReason: "Soutien complet pour la santé générale",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/soutien-sante",
    categories: ["santé_générale", "immunité", "essentiel"],
    scores: [
      { condition: "Renforcer l'immunité", score: 5 },
      { condition: "Améliorer l'énergie", score: 4 }
    ],
    therapeuticClaims: [
      "Renforce le système immunitaire",
      "Soutient la vitalité générale",
      "Favorise le bien-être"
    ],
    relationships: {
      complementaryProducts: ["multivitamines-la-totale"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "multivitamines-la-totale",
    name: "Multivitamines La Totale",
    description: "Formule complète de multivitamines",
    imageUrl: "/lovable-uploads/4ccea2a6-43df-472a-8f3c-848d654e081f.png",
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