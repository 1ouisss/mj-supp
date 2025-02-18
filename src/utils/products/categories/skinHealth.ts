
import { ProductDefinition } from "../productTypes";

export const SKIN_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "formule-eczema",
    name: "Formule eczéma",
    description: "Solution aromathérapeutique pour l'eczéma et la dermatite",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement symptomatique de l'eczéma et de la dermatite",
    recommendationReason: "Traitement naturel pour les problèmes de peau",
    dietaryInfo: "NPN : 80096912",
    productUrl: "https://maisonjacynthe.ca/fr/formule-eczema",
    categories: ["peau", "peau_sensible"],
    scores: [
      { condition: "Eczéma", score: 5 },
      { condition: "Dermatite", score: 5 }
    ],
    therapeuticClaims: [
      "Utilisé en aromathérapie pour le soulagement symptomatique de l'eczéma/de la dermatite"
    ],
    relationships: {
      complementaryProducts: ["formule-apaisante"],
      contraindications: []
    },
    usage: {
      timing: "Application selon les besoins",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "dermopur-acne",
    name: "Dermopur acné",
    description: "Solution aromathérapeutique pour l'acné et les furoncles",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement symptomatique de l'acné et des furoncles",
    recommendationReason: "Traitement naturel pour l'acné",
    dietaryInfo: "NPN : 80096927",
    productUrl: "https://maisonjacynthe.ca/fr/dermopur-acne",
    categories: ["peau", "peau_sensible"],
    scores: [
      { condition: "Acné", score: 5 },
      { condition: "Furoncles", score: 4 }
    ],
    therapeuticClaims: [
      "Utilisé en aromathérapie pour le soulagement symptomatique de l'acné/des furoncles"
    ],
    relationships: {
      complementaryProducts: ["gel-sebo", "zinc"],
      contraindications: []
    },
    usage: {
      timing: "Application quotidienne",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
