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
    categories: ["sleep", "relaxation", "short_term"],
    scores: [
      { condition: "Améliorer le sommeil", score: 5 },
      { condition: "Difficulté à se détendre ou à dormir", score: 5 }
    ],
    therapeuticClaims: [
      "Improves sleep onset and reduces nighttime waking 🌙",
      "Aide à l'endormissement naturel",
      "Régulation du cycle circadien"
    ],
    relationships: {
      complementaryProducts: ["magnesium"],
      contraindications: ["Grossesse", "Allaitement"]
    },
    usage: {
      timing: "Prendre 30 minutes avant le coucher",
      duration: "Utilisation ponctuelle recommandée",
      dosage: "1-3mg selon les besoins",
      seasonality: ["all_year"]
    },
    timeFrame: "short_term"
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
    categories: ["relaxation", "stress", "muscle", "long_term"],
    scores: [
      { condition: "Gérer le stress", score: 5 },
      { condition: "Améliorer le sommeil", score: 4 },
      { condition: "Douleurs musculaires", score: 4 }
    ],
    therapeuticClaims: [
      "Relaxation musculaire profonde",
      "Réduction du stress chronique",
      "Soutien du système nerveux"
    ],
    relationships: {
      complementaryProducts: ["melatonine"],
      contraindications: ["Insuffisance rénale"]
    },
    usage: {
      timing: "Prendre le soir pour la relaxation",
      duration: "Utilisation quotidienne recommandée",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  }
];