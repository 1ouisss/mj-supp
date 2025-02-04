import { ProductDefinition } from '../productTypes';

export const DIGESTIVE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "jus-aloes",
    name: "Jus d'Aloès",
    description: "Boisson naturelle pour soutenir la santé digestive.",
    imageUrl: "/lovable-uploads/8fe4ae95-85e6-4127-a217-447d2915f2f0.png",
    expectedResults: "Amélioration de la digestion, soulagement des maux d'estomac 🍃",
    recommendationReason: "Soutien digestif naturel",
    dietaryInfo: "100% Naturel, Vegan",
    productUrl: "https://maisonjacynthe.ca/fr/jus-d-aloes",
    categories: ["digestive"],
    scores: [
      { condition: "Améliorer la digestion", score: 3 },
      { condition: "Problèmes digestifs", score: 3 }
    ],
    therapeuticClaims: ["Troubles digestifs", "Inflammation intestinale"]
  },
  {
    id: "fibres-ami",
    name: "Fibres & l'Ami",
    description: "Mélange riche en fibres pour soutenir la santé intestinale.",
    imageUrl: "/lovable-uploads/20a35551-6b6b-4876-8c89-8bc7c88782cc.png",
    expectedResults: "Amélioration du transit intestinal, soutien digestif 🥗",
    recommendationReason: "Santé digestive optimale",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/duo-de-base-pour-un-ventre-plat",
    categories: ["digestive"],
    scores: [
      { condition: "Problèmes digestifs", score: 3 },
      { condition: "Améliorer la digestion", score: 3 }
    ],
    therapeuticClaims: ["Transit intestinal", "Santé digestive"]
  }
];