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
  },
  {
    id: "vitamine-d",
    name: "Vitamine D",
    description: "Essentielle pour la santé osseuse et l'immunité.",
    imageUrl: "/lovable-uploads/7336c578-a712-4ec7-bf62-9be26f615a1f.png",
    expectedResults: "Renforcement osseux et immunitaire 🦴",
    recommendationReason: "Soutien essentiel pour la santé",
    dietaryInfo: "Vegan",
    productUrl: "https://maisonjacynthe.ca/fr/vitamine-d",
    categories: ["essential", "bone_health", "immunity"],
    scores: [
      { condition: "Renforcer l'immunité", score: 4 },
      { condition: "Santé osseuse", score: 5 }
    ],
    therapeuticClaims: [
      "Soutien du système immunitaire",
      "Santé osseuse"
    ]
  }
];