import { ProductDefinition } from '../productTypes';

export const SLEEP_RELAXATION_PRODUCTS: ProductDefinition[] = [
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
      { condition: "Améliorer le sommeil", score: 3 },
      { condition: "Gérer le stress", score: 2 }
    ],
    therapeuticClaims: ["Troubles du sommeil", "Insomnie"]
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
    categories: ["relaxation", "stress", "muscle"],
    scores: [
      { condition: "Améliorer le sommeil", score: 2 },
      { condition: "Gérer le stress", score: 3 }
    ],
    therapeuticClaims: ["Stress", "Tension musculaire"]
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
      { condition: "Améliorer le sommeil", score: 3 },
      { condition: "Gérer le stress", score: 2 }
    ],
    therapeuticClaims: ["Insomnie", "Anxiété nocturne"]
  }
];