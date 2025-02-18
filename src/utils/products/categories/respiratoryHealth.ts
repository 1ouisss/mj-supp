
import { ProductDefinition } from "../productTypes";

export const RESPIRATORY_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "respira-plus",
    name: "Respira Plus",
    description: "Complexe naturel pour le soutien respiratoire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Respiration facilitée et voies respiratoires dégagées",
    recommendationReason: "Soutien optimal des voies respiratoires",
    dietaryInfo: "Sans allergènes majeurs",
    productUrl: "https://maisonjacynthe.ca/fr/respira-plus",
    categories: ["respiratoire", "voies_respiratoires", "saisonnier"],
    scores: [
      { condition: "Congestion", score: 5 },
      { condition: "Respiration", score: 4 }
    ],
    therapeuticClaims: [
      "Aide à dégager les voies respiratoires",
      "Soutient la fonction respiratoire",
      "Apaise les irritations saisonnières"
    ],
    relationships: {
      complementaryProducts: ["huile-eucalyptus", "zinc-plus"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier ou saisonnier",
      seasonality: ["hiver", "printemps"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "huile-eucalyptus",
    name: "Huile d'Eucalyptus",
    description: "Huile essentielle pour le bien-être respiratoire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Voies respiratoires dégagées et sensation de fraîcheur",
    recommendationReason: "Solution naturelle pour la respiration",
    dietaryInfo: "Usage externe ou en diffusion",
    productUrl: "https://maisonjacynthe.ca/fr/huile-eucalyptus",
    categories: ["respiratoire", "voies_respiratoires", "essentiel"],
    scores: [
      { condition: "Congestion", score: 5 },
      { condition: "Bien-être respiratoire", score: 4 }
    ],
    therapeuticClaims: [
      "Aide à dégager les voies respiratoires",
      "Procure une sensation de fraîcheur",
      "Favorise une respiration facile"
    ],
    relationships: {
      complementaryProducts: ["respira-plus"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage ponctuel",
      seasonality: ["hiver", "printemps"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "poumon-vital",
    name: "Poumon Vital",
    description: "Formule complète pour la santé pulmonaire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soutien de la fonction pulmonaire et respiratoire",
    recommendationReason: "Support complet pour la santé respiratoire",
    dietaryInfo: "Sans gluten, végétarien",
    productUrl: "https://maisonjacynthe.ca/fr/poumon-vital",
    categories: ["respiratoire", "voies_respiratoires", "long_terme"],
    scores: [
      { condition: "Santé pulmonaire", score: 5 },
      { condition: "Respiration", score: 4 }
    ],
    therapeuticClaims: [
      "Soutient la santé pulmonaire",
      "Renforce le système respiratoire",
      "Favorise une respiration optimale"
    ],
    relationships: {
      complementaryProducts: ["respira-plus", "vitamine-d-et-k"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
