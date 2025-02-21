
import { ProductDefinition } from "../productTypes";

export const ANTISEPTIC_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "gel-antiseptique-1",
    name: "Gel Antiseptique",
    description: "Gel nettoyant antiseptique efficace pour une hygiène optimale des mains",
    imageUrl: "/placeholder.svg",
    expectedResults: "Nettoyage antiseptique efficace et protection contre les bactéries nocives",
    recommendationReason: "Solution antiseptique naturelle pour l'hygiène des mains",
    dietaryInfo: "NPN: 80097884, 80097881, 80097878, 80098596",
    productUrl: "https://maisonjacynthe.ca/fr/gel-antiseptique",
    categories: ["antiseptique", "défense"],
    scores: [
      { condition: "Hygiène des mains", score: 9 },
      { condition: "Protection antibactérienne", score: 9 },
      { condition: "Prévention", score: 8 }
    ],
    therapeuticClaims: [
      "Efficace pour détruire les bactéries nocives",
      "Nettoyant antibactérien pour la peau",
      "Pour l'hygiène personnelle des mains",
      "Prévient la propagation de bactéries",
      "Tue les bactéries et microbes nocifs"
    ],
    relationships: {
      complementaryProducts: ["l-antiseptique"],
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
    id: "l-antiseptique",
    name: "L'Antiseptique",
    description: "Solution antiseptique naturelle pour une protection optimale",
    imageUrl: "/placeholder.svg",
    expectedResults: "Protection antibactérienne efficace et nettoyage en profondeur",
    recommendationReason: "Protection naturelle contre les bactéries nocives",
    dietaryInfo: "NPN: 80106684",
    productUrl: "https://maisonjacynthe.ca/fr/l-antiseptique",
    categories: ["antiseptique", "défense"],
    scores: [
      { condition: "Protection antibactérienne", score: 9 },
      { condition: "Hygiène des mains", score: 9 },
      { condition: "Nettoyage antiseptique", score: 8 }
    ],
    therapeuticClaims: [
      "Efficace pour détruire des bactéries nocives",
      "Nettoyant antibactérien pour la peau",
      "Pour l'hygiène personnelle des mains",
      "Prévient la propagation de bactéries",
      "Tue les bactéries et microbes nocifs"
    ],
    relationships: {
      complementaryProducts: ["gel-antiseptique"],
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
