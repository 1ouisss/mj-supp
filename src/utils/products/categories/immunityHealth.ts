import { ProductDefinition } from '../productTypes';

export const IMMUNITY_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "defense",
    name: "Défense (poudre)",
    description: "Complexe immunitaire en poudre",
    imageUrl: "/lovable-uploads/3ea15458-3d93-4646-9b63-d15d62979bd8.png",
    expectedResults: "Renforcement du système immunitaire",
    recommendationReason: "Support immunitaire complet",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/defense-poudre",
    categories: ["immunité"],
    scores: [
      { condition: "Immunité", score: 5 },
      { condition: "Défense naturelle", score: 5 }
    ],
    therapeuticClaims: [
      "Renforce le système immunitaire",
      "Soutient les défenses naturelles"
    ],
    relationships: {
      complementaryProducts: ["vitamine-d3"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["automne", "hiver"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "defense-topic",
    name: "Défense Topic",
    description: "Solution topique pour le soutien immunitaire local",
    imageUrl: "/lovable-uploads/f838e229-bc06-428b-8e2b-755dbe62fdeb.png",
    expectedResults: "Protection et soutien immunitaire local",
    recommendationReason: "Application ciblée pour le soutien immunitaire",
    dietaryInfo: "Usage externe",
    productUrl: "https://maisonjacynthe.ca/fr/defense-topic",
    categories: ["immunité", "topique"],
    scores: [
      { condition: "Immunité locale", score: 5 },
      { condition: "Protection", score: 4 }
    ],
    therapeuticClaims: [
      "Soutien immunitaire local",
      "Protection naturelle",
      "Application ciblée"
    ],
    relationships: {
      complementaryProducts: ["defense"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage ponctuel",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "vitamine-d3",
    name: "Vitamine D3",
    description: "Supplément de vitamine D3 pour le soutien immunitaire",
    imageUrl: "/lovable-uploads/f86c8650-1b86-4b54-95dd-2dd8bc920812.png",
    expectedResults: "Renforcement du système immunitaire et santé osseuse",
    recommendationReason: "Essentiel pour l'immunité et la santé générale",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/vitamine-d3",
    categories: ["immunité", "santé_osseuse"],
    scores: [
      { condition: "Immunité", score: 5 },
      { condition: "Santé osseuse", score: 5 }
    ],
    therapeuticClaims: [
      "Soutient le système immunitaire",
      "Favorise la santé osseuse",
      "Essentiel en période hivernale"
    ],
    relationships: {
      complementaryProducts: ["defense"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["automne", "hiver"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "immunitaire",
    name: "Immunitaire",
    description: "Complexe pour le soutien immunitaire",
    imageUrl: "/lovable-uploads/98269d19-8581-482c-b290-f078e9959bb6.png",
    expectedResults: "Renforcement global du système immunitaire",
    recommendationReason: "Support immunitaire complet",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/immunitaire",
    categories: ["immunité", "santé_générale"],
    scores: [
      { condition: "Immunité", score: 5 },
      { condition: "Santé générale", score: 4 }
    ],
    therapeuticClaims: [
      "Renforce le système immunitaire",
      "Soutient la santé globale",
      "Protection naturelle"
    ],
    relationships: {
      complementaryProducts: ["vitamine-d3", "defense"],
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