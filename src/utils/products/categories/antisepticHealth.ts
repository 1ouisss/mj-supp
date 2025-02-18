
import { ProductDefinition } from "../productTypes";

export const ANTISEPTIC_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "gel-antiseptique-1",
    name: "Gel antiseptique",
    description: "Efficace pour détruire les bactéries nocives et procurer un nettoyage antiseptique",
    imageUrl: "/placeholder.svg",
    expectedResults: "Nettoyage antiseptique et prévention des bactéries",
    recommendationReason: "Protection antibactérienne efficace",
    dietaryInfo: "NPN: 80097884",
    productUrl: "https://maisonjacynthe.ca/fr/gel-antiseptique",
    categories: ["antiseptique", "défense", "peau"],
    scores: [
      { condition: "Hygiène des mains", score: 9 },
      { condition: "Protection antibactérienne", score: 9 }
    ],
    therapeuticClaims: [
      "Efficace pour détruire les bactéries nocives",
      "Nettoyant antibactérien pour la peau",
      "Prévient la propagation de bactéries",
      "Nettoyant antiseptique pour la peau"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage quotidien",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "antiseptique-concentre",
    name: "L'Antiseptique",
    description: "Solution antiseptique concentrée pour l'hygiène personnelle",
    imageUrl: "/placeholder.svg",
    expectedResults: "Protection antibactérienne efficace",
    recommendationReason: "Désinfection puissante et protection durable",
    dietaryInfo: "NPN: 80106684",
    productUrl: "https://maisonjacynthe.ca/fr/antiseptique",
    categories: ["antiseptique", "défense", "peau"],
    scores: [
      { condition: "Désinfection", score: 9 },
      { condition: "Protection antibactérienne", score: 9 }
    ],
    therapeuticClaims: [
      "Efficace pour détruire des bactéries nocives",
      "Nettoyant antibactérien pour la peau",
      "Prévient la propagation de bactéries",
      "Tue les bactéries et microbes nocifs"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage quotidien",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  }
];
