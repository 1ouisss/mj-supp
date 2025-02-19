
import { ProductDefinition } from "../productTypes";

export const IMMUNITY_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "immunitaire",
    name: "Immunitaire",
    description: "Formule botanique traditionnelle pour le soutien du système immunitaire",
    imageUrl: "/lovable-uploads/594a340a-cc3c-4504-92df-cc5a54d7482a.png",
    expectedResults: "Renforcement du système immunitaire",
    recommendationReason: "Support immunitaire naturel",
    dietaryInfo: "NPN: 80105353",
    productUrl: "https://maisonjacynthe.ca/fr/immunitaire",
    categories: ["immunité", "défense"],
    scores: [
      { condition: "Système immunitaire", score: 9 },
      { condition: "Défenses naturelles", score: 8 }
    ],
    therapeuticClaims: [
      "Aide à maintenir un système immunitaire sain",
      "Soulage les symptômes du rhume",
      "Soutient la santé du système immunitaire",
      "Source d'antioxydants pour le maintien d'une bonne santé"
    ],
    relationships: {
      complementaryProducts: ["vitamine-d", "vitamine-c"],
      contraindications: []
    },
    usage: {
      timing: "1-3 fois par jour",
      duration: "Usage régulier ou selon besoins",
      seasonality: ["automne", "hiver"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "vitamine-c",
    name: "Vitamine C",
    description: "Vitamine C hautement absorbable pour le soutien immunitaire",
    imageUrl: "/lovable-uploads/78ea4d44-88c3-454d-ada8-ed8e148f7e99.png",
    expectedResults: "Renforcement du système immunitaire",
    recommendationReason: "Support antioxydant essentiel",
    dietaryInfo: "NPN: 80097181",
    productUrl: "https://maisonjacynthe.ca/fr/vitamine-c-a-croquer",
    categories: ["immunité", "antioxydant"],
    scores: [
      { condition: "Immunité", score: 9 },
      { condition: "Antioxydant", score: 8 }
    ],
    therapeuticClaims: [
      "Aide à maintenir les fonctions du système immunitaire",
      "Source d'antioxydants",
      "Aide au développement et au maintien des os et du cartilage",
      "Favorise la cicatrisation",
      "Aide à la formation de collagène"
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
