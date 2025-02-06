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
    id: "fibres-ami",
    name: "Fibres & l'Ami",
    description: "Duo essentiel pour la santé digestive : fibres avec orme et hibiscus, et activateur du muscle intestinal",
    imageUrl: "/lovable-uploads/6405a0a0-1775-4627-a954-93376cca4aa4.png",
    expectedResults: "Régulation digestive et soutien du transit intestinal",
    recommendationReason: "Combinaison synergique pour une santé digestive optimale",
    dietaryInfo: "Formule naturelle, Convient aux végétariens",
    productUrl: "https://maisonjacynthe.ca/fr/fibres-ami",
    categories: ["digestif", "essentiel"],
    scores: [
      { condition: "Santé digestive", score: 5 },
      { condition: "Transit intestinal", score: 5 },
      { condition: "Bien-être général", score: 4 }
    ],
    therapeuticClaims: [
      "Régulateur digestif naturel",
      "Soutient le transit intestinal",
      "Breuvage éliminatoire",
      "Active le muscle intestinal"
    ],
    relationships: {
      complementaryProducts: ["probiotiques", "jus-aloes"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];