
import { ProductDefinition } from "../productTypes";

export const IMMUNITY_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "immunitaire",
    name: "Immunitaire",
    description: "Formule botanique traditionnelle pour le soutien du système immunitaire",
    imageUrl: "/lovable-uploads/594a340a-cc3c-4504-92df-cc5a54d7482a.png",
    expectedResults: "Maintien d'un système immunitaire sain et soutien pendant les périodes de rhume et grippe",
    recommendationReason: "Formule botanique utilisée en phytothérapie pour maintenir un système immunitaire sain",
    dietaryInfo: "Format : 150 ml, NPN : 80105353",
    productUrl: "https://maisonjacynthe.ca/fr/immunitaire",
    categories: ["immunité", "santé_générale"],
    scores: [
      { condition: "Système immunitaire affaibli", score: 5 },
      { condition: "Rhumes", score: 4 }
    ],
    therapeuticClaims: [
      "Utilisé en phytothérapie pour aider à maintenir un système immunitaire sain",
      "Aide à soulager les symptômes du rhume et de la grippe",
      "Soutient la santé du système immunitaire"
    ],
    relationships: {
      complementaryProducts: ["vitamine-d", "zinc", "vitamine-c"],
      contraindications: []
    },
    usage: {
      timing: "1-3 fois par jour",
      duration: "Usage régulier ou selon les besoins",
      seasonality: ["automne", "hiver"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "vitamine-d",
    name: "Vitamine D & K",
    description: "Formule synergique de vitamines D3 et K2 pour une absorption optimale du calcium",
    imageUrl: "/lovable-uploads/0def73d4-861c-4e96-8a86-247966b03669.png",
    expectedResults: "Développement et maintien des os et des dents, soutien du système immunitaire",
    recommendationReason: "Aide au développement des os et des dents et soutient les fonctions immunitaires",
    dietaryInfo: "NPN : 80110681",
    productUrl: "https://maisonjacynthe.ca/fr/vitamine-d-k",
    categories: ["immunité", "santé_osseuse"],
    scores: [
      { condition: "Système immunitaire affaibli", score: 5 },
      { condition: "Santé osseuse", score: 5 }
    ],
    therapeuticClaims: [
      "Aide au développement et au maintien des os et des dents",
      "Aide à maintenir les fonctions immunitaires",
      "Aide à l'absorption du calcium et du phosphore"
    ],
    relationships: {
      complementaryProducts: ["calcium", "magnesium"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien avec un repas",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "vitamine-c",
    name: "Vitamine C",
    description: "Formule de vitamine C hautement absorbable pour le soutien immunitaire",
    imageUrl: "/lovable-uploads/78ea4d44-88c3-454d-ada8-ed8e148f7e99.png",
    expectedResults: "Soutien du système immunitaire et protection antioxydante",
    recommendationReason: "Aide à maintenir les fonctions du système immunitaire et source d'antioxydants",
    dietaryInfo: "NPN : 80097181",
    productUrl: "https://maisonjacynthe.ca/fr/vitamine-c-a-croquer",
    categories: ["immunité", "antioxydant"],
    scores: [
      { condition: "Système immunitaire affaibli", score: 5 },
      { condition: "Protection cellulaire", score: 4 }
    ],
    therapeuticClaims: [
      "Aide à maintenir les fonctions du système immunitaire",
      "Source d'antioxydants pour le maintien d'une bonne santé",
      "Aide au développement et au maintien des os, du cartilage, des dents et des gencives",
      "Favorise la cicatrisation des blessures et la formation de collagène"
    ],
    relationships: {
      complementaryProducts: ["zinc", "vitamine-d"],
      contraindications: []
    },
    usage: {
      timing: "1-2 fois par jour",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];

