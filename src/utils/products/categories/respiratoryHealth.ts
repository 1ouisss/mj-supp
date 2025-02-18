
import { ProductDefinition } from '../productTypes';

export const RESPIRATORY_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "formule-respiratoire",
    name: "Formule Respiratoire",
    description: "Solution aromathérapeutique pour le soulagement respiratoire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement des symptômes du rhume et de la toux",
    recommendationReason: "Aide naturelle pour les problèmes respiratoires",
    dietaryInfo: "NPN : 80095323",
    productUrl: "https://maisonjacynthe.ca/fr/formule-respiratoire",
    categories: ["voies_respiratoires", "immunité"],
    scores: [
      { condition: "Rhume", score: 5 },
      { condition: "Toux", score: 5 }
    ],
    therapeuticClaims: [
      "Utilisé en aromathérapie pour aider à soulager le rhume et la toux"
    ],
    relationships: {
      complementaryProducts: ["vitamine-c", "zinc"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage ponctuel",
      seasonality: ["automne", "hiver"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "respire-bien-vapo",
    name: "Respire Bien Vapo",
    description: "Vapeurs apaisantes pour le soulagement respiratoire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement temporaire de la congestion nasale et de la toux",
    recommendationReason: "Solution naturelle pour la congestion nasale",
    dietaryInfo: "NPN : 80103169, 80103170",
    productUrl: "https://maisonjacynthe.ca/fr/respire-bien-vapo",
    categories: ["voies_respiratoires", "immunité"],
    scores: [
      { condition: "Congestion nasale", score: 5 },
      { condition: "Toux", score: 4 }
    ],
    therapeuticClaims: [
      "Fournit des vapeurs apaisantes qui aident à soulager temporairement la congestion nasale mineure",
      "Aide à soulager la toux associée au rhume commun"
    ],
    relationships: {
      complementaryProducts: ["vitamine-c", "zinc", "miel-protecteur"],
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
