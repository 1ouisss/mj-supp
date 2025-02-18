
import { ProductDefinition } from "../productTypes";

export const HORMONE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "libido-boost",
    name: "Libido Boost",
    description: "Formule naturelle pour soutenir la santé hormonale et la libido",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration de la vitalité et de l'énergie sexuelle",
    recommendationReason: "Solution naturelle pour améliorer la libido",
    dietaryInfo: "Sans gluten, végétarien",
    productUrl: "https://maisonjacynthe.ca/fr/libido-boost",
    categories: ["libido", "hormones", "vitalité"],
    scores: [
      { condition: "Baisse de libido", score: 9 },
      { condition: "Fatigue", score: 7 },
      { condition: "Stress", score: 6 }
    ],
    therapeuticClaims: [
      "Soutient la santé hormonale",
      "Améliore la libido naturellement",
      "Augmente l'énergie et la vitalité",
      "Aide à réduire la fatigue"
    ],
    relationships: {
      complementaryProducts: ["vitamine-d", "zinc"],
      contraindications: []
    },
    usage: {
      timing: "Matin et soir",
      duration: "Usage quotidien",
      dosage: "Selon les recommandations",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "hormonal-harmony",
    name: "Harmonie Hormonale",
    description: "Complexe naturel pour l'équilibre hormonal et la vitalité",
    imageUrl: "/placeholder.svg",
    expectedResults: "Équilibre hormonal et amélioration du bien-être général",
    recommendationReason: "Support complet pour la santé hormonale",
    dietaryInfo: "100% naturel, sans hormones synthétiques",
    productUrl: "https://maisonjacynthe.ca/fr/harmonie-hormonale",
    categories: ["hormones", "libido", "santé_femme"],
    scores: [
      { condition: "Déséquilibre hormonal", score: 9 },
      { condition: "Baisse de libido", score: 8 }
    ],
    therapeuticClaims: [
      "Favorise l'équilibre hormonal naturel",
      "Soutient la santé reproductive",
      "Améliore l'énergie et la vitalité"
    ],
    relationships: {
      complementaryProducts: ["omega-3", "magnésium"],
      contraindications: []
    },
    usage: {
      timing: "Matin",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
