
import { ProductDefinition } from "../productTypes";

export const GENERAL_WELLNESS_PRODUCTS: ProductDefinition[] = [
  {
    id: "vitamine-c",
    name: "Vitamine C",
    description: "Support essentiel pour le système immunitaire et la santé générale",
    imageUrl: "/placeholder.svg",
    expectedResults: "Renforcement du système immunitaire et soutien antioxydant",
    recommendationReason: "Vitamine essentielle pour la santé globale",
    dietaryInfo: "NPN: 80097181",
    productUrl: "https://maisonjacynthe.ca/fr/vitamine-c",
    categories: ["santé_générale", "immunité", "antioxydant"],
    scores: [
      { condition: "Système immunitaire", score: 9 },
      { condition: "Antioxydant", score: 9 },
      { condition: "Santé des os", score: 8 }
    ],
    therapeuticClaims: [
      "Aide à prévenir une carence en vitamine C",
      "Maintient les capacités du corps à métaboliser les nutriments",
      "Soutient le développement des os et du cartilage",
      "Favorise la cicatrisation des blessures"
    ],
    relationships: {
      complementaryProducts: ["zinc", "vitamineDK"],
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
    id: "zinc-cuivre",
    name: "Zinc & Cuivre",
    description: "Minéraux essentiels pour la santé globale",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soutien du système immunitaire et de la santé de la peau",
    recommendationReason: "Minéraux essentiels pour de nombreuses fonctions corporelles",
    dietaryInfo: "NPN: 80113523",
    productUrl: "https://maisonjacynthe.ca/fr/zinc-cuivre",
    categories: ["santé_générale", "immunité", "peau", "minéraux"],
    scores: [
      { condition: "Système immunitaire", score: 9 },
      { condition: "Santé de la peau", score: 8 },
      { condition: "Métabolisme", score: 8 }
    ],
    therapeuticClaims: [
      "Maintien d'une peau saine",
      "Soutien du métabolisme énergétique",
      "Formation des tissus",
      "Soutien des fonctions immunitaires"
    ],
    relationships: {
      complementaryProducts: ["vitaminec", "mineraldrop"],
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
    id: "vitamine-dk",
    name: "Vitamine D & K",
    description: "Duo essentiel pour la santé osseuse et immunitaire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Support optimal pour la santé des os et le système immunitaire",
    recommendationReason: "Combinaison synergique pour la santé osseuse",
    dietaryInfo: "NPN: 80110681",
    productUrl: "https://maisonjacynthe.ca/fr/vitamine-d-k",
    categories: ["santé_générale", "santé_osseuse", "immunité"],
    scores: [
      { condition: "Santé osseuse", score: 9 },
      { condition: "Système immunitaire", score: 8 },
      { condition: "Absorption du calcium", score: 9 }
    ],
    therapeuticClaims: [
      "Développement et maintien des os et des dents",
      "Soutien des fonctions immunitaires",
      "Aide à l'absorption du calcium",
      "Maintien d'une bonne santé"
    ],
    relationships: {
      complementaryProducts: ["calcium", "magnesium"],
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
    id: "magnesium",
    name: "Magnésium",
    description: "Minéral essentiel pour de nombreuses fonctions corporelles",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soutien du système nerveux et de la fonction musculaire",
    recommendationReason: "Minéral clé pour la santé globale",
    dietaryInfo: "NPN: 80095762",
    productUrl: "https://maisonjacynthe.ca/fr/magnesium",
    categories: ["santé_générale", "minéraux", "stress"],
    scores: [
      { condition: "Fonction musculaire", score: 9 },
      { condition: "Stress", score: 9 },
      { condition: "Santé osseuse", score: 8 }
    ],
    therapeuticClaims: [
      "Bon fonctionnement des muscles",
      "Développement et maintien des os",
      "Formation des globules rouges",
      "Réduction des symptômes prémenstruels"
    ],
    relationships: {
      complementaryProducts: ["vitamineDK", "calcium"],
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
