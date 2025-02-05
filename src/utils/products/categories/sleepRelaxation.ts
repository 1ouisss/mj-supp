import { ProductDefinition } from '../productTypes';

export const SLEEP_RELAXATION_PRODUCTS: ProductDefinition[] = [
  {
    id: "melatonine",
    name: "Mélatonine",
    description: "Aide naturelle pour améliorer la qualité du sommeil et réduire l'insomnie.",
    imageUrl: "/lovable-uploads/44cf3f14-98a1-43e6-b5f4-e1ddcbda3d93.png",
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
    imageUrl: "/lovable-uploads/13e46990-e5e0-4bd3-8238-5682ce7a6045.png",
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