
import { ProductDefinition } from "../productTypes";

export const RESPIRATORY_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "formule-respiratoire",
    name: "Formule respiratoire",
    description: "Aide à soulager le rhume et la toux en aromathérapie",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement des symptômes du rhume et de la toux",
    recommendationReason: "Solution naturelle pour les problèmes respiratoires",
    dietaryInfo: "NPN: 80095323",
    productUrl: "https://maisonjacynthe.ca/fr/formule-respiratoire",
    categories: ["respiratoire", "voies_respiratoires", "saisonnier"],
    scores: [
      { condition: "Rhume", score: 9 },
      { condition: "Toux", score: 9 }
    ],
    therapeuticClaims: [
      "Aide à soulager le rhume",
      "Aide à soulager la toux",
      "Solution aromathérapeutique naturelle"
    ],
    relationships: {
      complementaryProducts: ["defenseTopique", "mielProtecteur"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Pendant les symptômes",
      seasonality: ["hiver", "automne"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "respire-bien-vapo",
    name: "Respire Bien Vapo",
    description: "Fournit des vapeurs apaisantes pour soulager la congestion nasale",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement temporaire de la congestion nasale",
    recommendationReason: "Solution naturelle pour la respiration",
    dietaryInfo: "NPN: 80103169",
    productUrl: "https://maisonjacynthe.ca/fr/respire-bien-vapo",
    categories: ["respiratoire", "voies_respiratoires", "saisonnier"],
    scores: [
      { condition: "Congestion nasale", score: 9 },
      { condition: "Toux", score: 8 }
    ],
    therapeuticClaims: [
      "Soulage temporairement la congestion nasale",
      "Aide à soulager la toux associée au rhume",
      "Vapeurs apaisantes naturelles"
    ],
    relationships: {
      complementaryProducts: ["formuleRespiratoire", "defenseTopic"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Pendant les symptômes",
      seasonality: ["hiver", "automne"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "defense-topic",
    name: "Défense Topic",
    description: "Solution aromathérapeutique pour soulager le rhume et la toux",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement des symptômes du rhume",
    recommendationReason: "Protection naturelle contre les symptômes du rhume",
    dietaryInfo: "NPN: 80103255",
    productUrl: "https://maisonjacynthe.ca/fr/defense-topic",
    categories: ["défense", "respiratoire", "voies_respiratoires"],
    scores: [
      { condition: "Rhume", score: 9 },
      { condition: "Toux", score: 8 }
    ],
    therapeuticClaims: [
      "Aide à soulager le rhume",
      "Aide à soulager la toux",
      "Solution aromathérapeutique"
    ],
    relationships: {
      complementaryProducts: ["respireBien", "mielProtecteur"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Pendant les symptômes",
      seasonality: ["hiver", "automne"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "defense-inhalation",
    name: "Défense Inhalation",
    description: "Solution d'inhalation pour soulager le rhume et la toux",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement des voies respiratoires",
    recommendationReason: "Inhalation thérapeutique naturelle",
    dietaryInfo: "NPN: 80104490",
    productUrl: "https://maisonjacynthe.ca/fr/defense-inhalation",
    categories: ["défense", "respiratoire", "voies_respiratoires"],
    scores: [
      { condition: "Rhume", score: 9 },
      { condition: "Toux", score: 9 }
    ],
    therapeuticClaims: [
      "Aide à soulager le rhume",
      "Aide à soulager la toux",
      "Solution d'inhalation naturelle"
    ],
    relationships: {
      complementaryProducts: ["defenseTopic", "respireBien"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Pendant les symptômes",
      seasonality: ["hiver", "automne"]
    },
    timeFrame: "court_terme"
  }
];
