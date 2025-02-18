
import { ProductDefinition } from "../productTypes";

export const ANTISEPTIC_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "huile-tea-tree",
    name: "Huile de Tea Tree",
    description: "Huile essentielle aux propriétés antiseptiques naturelles",
    imageUrl: "/placeholder.svg",
    expectedResults: "Action antiseptique et purifiante",
    recommendationReason: "Solution naturelle pour les soins antiseptiques",
    dietaryInfo: "Usage externe uniquement",
    productUrl: "https://maisonjacynthe.ca/fr/huile-tea-tree",
    categories: ["antiseptique", "topique", "peau"],
    scores: [
      { condition: "Soins cutanés", score: 5 },
      { condition: "Antiseptique", score: 5 }
    ],
    therapeuticClaims: [
      "Propriétés antiseptiques naturelles",
      "Aide à purifier la peau",
      "Soutient la santé cutanée"
    ],
    relationships: {
      complementaryProducts: ["calendula", "lavande"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage ponctuel",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "calendula",
    name: "Calendula",
    description: "Solution apaisante et cicatrisante naturelle",
    imageUrl: "/placeholder.svg",
    expectedResults: "Apaisement et soutien de la guérison cutanée",
    recommendationReason: "Soin naturel pour la peau",
    dietaryInfo: "Usage externe",
    productUrl: "https://maisonjacynthe.ca/fr/calendula",
    categories: ["antiseptique", "peau", "guérison"],
    scores: [
      { condition: "Soins cutanés", score: 4 },
      { condition: "Cicatrisation", score: 5 }
    ],
    therapeuticClaims: [
      "Aide à la cicatrisation",
      "Propriétés apaisantes naturelles",
      "Soutient la santé de la peau"
    ],
    relationships: {
      complementaryProducts: ["huile-tea-tree", "lavande"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  }
];
