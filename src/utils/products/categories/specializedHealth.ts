
import { ProductDefinition } from "../productTypes";

export const SPECIALIZED_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "formule-eczema-enfant",
    name: "Baume apaisant et protecteur (Formule eczéma Enfant)",
    description: "Solution naturelle pour le soulagement de l'eczéma chez les enfants",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement symptomatique de l'eczéma et de la dermatite",
    recommendationReason: "Formule spécialement conçue pour la peau sensible des enfants",
    dietaryInfo: "NPN : 80104780",
    productUrl: "https://maisonjacynthe.ca/fr/formule-eczema-enfant",
    categories: ["peau", "enfants", "peau_sensible"],
    scores: [
      { condition: "Eczéma enfant", score: 5 },
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
    id: "gel-sebo",
    name: "Gel sébo",
    description: "Solution aromathérapeutique pour l'acné et les furoncles",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement symptomatique de l'acné et des furoncles",
    recommendationReason: "Traitement naturel pour les problèmes d'acné",
    dietaryInfo: "NPN : 80096913",
    productUrl: "https://maisonjacynthe.ca/fr/gel-sebo",
    categories: ["peau", "topique"],
    scores: [
      { condition: "Acné", score: 5 },
      { condition: "Furoncles", score: 4 }
    ],
    therapeuticClaims: [
      "Utilisé en aromathérapie pour le soulagement symptomatique de l'acné/des furoncles"
    ],
    relationships: {
      complementaryProducts: ["zinc", "omega-3"],
      contraindications: []
    },
    usage: {
      timing: "Application locale selon les besoins",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "defense-topic",
    name: "Défense Topic",
    description: "Solution aromathérapeutique pour le soulagement du rhume et de la toux",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement des symptômes du rhume et de la toux",
    recommendationReason: "Aide naturelle pour les symptômes du rhume",
    dietaryInfo: "NPN : 80103255",
    productUrl: "https://maisonjacynthe.ca/fr/defense-topic",
    categories: ["défense", "voies_respiratoires", "immunité"],
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
  }
];
