import { ProductDefinition } from '../productTypes';

export const DIGESTIVE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "jus-aloes",
    name: "Jus d'Aloès",
    description: "Boisson naturelle pour soutenir la santé digestive.",
    imageUrl: "/lovable-uploads/22027cf2-d007-47d3-9546-46d34b1ea955.png",
    expectedResults: "Digestion améliorée, confort intestinal 🌿",
    recommendationReason: "Soutien digestif naturel",
    dietaryInfo: "100% Naturel, Vegan",
    productUrl: "https://maisonjacynthe.ca/fr/jus-aloes",
    categories: ["digestive", "short_term"],
    scores: [
      { condition: "Améliorer la digestion", score: 5 },
      { condition: "Problèmes digestifs", score: 5 }
    ],
    therapeuticClaims: [
      "Soulagement rapide des troubles digestifs",
      "Action anti-inflammatoire naturelle",
      "Amélioration du transit intestinal"
    ],
    relationships: {
      complementaryProducts: ["probiotiques"],
      contraindications: ["Grossesse"]
    },
    usage: {
      timing: "Prendre à jeun le matin",
      duration: "Cure de 1-3 mois",
      seasonality: ["all_year"]
    },
    timeFrame: "short_term"
  },
  {
    id: "probiotiques",
    name: "Probiotiques",
    description: "Complexe de probiotiques pour l'équilibre de la flore intestinale.",
    imageUrl: "/lovable-uploads/2acb2995-f372-4919-aa20-6b2c88e080ae.png",
    expectedResults: "Équilibre intestinal, immunité renforcée 🦠",
    recommendationReason: "Soutien pour la santé intestinale",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/probiotiques",
    categories: ["digestive", "immune", "long_term"],
    scores: [
      { condition: "Améliorer la digestion", score: 5 },
      { condition: "Renforcer l'immunité", score: 4 }
    ],
    therapeuticClaims: [
      "Restauration de la flore intestinale",
      "Renforcement du système immunitaire",
      "Amélioration de la digestion"
    ],
    relationships: {
      complementaryProducts: ["jus-aloes"],
      contraindications: ["Immunodépression sévère"]
    },
    usage: {
      timing: "Prendre à jeun le matin",
      duration: "Utilisation continue recommandée",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  }
];