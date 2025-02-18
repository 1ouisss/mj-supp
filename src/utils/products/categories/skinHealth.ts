
import { ProductDefinition } from "../productTypes";

export const SKIN_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "formule-eczema",
    name: "Formule Eczéma",
    description: "Solution naturelle pour l'eczéma et la dermatite",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement des symptômes de l'eczéma",
    recommendationReason: "Solution naturelle pour la peau sensible",
    dietaryInfo: "NPN: 80096912",
    productUrl: "https://maisonjacynthe.ca/fr/formule-eczema",
    categories: ["peau", "peau_sensible"],
    scores: [
      { condition: "Eczéma", score: 9 },
      { condition: "Dermatite", score: 9 }
    ],
    therapeuticClaims: [
      "Soulagement symptomatique de l'eczéma",
      "Soulagement de la dermatite"
    ],
    relationships: {
      complementaryProducts: ["formuleApaisante"],
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
    id: "baume-apaisant",
    name: "Baume Apaisant et Protecteur",
    description: "Formule douce pour enfants avec eczéma",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement des symptômes de l'eczéma chez l'enfant",
    recommendationReason: "Solution naturelle adaptée aux enfants",
    dietaryInfo: "NPN: 80104780",
    productUrl: "https://maisonjacynthe.ca/fr/baume-apaisant",
    categories: ["peau", "peau_sensible", "enfants"],
    scores: [
      { condition: "Eczéma enfant", score: 9 },
      { condition: "Peau sensible", score: 8 }
    ],
    therapeuticClaims: [
      "Soulagement symptomatique de l'eczéma",
      "Adapté à la peau sensible des enfants"
    ],
    relationships: {
      complementaryProducts: ["formuleApaisante"],
      contraindications: []
    },
    usage: {
      timing: "2-3 fois par jour",
      duration: "Selon les besoins",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  }
];
