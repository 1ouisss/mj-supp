
import { ProductDefinition } from "../productTypes";

export const RESPIRATORY_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "formule-respiratoire",
    name: "Formule respiratoire",
    description: "Solution aromathérapeutique pour le soulagement du rhume et de la toux",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement des symptômes du rhume et de la toux",
    recommendationReason: "Aide naturelle pour les symptômes respiratoires",
    dietaryInfo: "NPN : 80095323",
    productUrl: "https://maisonjacynthe.ca/fr/formule-respiratoire",
    categories: ["respiratoire", "voies_respiratoires"],
    scores: [
      { condition: "Rhume", score: 5 },
      { condition: "Toux", score: 5 }
    ],
    therapeuticClaims: [
      "Utilisé en aromathérapie pour aider à soulager le rhume et la toux"
    ],
    relationships: {
      complementaryProducts: ["defense-topic", "miel-apaisant"],
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
    description: "Solution apaisante pour la congestion nasale et la toux",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement temporaire de la congestion nasale et de la toux",
    recommendationReason: "Solution naturelle pour la respiration",
    dietaryInfo: "NPN : 80103169",
    productUrl: "https://maisonjacynthe.ca/fr/respire-bien-vapo",
    categories: ["respiratoire", "voies_respiratoires"],
    scores: [
      { condition: "Congestion nasale", score: 5 },
      { condition: "Toux rhume", score: 4 }
    ],
    therapeuticClaims: [
      "Fournit des vapeurs apaisantes qui aident à soulager temporairement la congestion nasale mineure",
      "Aide à soulager la toux associée au rhume commun"
    ],
    relationships: {
      complementaryProducts: ["formule-respiratoire", "defense-topic"],
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
    id: "miel-apaisant",
    name: "Miel apaisant",
    description: "Adoucissant oral naturel pour le soulagement de la gorge",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement temporaire des maux de gorge et de la toux",
    recommendationReason: "Solution naturelle et apaisante",
    dietaryInfo: "NPN : 80108553",
    productUrl: "https://maisonjacynthe.ca/fr/miel-apaisant",
    categories: ["gorge", "respiratoire"],
    scores: [
      { condition: "Mal de gorge", score: 5 },
      { condition: "Toux", score: 4 }
    ],
    therapeuticClaims: [
      "Adoucissant oral pour apaiser les maux de gorge et la toux",
      "Aide à soulager temporairement les symptômes du mal de gorge"
    ],
    relationships: {
      complementaryProducts: ["defense-topic", "formule-respiratoire"],
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
