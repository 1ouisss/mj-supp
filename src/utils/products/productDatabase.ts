import { ProductDefinition } from './productTypes';

export const PRODUCTS: ProductDefinition[] = [
  {
    id: "melatonine",
    name: "Mélatonine",
    description: "Aide naturelle pour améliorer la qualité du sommeil et réduire l'insomnie.",
    imageUrl: "/lovable-uploads/22745bb0-8d77-4396-a470-13ee7a473f54.png",
    expectedResults: "Sommeil réparateur, réduction des troubles du sommeil 🌙",
    recommendationReason: "Aide naturelle pour le sommeil et la relaxation",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/melatonine-cerise",
    categories: ["relaxation", "sleep"],
    scores: [
      { condition: "Améliorer le sommeil", score: 3 }
    ]
  },
  {
    id: "magnesium",
    name: "Magnésium",
    description: "Essentiel pour la relaxation musculaire et nerveuse.",
    imageUrl: "/lovable-uploads/1b29c20b-ccd6-4eae-a0cd-81d85ed7aeae.png",
    expectedResults: "Réduction du stress, meilleure qualité de sommeil, soutien musculaire 🛌",
    recommendationReason: "Soutien pour la relaxation et le stress",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/capsules-vegetales-magnesium",
    categories: ["relaxation", "stress"],
    scores: [
      { condition: "Améliorer le sommeil", score: 2 },
      { condition: "Gérer le stress", score: 2 }
    ]
  },
  {
    id: "poudre-dodo",
    name: "Poudre Dodo",
    description: "Mélange naturel pour favoriser le sommeil profond.",
    imageUrl: "/lovable-uploads/7c391ca6-e829-4dbb-ab08-3882ec7920b7.png",
    expectedResults: "Amélioration de l'endormissement, sommeil apaisant 😴",
    recommendationReason: "Solution naturelle pour le sommeil",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/dodo-super-poudre",
    categories: ["relaxation", "sleep"],
    scores: [
      { condition: "Améliorer le sommeil", score: 3 }
    ]
  },
  {
    id: "respire-bien",
    name: "Respire Bien",
    description: "Aide à calmer le système respiratoire pour un meilleur repos.",
    imageUrl: "/lovable-uploads/09828cf6-98cd-4248-959b-2afb82d3781f.png",
    expectedResults: "Détente physique, amélioration de la respiration 💨",
    recommendationReason: "Soutien respiratoire et relaxation",
    dietaryInfo: "100% Naturel",
    productUrl: "https://maisonjacynthe.ca/fr/respire-bien-vapo",
    categories: ["relaxation"],
    scores: [
      { condition: "Améliorer le sommeil", score: 2 }
    ]
  },
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
    ]
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
      { condition: "Problèmes digestifs", score: 2 },
      { condition: "Améliorer la digestion", score: 2 }
    ]
  },
  {
    id: "focus",
    name: "Focus",
    description: "Aide à la concentration et à la clarté mentale.",
    imageUrl: "/lovable-uploads/75ff84e8-c303-4908-9110-609c7e765eec.png",
    expectedResults: "Amélioration de la concentration et de la mémoire 💡",
    recommendationReason: "Soutien cognitif et mental",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/focus",
    categories: ["brain", "concentration"],
    scores: [
      { condition: "Soutenir la santé cérébrale", score: 3 }
    ]
  },
  {
    id: "energie-adaptogenes",
    name: "Énergie & Adaptogènes",
    description: "Mélange d'herbes pour augmenter l'énergie et réduire le stress.",
    imageUrl: "/lovable-uploads/d8dda143-00ec-455f-bc07-9fcc6c854721.png",
    expectedResults: "Augmentation de l'énergie, meilleure adaptation au stress ⚡",
    recommendationReason: "Boost d'énergie et gestion du stress",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/energie-adaptogene",
    categories: ["energy", "stress"],
    scores: [
      { condition: "Améliorer l'énergie", score: 3 },
      { condition: "Gérer le stress", score: 2 }
    ]
  },
  {
    id: "zinc",
    name: "Zinc",
    description: "Soutient le système immunitaire et la santé de la peau.",
    imageUrl: "/lovable-uploads/69fac7c4-db16-461e-bdbe-8322e037ddcb.png",
    expectedResults: "Renforcement immunitaire, réduction des inflammations cutanées 🛡️",
    recommendationReason: "Soutien immunitaire et cutané",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/zinc-cuivre",
    categories: ["hair_health", "skin"],
    scores: [
      { condition: "Problèmes de peau", score: 2 }
    ]
  },
  {
    id: "cocktail-cheveux",
    name: "Cocktail Cheveux",
    description: "Soutien pour des cheveux plus épais et plus forts.",
    imageUrl: "/lovable-uploads/cf2a70e5-72c3-43e4-b261-cd5d17373860.png",
    expectedResults: "Amélioration de la santé capillaire 💇‍♀️",
    recommendationReason: "Santé et beauté des cheveux",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/cocktail-cheveux",
    categories: ["hair_health"],
    scores: [
      { condition: "Problèmes de peau", score: 2 }
    ]
  },
  {
    id: "multivitamines",
    name: "Multivitamines",
    description: "Formule complète pour le soutien quotidien.",
    imageUrl: "/lovable-uploads/83811a8d-7d09-452e-9991-a4f4ef7c4c71.png",
    expectedResults: "Soutien général, renforcement de l'énergie 🏋️‍♂️",
    recommendationReason: "Soutien nutritionnel complet",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/multivitamine-la-totale",
    categories: ["general_health"],
    scores: []
  },
  {
    id: "omega-3",
    name: "Oméga-3",
    description: "Soutient la santé cardiovasculaire et cérébrale.",
    imageUrl: "/lovable-uploads/9b2bbab2-451b-4cae-993b-bbe8ddd50663.png",
    expectedResults: "Soutien cognitif et cardiovasculaire 🧠",
    recommendationReason: "Santé cognitive et cardiaque",
    dietaryInfo: "Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/omega-astaxanthine",
    categories: ["general_health"],
    scores: [
      { condition: "Soutenir la santé cérébrale", score: 2 },
      { condition: "Problèmes cardiovasculaires", score: 2 }
    ]
  }
];
