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
      complementaryProducts: ["gluconig", "extrait-the-vert"],
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
      complementaryProducts: ["metabzen", "extrait-the-vert"],
      contraindications: []
    },
    usage: {
      timing: "Avec les repas",
      duration: "Usage régulier",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  },
  {
    id: "extrait-the-vert",
    name: "Extrait de Thé Vert",
    description: "Powerful antioxidant for metabolism support & cellular protection",
    imageUrl: "/lovable-uploads/421e934e-f697-4756-be20-ad290290efb3.png",
    expectedResults: "Soutien du métabolisme et protection cellulaire antioxydante",
    recommendationReason: "Extrait naturel de thé vert riche en antioxydants pour soutenir le métabolisme",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/extrait-the-vert",
    categories: ["metabolism", "energy"],
    scores: [
      { condition: "Métabolisme", score: 5 },
      { condition: "Énergie", score: 4 },
      { condition: "Antioxydants", score: 5 }
    ],
    therapeuticClaims: [
      "Supports fat metabolism",
      "Promotes cellular health",
      "Provides antioxidant protection"
    ],
    relationships: {
      complementaryProducts: ["metabzen", "gluconig"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  }
];