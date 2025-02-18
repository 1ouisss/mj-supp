
import { ProductDefinition } from "../productTypes";

export const SPECIALIZED_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "gel-antiseptique",
    name: "Gel Antiseptique",
    description: "Nettoyant antiseptique pour les mains",
    imageUrl: "/placeholder.svg",
    expectedResults: "Nettoyage antiseptique efficace des mains",
    recommendationReason: "Efficace pour détruire les bactéries nocives et prévenir leur propagation",
    dietaryInfo: "NPN : 80097884, 80097881, 80097878, 80098596",
    productUrl: "https://maisonjacynthe.ca/fr/gel-antiseptique",
    categories: ["peau", "santé_générale"],
    scores: [
      { condition: "Hygiène des mains", score: 5 }
    ],
    therapeuticClaims: [
      "Efficace pour détruire les bactéries nocives afin de procurer un nettoyage antiseptique",
      "Nettoyant antibactérien pour la peau",
      "Nettoyant antiseptique pour la peau",
      "Pour l'hygiène personnelle des mains afin de prévenir la propagation de bactéries",
      "Tue des bactéries et microbes nocifs"
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
    id: "formule-eczema",
    name: "Formule Eczéma",
    description: "Formule en aromathérapie pour le soulagement de l'eczéma",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement symptomatique de l'eczéma et de la dermatite",
    recommendationReason: "Soulagement des symptômes de l'eczéma par aromathérapie",
    dietaryInfo: "NPN : 80096912",
    productUrl: "https://maisonjacynthe.ca/fr/formule-eczema",
    categories: ["peau", "topique"],
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
      timing: "Selon les besoins",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "dermopur-acne",
    name: "Dermopur Acné",
    description: "Solution aromathérapeutique pour l'acné",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement symptomatique de l'acné et des furoncles",
    recommendationReason: "Traitement naturel pour les problèmes d'acné",
    dietaryInfo: "NPN : 80096927, 80114704",
    productUrl: "https://maisonjacynthe.ca/fr/dermopur-acne",
    categories: ["peau", "topique"],
    scores: [
      { condition: "Acné", score: 5 },
      { condition: "Furoncles", score: 4 }
    ],
    therapeuticClaims: [
      "Utilisé en aromathérapie pour le soulagement symptomatique de l'acné/des furoncles"
    ],
    relationships: {
      complementaryProducts: ["zinc", "omega-3", "extrait-the-vert"],
      contraindications: []
    },
    usage: {
      timing: "Application locale selon les besoins",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  }
];
