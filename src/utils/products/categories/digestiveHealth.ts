import { ProductDefinition } from '../productTypes';

export const DIGESTIVE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "jus-aloes",
    name: "Jus d'Aloès",
    description: "Boisson naturelle pour soutenir la santé digestive.",
    imageUrl: "/lovable-uploads/8fe4ae95-85e6-4127-a217-447d2915f2f0.png",
    expectedResults: "Digestion améliorée, confort intestinal 🌿",
    recommendationReason: "Soutien digestif naturel",
    dietaryInfo: "100% Naturel, Vegan",
    productUrl: "https://maisonjacynthe.ca/fr/jus-aloes",
    categories: ["digestive"],
    scores: [
      { condition: "Améliorer la digestion", score: 5 },
      { condition: "Problèmes digestifs", score: 5 }
    ],
    therapeuticClaims: [
      "Soulagement des troubles digestifs",
      "Anti-inflammatoire naturel"
    ]
  },
  {
    id: "fibres-ami",
    name: "Fibres & l'Ami",
    description: "Complexe de fibres pour une santé intestinale optimale.",
    imageUrl: "/lovable-uploads/20a35551-6b6b-4876-8c89-8bc7c88782cc.png",
    expectedResults: "Transit régulier, équilibre intestinal 🌱",
    recommendationReason: "Soutien pour la santé digestive",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/fibres-ami",
    categories: ["digestive"],
    scores: [
      { condition: "Améliorer la digestion", score: 5 },
      { condition: "Transit intestinal", score: 5 }
    ],
    therapeuticClaims: [
      "Régulation du transit",
      "Soutien de la flore intestinale"
    ]
  },
  {
    id: "fontaine-jouvence",
    name: "Fontaine de Jouvence Complet",
    description: "Complexe nutritif complet pour la santé digestive et générale.",
    imageUrl: "/lovable-uploads/83811a8d-7d09-452e-9991-a4f4ef7c4c71.png",
    expectedResults: "Vitalité accrue, digestion optimisée ✨",
    recommendationReason: "Solution complète pour la santé",
    dietaryInfo: "Naturel, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/fontaine-jouvence",
    categories: ["general_health", "digestive"],
    scores: [
      { condition: "Santé générale", score: 5 },
      { condition: "Améliorer la digestion", score: 4 }
    ],
    therapeuticClaims: [
      "Soutien digestif",
      "Vitalité générale"
    ]
  },
  {
    id: "probiotiques",
    name: "Probiotiques",
    description: "Complexe de probiotiques pour l'équilibre de la flore intestinale.",
    imageUrl: "/lovable-uploads/b254b737-e6ef-457f-ae66-fa69df445e12.png",
    expectedResults: "Équilibre intestinal, immunité renforcée 🦠",
    recommendationReason: "Soutien pour la santé intestinale",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/probiotiques",
    categories: ["digestive"],
    scores: [
      { condition: "Améliorer la digestion", score: 5 },
      { condition: "Renforcer l'immunité", score: 4 }
    ],
    therapeuticClaims: [
      "Équilibre de la flore intestinale",
      "Soutien immunitaire"
    ]
  }
];