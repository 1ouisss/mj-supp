
import { ProductDefinition } from "../productTypes";

export const DIGESTIVE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "l-ami",
    name: "L'Ami",
    description: "Support digestif naturel",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration du transit intestinal",
    recommendationReason: "Solution naturelle pour la constipation",
    dietaryInfo: "NPN: 80095062",
    productUrl: "https://maisonjacynthe.ca/fr/l-ami",
    categories: ["digestif"],
    scores: [
      { condition: "Transit intestinal", score: 9 },
      { condition: "Constipation", score: 8 }
    ],
    therapeuticClaims: [
      "Facilite l'évacuation intestinale",
      "Soulagement de la constipation occasionnelle",
      "Laxatif stimulant"
    ],
    relationships: {
      complementaryProducts: ["probiotiques", "fibresEssentielles"],
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
    id: "probiotiques",
    name: "Probiotiques",
    description: "Régénérant actif de la flore intestinale",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration du confort intestinal",
    recommendationReason: "Support pour la santé digestive",
    dietaryInfo: "NPN: 80012298",
    productUrl: "https://maisonjacynthe.ca/fr/probiotiques",
    categories: ["digestif"],
    scores: [
      { condition: "Santé intestinale", score: 9 },
      { condition: "Confort digestif", score: 8 }
    ],
    therapeuticClaims: [
      "Améliore le confort intestinal",
      "Effet bénéfique pour la santé digestive"
    ],
    relationships: {
      complementaryProducts: ["lAmi", "fibresEssentielles"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "fibres-essentielles",
    name: "Fibres Essentielles",
    description: "Support pour la santé digestive et le transit intestinal",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration du transit et de la régularité",
    recommendationReason: "Source naturelle de fibres pour la santé digestive",
    dietaryInfo: "NPN: 80095063",
    productUrl: "https://maisonjacynthe.ca/fr/fibres-essentielles",
    categories: ["digestif"],
    scores: [
      { condition: "Transit intestinal", score: 9 },
      { condition: "Constipation", score: 8 }
    ],
    therapeuticClaims: [
      "Laxatif mucilagineux pour soulager en douceur la constipation",
      "Facilite l'évacuation intestinale",
      "Aide à la régularité"
    ],
    relationships: {
      complementaryProducts: ["lAmi", "probiotiques"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
