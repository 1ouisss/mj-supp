import { ProductDefinition } from '../productTypes';

export const SLEEP_RELAXATION_PRODUCTS: ProductDefinition[] = [
  {
    id: "melatonine",
    name: "Mélatonine",
    description: "Aide naturelle pour améliorer la qualité du sommeil et réduire l'insomnie.",
    imageUrl: "/lovable-uploads/22745bb0-8d77-4396-a470-13ee7a473f54.png",
    expectedResults: "Sommeil réparateur, réduction des troubles du sommeil 🌙",
    recommendationReason: "Solution naturelle pour le sommeil",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/melatonine-cerise",
    categories: ["sleep", "relaxation"],
    scores: [
      { condition: "Améliorer le sommeil", score: 5 },
      { condition: "Difficulté à se détendre ou à dormir", score: 5 }
    ],
    therapeuticClaims: [
      "Aide à l'endormissement",
      "Régulation du cycle circadien",
      "Réduction de l'insomnie"
    ]
  },
  {
    id: "magnesium",
    name: "Magnésium",
    description: "Minéral essentiel pour la relaxation musculaire et nerveuse.",
    imageUrl: "/lovable-uploads/1b29c20b-ccd6-4eae-a0cd-81d85ed7aeae.png",
    expectedResults: "Détente musculaire et mentale 🧘‍♀️",
    recommendationReason: "Soutien pour la relaxation",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/magnesium",
    categories: ["relaxation", "stress", "muscle"],
    scores: [
      { condition: "Gérer le stress", score: 5 },
      { condition: "Améliorer le sommeil", score: 4 },
      { condition: "Douleurs musculaires", score: 4 }
    ],
    therapeuticClaims: [
      "Relaxation musculaire",
      "Réduction du stress",
      "Soutien du système nerveux"
    ]
  },
  {
    id: "poudre-dodo",
    name: "Poudre Dodo",
    description: "Mélange naturel apaisant pour un sommeil profond et réparateur.",
    imageUrl: "/lovable-uploads/7c391ca6-e829-4dbb-ab08-3882ec7920b7.png",
    expectedResults: "Sommeil de qualité, réveil en forme 😴",
    recommendationReason: "Formule naturelle pour un sommeil optimal",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/poudre-dodo",
    categories: ["sleep", "relaxation"],
    scores: [
      { condition: "Améliorer le sommeil", score: 5 },
      { condition: "Difficulté à se détendre ou à dormir", score: 4 }
    ],
    therapeuticClaims: [
      "Amélioration de la qualité du sommeil",
      "Réduction de l'anxiété nocturne"
    ]
  },
  {
    id: "respire-bien",
    name: "Respire Bien",
    description: "Solution naturelle pour une respiration libre et une détente optimale.",
    imageUrl: "/lovable-uploads/3d4695a5-4f00-4d50-8c0f-ba0fc614d742.png",
    expectedResults: "Respiration facilitée, détente accrue 🌬️",
    recommendationReason: "Aide à la relaxation par la respiration",
    dietaryInfo: "100% Naturel",
    productUrl: "https://maisonjacynthe.ca/fr/respire-bien",
    categories: ["relaxation"],
    scores: [
      { condition: "Gérer le stress", score: 4 },
      { condition: "Améliorer la respiration", score: 5 }
    ],
    therapeuticClaims: [
      "Facilite la respiration",
      "Favorise la relaxation"
    ]
  }
];