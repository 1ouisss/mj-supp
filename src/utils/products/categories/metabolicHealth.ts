import { ProductDefinition } from '../productTypes';

export const METABOLIC_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "metabzen",
    name: "Metabzen",
    description: "Support naturel pour le métabolisme",
    imageUrl: "/lovable-uploads/4ccea2a6-43df-472a-8f3c-848d654e081f.png",
    expectedResults: "Meilleur équilibre métabolique",
    recommendationReason: "Support naturel pour le métabolisme",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/metabzen",
    categories: ["metabolism", "general_health"],
    scores: [
      { condition: "Équilibre métabolique", score: 5 },
      { condition: "Énergie", score: 4 }
    ],
    therapeuticClaims: [
      "Soutient le métabolisme",
      "Aide à l'équilibre pondéral",
      "Favorise la vitalité"
    ],
    relationships: {
      complementaryProducts: ["gluconig"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  },
  {
    id: "gluconig",
    name: "Gluconig",
    description: "Support pour la régulation glycémique",
    imageUrl: "/lovable-uploads/4ccea2a6-43df-472a-8f3c-848d654e081f.png",
    expectedResults: "Meilleur équilibre glycémique",
    recommendationReason: "Support naturel pour la glycémie",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/gluconig",
    categories: ["metabolism", "general_health"],
    scores: [
      { condition: "Équilibre glycémique", score: 5 },
      { condition: "Énergie", score: 4 }
    ],
    therapeuticClaims: [
      "Aide à la régulation de la glycémie",
      "Soutient le métabolisme",
      "Favorise l'équilibre énergétique"
    ],
    relationships: {
      complementaryProducts: ["metabzen"],
      contraindications: []
    },
    usage: {
      timing: "Avec les repas",
      duration: "Usage régulier",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  }
];