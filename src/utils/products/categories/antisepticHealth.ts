
import { ProductDefinition } from "../productTypes";

export const ANTISEPTIC_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "gel-antiseptique-1",
    name: "Gel antiseptique",
    description: "Efficace pour détruire les bactéries nocives afin de procurer un nettoyage antiseptique",
    imageUrl: "/placeholder.svg",
    expectedResults: "Nettoyage antiseptique et prévention de la propagation des bactéries",
    recommendationReason: "Solution efficace pour l'hygiène des mains",
    dietaryInfo: "NPN : 80097884",
    productUrl: "https://maisonjacynthe.ca/fr/gel-antiseptique",
    categories: ["antiseptique", "peau"],
    scores: [
      { condition: "Hygiène des mains", score: 5 },
      { condition: "Nettoyage antiseptique", score: 5 }
    ],
    therapeuticClaims: [
      "Efficace pour détruire les bactéries nocives",
      "Nettoyant antibactérien pour la peau",
      "Pour l'hygiène personnelle des mains"
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
    id: "bobome",
    name: "Bobôme",
    description: "Solution naturelle pour la cicatrisation des plaies",
    imageUrl: "/placeholder.svg",
    expectedResults: "Aide à la cicatrisation et soulagement des irritations cutanées",
    recommendationReason: "Solution naturelle pour divers problèmes cutanés",
    dietaryInfo: "NPN : 80106560",
    productUrl: "https://maisonjacynthe.ca/fr/bobome",
    categories: ["peau", "guérison"],
    scores: [
      { condition: "Cicatrisation", score: 5 },
      { condition: "Irritations cutanées", score: 4 }
    ],
    therapeuticClaims: [
      "Aide à la cicatrisation des plaies",
      "Aide à soulager les inflammations de la peau",
      "Aide à soulager les irritations de la peau"
    ],
    relationships: {
      complementaryProducts: ["formule-apaisante"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage ponctuel",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  }
];
