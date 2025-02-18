
import { ProductDefinition } from "../productTypes";

export const ESSENTIAL_FATTY_ACIDS_PRODUCTS: ProductDefinition[] = [
  {
    id: "omega-3",
    name: "Oméga-3",
    description: "Huile de poisson pure et concentrée en EPA et DHA",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soutien de la santé cardiovasculaire et cognitive",
    recommendationReason: "Acides gras essentiels pour la santé globale",
    dietaryInfo: "NPN : 80115693",
    productUrl: "https://maisonjacynthe.ca/fr/omega-3",
    categories: ["santé_cardiaque", "cerveau", "articulations", "santé_générale"],
    scores: [
      { condition: "Santé cardiovasculaire", score: 5 },
      { condition: "Santé cognitive", score: 4 },
      { condition: "Inflammation", score: 4 }
    ],
    therapeuticClaims: [
      "Soutient la santé cardiovasculaire",
      "Aide au développement et au fonctionnement du cerveau",
      "Aide à réduire l'inflammation",
      "Soutient la santé des articulations"
    ],
    relationships: {
      complementaryProducts: ["vitamine-d-et-k", "curcuma"],
      contraindications: []
    },
    usage: {
      timing: "Avec un repas",
      duration: "Usage quotidien",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "huile-lin",
    name: "Huile de Lin",
    description: "Source végétale d'oméga-3 ALA",
    imageUrl: "/placeholder.svg",
    expectedResults: "Support de la santé cardiovasculaire et digestive",
    recommendationReason: "Alternative végétale aux oméga-3 marins",
    dietaryInfo: "Convient aux végétariens",
    productUrl: "https://maisonjacynthe.ca/fr/huile-de-lin",
    categories: ["santé_cardiaque", "digestif", "santé_générale"],
    scores: [
      { condition: "Santé cardiovasculaire", score: 4 },
      { condition: "Santé digestive", score: 4 }
    ],
    therapeuticClaims: [
      "Source d'acides gras oméga-3 d'origine végétale",
      "Soutient la santé cardiovasculaire",
      "Aide au maintien d'une bonne santé"
    ],
    relationships: {
      complementaryProducts: ["probiotiques", "vitamine-d-et-k"],
      contraindications: []
    },
    usage: {
      timing: "Avec un repas",
      duration: "Usage quotidien",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
