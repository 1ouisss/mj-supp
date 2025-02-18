
import { ProductDefinition } from "../productTypes";

export const ANTISEPTIC_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "gel-antiseptique-1",
    name: "Gel Antiseptique",
    description: "Gel nettoyant antiseptique pour les mains",
    imageUrl: "/placeholder.svg",
    expectedResults: "Nettoyage antiseptique efficace des mains",
    recommendationReason: "Protection contre les bactéries nocives",
    dietaryInfo: "NPN: 80097884",
    productUrl: "https://maisonjacynthe.ca/fr/gel-antiseptique",
    categories: ["antiseptique", "défense"],
    scores: [
      { condition: "Hygiène des mains", score: 9 },
      { condition: "Protection antibactérienne", score: 9 }
    ],
    therapeuticClaims: [
      "Efficace pour détruire les bactéries nocives",
      "Nettoyant antibactérien pour la peau",
      "Prévient la propagation de bactéries"
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
    id: "l-antiseptique",
    name: "L'Antiseptique",
    description: "Solution antiseptique naturelle",
    imageUrl: "/placeholder.svg",
    expectedResults: "Protection antibactérienne efficace",
    recommendationReason: "Nettoyage antiseptique naturel",
    dietaryInfo: "NPN: 80106684",
    productUrl: "https://maisonjacynthe.ca/fr/antiseptique",
    categories: ["antiseptique", "défense"],
    scores: [
      { condition: "Désinfection", score: 9 },
      { condition: "Protection cutanée", score: 8 }
    ],
    therapeuticClaims: [
      "Efficace pour détruire des bactéries nocives",
      "Nettoyant antibactérien pour la peau",
      "Pour l'hygiène personnelle des mains"
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
    id: "formule-respiratoire",
    name: "Formule Respiratoire",
    description: "Solution aromatique pour le soutien respiratoire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement des symptômes respiratoires",
    recommendationReason: "Support naturel pour les voies respiratoires",
    dietaryInfo: "NPN: 80095323",
    productUrl: "https://maisonjacynthe.ca/fr/formule-respiratoire",
    categories: ["respiratoire", "voies_respiratoires"],
    scores: [
      { condition: "Rhume", score: 8 },
      { condition: "Toux", score: 8 }
    ],
    therapeuticClaims: [
      "Utilisé en aromathérapie pour aider à soulager le rhume",
      "Aide à soulager la toux"
    ],
    relationships: {
      complementaryProducts: ["respireBien", "defenseInhalation"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage ponctuel",
      seasonality: ["automne", "hiver"]
    },
    timeFrame: "court_terme"
  }
];
