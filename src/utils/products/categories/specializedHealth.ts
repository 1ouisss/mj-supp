import { ProductDefinition } from '../productTypes';

export const SPECIALIZED_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "coenzyme-q10",
    name: "Coenzyme Q10",
    description: "Supplément pour la santé cérébrale et la gestion des migraines.",
    imageUrl: "/lovable-uploads/ce08bdaa-0440-4064-9cd7-04bd6a5ed979.png",
    expectedResults: "Réduction des migraines, meilleure santé cérébrale 🧠",
    recommendationReason: "Solution naturelle pour les migraines",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/coenzyme-q10",
    categories: ["migraine", "brain"],
    scores: [
      { condition: "Migraines", score: 5 },
      { condition: "Soutenir la santé cérébrale", score: 4 }
    ],
    therapeuticClaims: [
      "Réduction des migraines",
      "Soutien énergétique cellulaire"
    ]
  },
  {
    id: "selenium",
    name: "Sélénium",
    description: "Minéral essentiel pour la santé thyroïdienne.",
    imageUrl: "/lovable-uploads/d5909b03-6e45-4800-9745-c277e084faf9.png",
    expectedResults: "Fonction thyroïdienne optimisée 🌟",
    recommendationReason: "Soutien pour la thyroïde",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/selenium",
    categories: ["thyroid"],
    scores: [
      { condition: "Santé thyroïdienne", score: 5 }
    ],
    therapeuticClaims: [
      "Soutien de la fonction thyroïdienne",
      "Antioxydant"
    ]
  }
];