import { ProductDefinition } from '../productTypes';

export const DIGESTIVE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "fontaine-jouvence",
    name: "Fontaine de Jouvence Complet",
    description: "Complexe nutritif complet pour la santé digestive et l'énergie",
    imageUrl: "/lovable-uploads/2e0bb200-ebeb-42d1-9631-c0fd9eb9d463.png",
    expectedResults: "Amélioration de la digestion et augmentation de l'énergie",
    recommendationReason: "Soutien digestif complet et boost d'énergie naturel",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/fontaine-jouvence-complet",
    categories: ["digestif", "énergie", "immunité", "santé_générale"],
    scores: [
      { condition: "Améliorer la digestion", score: 5 },
      { condition: "Améliorer l'énergie", score: 4 },
      { condition: "Renforcer l'immunité", score: 4 }
    ],
    therapeuticClaims: [
      "Soutient la santé digestive",
      "Boost d'énergie naturel",
      "Renforce le système immunitaire",
      "Améliore l'absorption des nutriments"
    ],
    relationships: {
      complementaryProducts: ["probiotiques", "mineraux"],
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
    id: "jus-aloes",
    name: "Jus d'Aloès",
    description: "Jus d'aloès vera 99% pur, essentiel de base pour la santé digestive",
    imageUrl: "/lovable-uploads/12fd5f58-c55e-4dbd-896b-e5dbf32417a9.png",
    expectedResults: "Amélioration de la santé digestive et du système immunitaire",
    recommendationReason: "Base essentielle pour la santé digestive et le bien-être général",
    dietaryInfo: "99% Aloe Vera, Base essentielle",
    productUrl: "https://maisonjacynthe.ca/fr/jus-aloes",
    categories: ["digestif", "immunité", "santé_générale"],
    scores: [
      { condition: "Santé digestive", score: 5 },
      { condition: "Immunité", score: 4 },
      { condition: "Bien-être général", score: 4 }
    ],
    therapeuticClaims: [
      "Soutient la santé digestive",
      "Renforce le système immunitaire",
      "Favorise l'hydratation naturelle"
    ],
    relationships: {
      complementaryProducts: ["probiotiques", "mineraux"],
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
    id: "formule-apaisante",
    name: "Formule Apaisante",
    description: "Mélange apaisant pour le système digestif",
    imageUrl: "/lovable-uploads/634957a0-0968-43f3-94ce-f0924832632a.png",
    expectedResults: "Apaisement du système digestif",
    recommendationReason: "Solution naturelle pour le confort digestif",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/formule-apaisante",
    categories: ["digestif", "relaxation"],
    scores: [
      { condition: "Confort digestif", score: 5 },
      { condition: "Relaxation", score: 4 }
    ],
    therapeuticClaims: [
      "Apaise le système digestif",
      "Favorise la relaxation",
      "Soutient le bien-être digestif"
    ],
    relationships: {
      complementaryProducts: ["bobome"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  }
];