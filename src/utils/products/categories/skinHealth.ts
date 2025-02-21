
import { ProductDefinition } from "../productTypes";

export const SKIN_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "formule-eczema",
    name: "Formule Eczéma",
    description: "Solution naturelle pour le soulagement de l'eczéma et de la dermatite",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement des symptômes de l'eczéma et apaisement de la peau",
    recommendationReason: "Solution aromathérapeutique pour la peau sensible",
    dietaryInfo: "NPN: 80096912",
    productUrl: "https://maisonjacynthe.ca/fr/formule-eczema",
    categories: ["peau", "peau_sensible"],
    scores: [
      { condition: "Eczéma", score: 9 },
      { condition: "Dermatite", score: 9 },
      { condition: "Irritation cutanée", score: 8 }
    ],
    therapeuticClaims: [
      "Soulagement symptomatique de l'eczéma",
      "Soulagement symptomatique de la dermatite",
      "Utilisé en aromathérapie",
      "Apaise les irritations cutanées"
    ],
    relationships: {
      complementaryProducts: ["formule-apaisante", "bobome"],
      contraindications: []
    },
    usage: {
      timing: "2-3 fois par jour",
      duration: "Selon les besoins",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "dermopur-acne",
    name: "Dermopur Acné",
    description: "Solution naturelle pour le traitement de l'acné et des furoncles",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement des symptômes de l'acné et amélioration de l'état de la peau",
    recommendationReason: "Solution aromathérapeutique pour les peaux à tendance acnéique",
    dietaryInfo: "NPN: 80096927, 80114704",
    productUrl: "https://maisonjacynthe.ca/fr/dermopur-acne",
    categories: ["peau", "peau_sensible"],
    scores: [
      { condition: "Acné", score: 9 },
      { condition: "Furoncles", score: 8 },
      { condition: "Imperfections cutanées", score: 8 }
    ],
    therapeuticClaims: [
      "Soulagement symptomatique de l'acné",
      "Soulagement symptomatique des furoncles",
      "Utilisé en aromathérapie",
      "Aide à purifier la peau"
    ],
    relationships: {
      complementaryProducts: ["gel-sebo", "formule-apaisante"],
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
