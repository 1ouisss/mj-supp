import { ProductDefinition } from '../productTypes';

export const METABOLIC_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "metabzen",
    name: "Metabzen",
    description: "Découvrez les bienfaits de nos capsules Metabzen, une formule haut de gamme permettant d'améliorer le métabolisme des glucides et protéger les tissus contre le stress oxydatif. Utilisées traditionnellement en phytothérapie, ces capsules sont un soutien pour les fonctions hépatiques et le contrôle du taux de glucose.",
    imageUrl: "/lovable-uploads/a98a1388-8dcd-4dd5-8b3e-efa17fecb917.png",
    expectedResults: "Amélioration du métabolisme des glucides et protection des tissus contre le stress oxydatif",
    recommendationReason: "Support naturel pour le métabolisme et les fonctions hépatiques",
    dietaryInfo: "Format: 90 capsules, NPN: 80093296. Contient du chardon-Marie, du ginseng d'Amérique, de la nigelle cultivée et du curcuma.",
    productUrl: "https://maisonjacynthe.ca/fr/metabzen",
    categories: ["métabolisme", "santé_générale", "digestif"],
    scores: [
      { condition: "Métabolisme", score: 5 },
      { condition: "Santé hépatique", score: 4 },
      { condition: "Antioxydants", score: 4 }
    ],
    therapeuticClaims: [
      "Contribue au sain métabolisme de glucose",
      "Aide à maintenir les capacités du corps à métaboliser les nutriments",
      "Aide à appuyer les fonctions hépatiques",
      "Source d'antioxydants pour le maintien d'une bonne santé"
    ],
    relationships: {
      complementaryProducts: ["gluconig", "detox-foie"],
      contraindications: ["detox"]
    },
    usage: {
      timing: "1 capsule, 1 à 2 fois par jour",
      duration: "Usage régulier",
      dosage: "Adultes 19 ans & plus: 1 capsules, 1 à 2 fois par jour",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
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
    categories: ["métabolisme", "santé_générale"],
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
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
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
    categories: ["métabolisme", "énergie"],
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
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
