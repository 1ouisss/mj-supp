import { ProductDefinition } from "../productTypes";

export const VITAMIN_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "vitamine-d-k",
    name: "Vitamine D & K",
    description: "Support pour la santé osseuse et immunitaire",
    imageUrl: "/lovable-uploads/0def73d4-861c-4e96-8a86-247966b03669.png",
    expectedResults: "Renforcement des os et du système immunitaire",
    recommendationReason: "Essentiel pour la santé osseuse",
    dietaryInfo: "NPN: 80110681",
    productUrl: "https://maisonjacynthe.ca/fr/vitamine-d-k",
    categories: ["santé_osseuse", "immunité"],
    scores: [
      { condition: "Santé osseuse", score: 9 },
      { condition: "Immunité", score: 8 }
    ],
    therapeuticClaims: [
      "Aide au développement des os et des dents",
      "Soutient les fonctions immunitaires",
      "Favorise l'absorption du calcium"
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
    id: "coenzyme-q10",
    name: "Coenzyme Q10",
    description: "Support pour la santé cardiovasculaire et les migraines",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration de la santé cardiovasculaire",
    recommendationReason: "Support naturel pour les migraines",
    dietaryInfo: "NPN: 80121736",
    productUrl: "https://maisonjacynthe.ca/fr/coenzyme-q10",
    categories: ["santé_cardiaque", "migraine"],
    scores: [
      { condition: "Santé cardiovasculaire", score: 9 },
      { condition: "Migraines", score: 8 }
    ],
    therapeuticClaims: [
      "Soutient la santé cardiovasculaire",
      "Aide à réduire la fréquence des migraines",
      "Source d'antioxydants"
    ],
    relationships: {
      complementaryProducts: ["omega3"],
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
    description: "Support essentiel pour les muscles et le système nerveux",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration du fonctionnement musculaire et nerveux",
    recommendationReason: "Minéral essentiel pour plusieurs fonctions corporelles",
    dietaryInfo: "NPN: 80095762",
    productUrl: "https://maisonjacynthe.ca/fr/magnesium",
    categories: ["minéraux", "stress", "muscles", "santé_osseuse"],
    scores: [
      { condition: "Fonction musculaire", score: 9 },
      { condition: "Stress", score: 8 },
      { condition: "SPM", score: 8 }
    ],
    therapeuticClaims: [
      "Aide au bon fonctionnement des muscles, incluant le muscle du cœur",
      "Aide au développement et au maintien des os et des dents",
      "Aide à maintenir la formation de globules rouges et des tissus",
      "Aide à maintenir les capacités du corps à métaboliser les nutriments",
      "Aide à réduire les symptômes liés au syndrome prémenstruel",
      "Source d'électrolyte pour le maintien d'une bonne santé"
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
