
import { ProductDefinition } from "../productTypes";

export const VITAMINS_AND_MINERALS_PRODUCTS: ProductDefinition[] = [
  {
    id: "vitamine-c",
    name: "Vitamine C",
    description: "Aide à maintenir la santé du système immunitaire et la formation du collagène",
    imageUrl: "/placeholder.svg",
    expectedResults: "Renforcement du système immunitaire et santé des tissus",
    recommendationReason: "Essentiel pour la santé générale et l'immunité",
    dietaryInfo: "NPN : 80097181",
    productUrl: "https://maisonjacynthe.ca/fr/vitamine-c",
    categories: ["immunité", "antioxydant", "peau", "santé_générale"],
    scores: [
      { condition: "Immunité faible", score: 5 },
      { condition: "Santé de la peau", score: 4 }
    ],
    therapeuticClaims: [
      "Aide à prévenir une carence en vitamine C",
      "Maintient les capacités du corps à métaboliser les nutriments",
      "Favorise la formation du collagène",
      "Source d'antioxydant"
    ],
    relationships: {
      complementaryProducts: ["zinc", "vitamine-d"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "zinc-et-cuivre",
    name: "Zinc & Cuivre",
    description: "L'indispensable pour la santé globale et le système immunitaire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Maintien de la santé générale et renforcement immunitaire",
    recommendationReason: "Minéraux essentiels pour de nombreuses fonctions corporelles",
    dietaryInfo: "NPN : 80113523",
    productUrl: "https://maisonjacynthe.ca/fr/zinc-cuivre",
    categories: ["minéraux", "immunité", "peau", "santé_générale"],
    scores: [
      { condition: "Déficience en minéraux", score: 5 },
      { condition: "Immunité faible", score: 4 }
    ],
    therapeuticClaims: [
      "Aide au maintien d'une peau saine",
      "Soutient les fonctions immunitaires",
      "Aide à la formation de globules rouges",
      "Maintient la santé des os, des cheveux et des ongles"
    ],
    relationships: {
      complementaryProducts: ["vitamine-c", "vitamine-d"],
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

