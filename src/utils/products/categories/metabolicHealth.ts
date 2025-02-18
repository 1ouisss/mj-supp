
import { ProductDefinition } from "../productTypes";

export const METABOLIC_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "metabolisme-plus",
    name: "Métabolisme Plus",
    description: "Formule naturelle pour soutenir le métabolisme",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soutien du métabolisme et gestion du poids",
    recommendationReason: "Support naturel pour la gestion du poids",
    dietaryInfo: "Sans gluten, végétarien",
    productUrl: "https://maisonjacynthe.ca/fr/metabolisme-plus",
    categories: ["poids", "métabolisme", "vitalité"],
    scores: [
      { condition: "Gestion du poids", score: 5 },
      { condition: "Métabolisme lent", score: 4 }
    ],
    therapeuticClaims: [
      "Soutient un métabolisme sain",
      "Aide à la gestion du poids",
      "Favorise l'énergie naturelle"
    ],
    relationships: {
      complementaryProducts: ["omega-3", "complexe-b"],
      contraindications: []
    },
    usage: {
      timing: "Matin et midi",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "brule-graisse",
    name: "Brûle-Graisse",
    description: "Complexe naturel pour la gestion du poids",
    imageUrl: "/placeholder.svg",
    expectedResults: "Optimisation du métabolisme des graisses",
    recommendationReason: "Support pour la perte de poids",
    dietaryInfo: "Sans stimulants artificiels",
    productUrl: "https://maisonjacynthe.ca/fr/brule-graisse",
    categories: ["poids", "sport", "métabolisme"],
    scores: [
      { condition: "Perte de poids", score: 5 },
      { condition: "Métabolisme", score: 4 }
    ],
    therapeuticClaims: [
      "Aide à la gestion du poids",
      "Soutient le métabolisme des graisses",
      "Favorise l'énergie pendant l'exercice"
    ],
    relationships: {
      complementaryProducts: ["metabolisme-plus", "mineral-drop"],
      contraindications: []
    },
    usage: {
      timing: "Avant l'activité physique",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "detox-minceur",
    name: "Détox Minceur",
    description: "Programme de détoxification et de gestion du poids",
    imageUrl: "/placeholder.svg",
    expectedResults: "Détoxification et support pour la perte de poids",
    recommendationReason: "Programme complet de détox et minceur",
    dietaryInfo: "Naturel, sans additifs",
    productUrl: "https://maisonjacynthe.ca/fr/detox-minceur",
    categories: ["poids", "digestion", "détox"],
    scores: [
      { condition: "Détoxification", score: 5 },
      { condition: "Perte de poids", score: 4 }
    ],
    therapeuticClaims: [
      "Soutient la détoxification naturelle",
      "Aide à la gestion du poids",
      "Améliore la digestion"
    ],
    relationships: {
      complementaryProducts: ["probiotiques", "mineral-drop"],
      contraindications: []
    },
    usage: {
      timing: "Matin à jeun",
      duration: "Programme de 30 jours",
      seasonality: ["printemps", "été"]
    },
    timeFrame: "court_terme"
  }
];
