
import { ProductDefinition } from "../productTypes";

export const SKIN_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "formule-eczema",
    name: "Formule eczéma",
    description: "Solution aromathérapeutique pour le soulagement de l'eczéma",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement des symptômes de l'eczéma et de la dermatite",
    recommendationReason: "Solution naturelle pour les problèmes d'eczéma",
    dietaryInfo: "NPN: 80096912",
    productUrl: "https://maisonjacynthe.ca/fr/formule-eczema",
    categories: ["peau", "peau_sensible", "topique"],
    scores: [
      { condition: "Eczéma", score: 9 },
      { condition: "Dermatite", score: 9 }
    ],
    therapeuticClaims: [
      "Soulagement symptomatique de l'eczéma",
      "Soulagement de la dermatite",
      "Solution aromathérapeutique"
    ],
    relationships: {
      complementaryProducts: ["formuleApaisante", "bobome"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "formule-eczema-enfant",
    name: "Baume apaisant et protecteur",
    description: "Formule spéciale pour enfants, soulage l'eczéma et la dermatite",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement doux des symptômes d'eczéma chez l'enfant",
    recommendationReason: "Solution douce adaptée aux enfants",
    dietaryInfo: "NPN: 80104780",
    productUrl: "https://maisonjacynthe.ca/fr/baume-apaisant-protecteur",
    categories: ["peau", "peau_sensible", "enfants", "topique"],
    scores: [
      { condition: "Eczéma enfant", score: 9 },
      { condition: "Dermatite enfant", score: 9 }
    ],
    therapeuticClaims: [
      "Soulagement symptomatique de l'eczéma",
      "Adapté aux enfants",
      "Protection de la peau sensible"
    ],
    relationships: {
      complementaryProducts: ["formuleApaisante"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "dermopur-acne",
    name: "Dermopur acné",
    description: "Solution naturelle pour le traitement de l'acné",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement des symptômes de l'acné",
    recommendationReason: "Traitement naturel de l'acné",
    dietaryInfo: "NPN: 80096927",
    productUrl: "https://maisonjacynthe.ca/fr/dermopur-acne",
    categories: ["peau", "peau_sensible"],
    scores: [
      { condition: "Acné", score: 9 },
      { condition: "Furoncles", score: 8 }
    ],
    therapeuticClaims: [
      "Soulagement symptomatique de l'acné",
      "Traitement des furoncles",
      "Solution aromathérapeutique"
    ],
    relationships: {
      complementaryProducts: ["gelSebo", "zinc"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "formule-apaisante",
    name: "Formule apaisante",
    description: "Solution apaisante pour les irritations cutanées",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement des irritations mineures de la peau",
    recommendationReason: "Apaisement rapide des irritations cutanées",
    dietaryInfo: "NPN: 80094787",
    productUrl: "https://maisonjacynthe.ca/fr/formule-apaisante",
    categories: ["peau", "peau_sensible", "guérison"],
    scores: [
      { condition: "Irritations cutanées", score: 9 },
      { condition: "Démangeaisons", score: 8 }
    ],
    therapeuticClaims: [
      "Soulage les irritations mineures de la peau",
      "Apaise les démangeaisons",
      "Solution aromathérapeutique"
    ],
    relationships: {
      complementaryProducts: ["bobome", "formulEczema"],
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
