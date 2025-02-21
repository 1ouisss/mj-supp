
import { ProductDefinition } from "../productTypes";

export const RESPIRATORY_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "formule-respiratoire",
    name: "Formule Respiratoire",
    description: "Solution naturelle pour soulager les symptômes du rhume et de la toux",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement des symptômes respiratoires et confort respiratoire",
    recommendationReason: "Solution naturelle pour les voies respiratoires",
    dietaryInfo: "NPN: 80095323",
    productUrl: "https://maisonjacynthe.ca/fr/formule-respiratoire",
    categories: ["respiratoire", "voies_respiratoires"],
    scores: [
      { condition: "Rhume", score: 9 },
      { condition: "Toux", score: 9 },
      { condition: "Congestion", score: 8 }
    ],
    therapeuticClaims: [
      "Aide à soulager le rhume",
      "Aide à soulager la toux",
      "Utilisé en aromathérapie",
      "Soulagement des symptômes respiratoires"
    ],
    relationships: {
      complementaryProducts: ["respire-bien-vapo", "defense-topic"],
      contraindications: []
    },
    usage: {
      timing: "3-4 fois par jour",
      duration: "Pendant la durée des symptômes",
      seasonality: ["automne", "hiver"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "respire-bien-vapo",
    name: "Respire Bien Vapo",
    description: "Vapeurs apaisantes pour soulager la congestion nasale et la toux",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement temporaire de la congestion nasale et de la toux",
    recommendationReason: "Solution naturelle pour la respiration",
    dietaryInfo: "NPN: 80103169, 80103170",
    productUrl: "https://maisonjacynthe.ca/fr/respire-bien-vapo",
    categories: ["respiratoire", "voies_respiratoires"],
    scores: [
      { condition: "Congestion nasale", score: 9 },
      { condition: "Toux", score: 8 },
      { condition: "Rhume", score: 8 }
    ],
    therapeuticClaims: [
      "Fournit des vapeurs apaisantes",
      "Soulage temporairement la congestion nasale",
      "Aide à soulager la toux associée au rhume commun"
    ],
    relationships: {
      complementaryProducts: ["formule-respiratoire", "defense-topic"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Pendant la durée des symptômes",
      seasonality: ["automne", "hiver"]
    },
    timeFrame: "court_terme"
  }
];
