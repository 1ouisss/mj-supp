import { ProductDefinition } from "../productTypes";

export const IMMUNITY_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "immunitaire",
    name: "Immunitaire",
    description: "Teinture mère botanique pour soutenir le système immunitaire et soulager les symptômes des infections respiratoires.",
    imageUrl: "/lovable-uploads/594a340a-cc3c-4504-92df-cc5a54d7482a.png",
    expectedResults: "Renforcement du système immunitaire et réduction des symptômes d'infections",
    recommendationReason: "Formule traditionnelle pour renforcer l'immunité",
    dietaryInfo: "Format : 150 ml, NPN : 80105353",
    productUrl: "https://maisonjacynthe.ca/fr/immunitaire",
    categories: ["immunité", "santé_générale", "gorge"],
    scores: [
      { condition: "Immunité", score: 5 },
      { condition: "Rhumes", score: 4 },
      { condition: "Gorge", score: 4 }
    ],
    therapeuticClaims: [
      "Soutient le système immunitaire",
      "Réduit les symptômes d'infections respiratoires",
      "Action anti-inflammatoire naturelle"
    ],
    relationships: {
      complementaryProducts: ["vitamine-d", "zinc"],
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
    description: "Combinaison synergique de vitamines D3 et K2 pour une absorption optimale",
    imageUrl: "/lovable-uploads/d5909b03-6e45-4800-9745-c277e084faf9.png",
    expectedResults: "Renforcement immunitaire et santé osseuse",
    recommendationReason: "Support essentiel pour l'immunité et la santé osseuse",
    dietaryInfo: "Sans gluten, végétarien",
    productUrl: "https://maisonjacynthe.ca/fr/vitamine-d-k",
    categories: ["immunité", "santé_osseuse"],
    scores: [
      { condition: "Immunité", score: 5 },
      { condition: "Santé osseuse", score: 4 }
    ],
    therapeuticClaims: [
      "Renforce le système immunitaire",
      "Favorise l'absorption du calcium",
      "Soutient la santé osseuse"
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
    description: "Formule de vitamine C hautement absorbable avec bioflavonoïdes",
    imageUrl: "/lovable-uploads/cf2a70e5-72c3-43e4-b261-cd5d17373860.png",
    expectedResults: "Renforcement immunitaire et protection antioxydante",
    recommendationReason: "Support antioxydant essentiel",
    dietaryInfo: "Vegan, sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/vitamine-c",
    categories: ["immunité", "antioxydant"],
    scores: [
      { condition: "Immunité", score: 5 },
      { condition: "Protection cellulaire", score: 4 }
    ],
    therapeuticClaims: [
      "Renforce le système immunitaire",
      "Protection antioxydante",
      "Soutient la production de collagène"
    ],
    relationships: {
      complementaryProducts: ["zinc", "quercetin"],
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