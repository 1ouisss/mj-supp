import { ProductDefinition } from '../productTypes';

export const DIGESTIVE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "probiotiques",
    name: "Probiotiques",
    description: "Régénérant actif de la flore intestinale avec 1,3 milliard de bactéries probiotiques par dose.",
    imageUrl: "/lovable-uploads/54ac0240-dbc0-465e-813f-6d8741631873.png",
    expectedResults: "Amélioration du confort gastro-intestinal et régénération de la flore intestinale",
    recommendationReason: "Formule probiotique unique avec des souches résistantes à l'acidité gastrique",
    dietaryInfo: "Contient des traces de produits laitiers. Capsule végétale.",
    productUrl: "https://maisonjacynthe.ca/fr/probiotiques",
    categories: ["digestif", "immunité", "santé_générale"],
    scores: [
      { condition: "Problèmes digestifs", score: 5 },
      { condition: "Santé intestinale", score: 5 },
      { condition: "Système immunitaire", score: 4 }
    ],
    therapeuticClaims: [
      "Régénérant actif de la flore intestinale",
      "Améliore le confort gastro-intestinal",
      "Efficace pendant et après un traitement antibiotique"
    ],
    relationships: {
      complementaryProducts: ["jus-aloes", "fibres-ami"],
      contraindications: []
    },
    usage: {
      timing: "À jeun, avec un peu de liquide froid",
      duration: "Usage quotidien ou selon les besoins",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "jus-aloes",
    name: "Jus d'Aloès",
    description: "Jus d'aloès vera 99% pur, essentiel de base pour la santé digestive",
    imageUrl: "/lovable-uploads/12fd5f58-c55e-4dbd-896b-e5dbf32417a9.png",
    expectedResults: "Amélioration de la santé digestive et du système immunitaire",
    recommendationReason: "Base essentielle pour la santé digestive",
    dietaryInfo: "99% Aloe Vera, Base essentielle",
    productUrl: "https://maisonjacynthe.ca/fr/jus-aloes",
    categories: ["digestif", "immunité", "santé_générale"],
    scores: [
      { condition: "Santé digestive", score: 5 },
      { condition: "Immunité", score: 4 }
    ],
    therapeuticClaims: [
      "Soutient la santé digestive",
      "Renforce le système immunitaire",
      "Favorise l'hydratation naturelle"
    ],
    relationships: {
      complementaryProducts: ["probiotiques"],
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
    description: "Duo essentiel pour la santé digestive : fibres avec orme et hibiscus",
    imageUrl: "/lovable-uploads/6405a0a0-1775-4627-a954-93376cca4aa4.png",
    expectedResults: "Régulation digestive et soutien du transit intestinal",
    recommendationReason: "Combinaison synergique pour une santé digestive optimale",
    dietaryInfo: "Formule naturelle, Convient aux végétariens",
    productUrl: "https://maisonjacynthe.ca/fr/fibres-ami",
    categories: ["digestif", "essentiel"],
    scores: [
      { condition: "Santé digestive", score: 5 },
      { condition: "Transit intestinal", score: 5 }
    ],
    therapeuticClaims: [
      "Régulateur digestif naturel",
      "Soutient le transit intestinal",
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