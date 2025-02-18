
import { ProductDefinition } from "../productTypes";

export const JOINT_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "glucosamine-complete",
    name: "Glucosamine Complète",
    description: "Formule complète pour la santé des articulations",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement articulaire et mobilité améliorée",
    recommendationReason: "Support complet pour les articulations",
    dietaryInfo: "Sans produits marins, végétarien",
    productUrl: "https://maisonjacynthe.ca/fr/glucosamine-complete",
    categories: ["articulations", "santé_osseuse", "récupération"],
    scores: [
      { condition: "Douleurs articulaires", score: 9 },
      { condition: "Raideur matinale", score: 8 }
    ],
    therapeuticClaims: [
      "Soutient la santé des articulations",
      "Aide à maintenir le cartilage",
      "Améliore la mobilité"
    ],
    relationships: {
      complementaryProducts: ["omega-3", "curcuma"],
      contraindications: []
    },
    usage: {
      timing: "Avec les repas",
      duration: "Usage quotidien",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "arthro-flex",
    name: "Arthro-Flex",
    description: "Solution naturelle pour la flexibilité articulaire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Souplesse articulaire et confort amélioré",
    recommendationReason: "Formule avancée pour les articulations",
    dietaryInfo: "Sans gluten, naturel",
    productUrl: "https://maisonjacynthe.ca/fr/arthro-flex",
    categories: ["articulations", "récupération", "sport"],
    scores: [
      { condition: "Raideur articulaire", score: 9 },
      { condition: "Activité physique", score: 8 }
    ],
    therapeuticClaims: [
      "Améliore la flexibilité",
      "Soutient la récupération articulaire",
      "Maintient la santé du cartilage"
    ],
    relationships: {
      complementaryProducts: ["magnesium", "msm"],
      contraindications: []
    },
    usage: {
      timing: "Matin et soir",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
