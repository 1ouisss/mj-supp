import { ProductDefinition } from '../productTypes';

export const SPECIALIZED_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "focus",
    name: "Focus",
    description: "Formule avancée pour la concentration et la clarté mentale.",
    imageUrl: "/lovable-uploads/a4cf23a3-0970-4fb3-be63-daa3935ae49c.png",
    expectedResults: "Concentration améliorée, clarté mentale accrue 🧠",
    recommendationReason: "Soutien cognitif optimal",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/focus",
    categories: ["brain", "concentration", "long_term"],
    scores: [
      { condition: "Soutenir la santé cérébrale", score: 5 },
      { condition: "Améliorer la concentration", score: 5 }
    ],
    therapeuticClaims: [
      "Enhances cognitive clarity and mental performance 🧠",
      "Améliore la concentration et la mémoire",
      "Soutient les fonctions cognitives"
    ],
    relationships: {
      complementaryProducts: ["energie-adaptogene"],
      contraindications: ["Sensibilité à la caféine"]
    },
    usage: {
      timing: "Prendre le matin ou en début d'après-midi",
      duration: "Utilisation quotidienne pour des résultats optimaux",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  },
  {
    id: "energie-adaptogene",
    name: "Énergie & Adaptogènes",
    description: "Complexe énergisant avec adaptogènes pour le stress.",
    imageUrl: "/lovable-uploads/4ccea2a6-43df-472a-8f3c-848d654e081f.png",
    expectedResults: "Énergie stable, meilleure résistance au stress ⚡",
    recommendationReason: "Soutien énergétique et anti-stress",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/energie-adaptogene",
    categories: ["energy", "stress", "long_term"],
    scores: [
      { condition: "Améliorer l'énergie", score: 5 },
      { condition: "Gérer le stress", score: 4 }
    ],
    therapeuticClaims: [
      "Boost d'énergie naturel et durable",
      "Adaptation au stress chronique",
      "Soutien du système nerveux"
    ],
    relationships: {
      complementaryProducts: ["focus"],
      contraindications: ["Hypertension non contrôlée"]
    },
    usage: {
      timing: "Prendre le matin avec le petit-déjeuner",
      duration: "Utilisation continue recommandée",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  },
  {
    id: "force-botanique",
    name: "Force Botanique",
    description: "Complexe énergisant naturel",
    imageUrl: "/lovable-uploads/3d4695a5-4f00-4d50-8c0f-ba0fc614d742.png",
    expectedResults: "Énergie naturelle et vitalité 🌱",
    recommendationReason: "Boost d'énergie botanique",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/force-botanique",
    categories: ["energy", "stress"],
    scores: [
      { condition: "Énergie", score: 5 },
      { condition: "Vitalité", score: 5 }
    ],
    therapeuticClaims: [
      "Boost d'énergie naturel",
      "Soutient la vitalité"
    ],
    relationships: {
      complementaryProducts: [],
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
    id: "creatine",
    name: "Créatine",
    description: "Supplément naturel pour la force musculaire",
    imageUrl: "/lovable-uploads/4ccea2a6-43df-472a-8f3c-848d654e081f.png",
    expectedResults: "Améliore la force musculaire et la récupération après l'effort",
    recommendationReason: "Soutien optimal pour la performance musculaire",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/creatine",
    categories: ["muscle", "energy"],
    scores: [
      { condition: "Performance physique", score: 5 },
      { condition: "Récupération musculaire", score: 5 }
    ],
    therapeuticClaims: [
      "Améliore la force musculaire",
      "Favorise la récupération post-effort",
      "Soutient la performance physique"
    ],
    relationships: {
      complementaryProducts: ["glutamine"],
      contraindications: []
    },
    usage: {
      timing: "Avant ou après l'entraînement",
      duration: "Usage régulier",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  },
  {
    id: "glutamine",
    name: "Glutamine",
    description: "Acide aminé essentiel pour la récupération musculaire",
    imageUrl: "/lovable-uploads/4ccea2a6-43df-472a-8f3c-848d654e081f.png",
    expectedResults: "Favorise la récupération musculaire et la santé intestinale",
    recommendationReason: "Support pour la récupération et la santé digestive",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/glutamine",
    categories: ["muscle", "digestive"],
    scores: [
      { condition: "Récupération musculaire", score: 5 },
      { condition: "Santé digestive", score: 4 }
    ],
    therapeuticClaims: [
      "Soutient la récupération musculaire",
      "Améliore la santé intestinale",
      "Renforce le système immunitaire"
    ],
    relationships: {
      complementaryProducts: ["creatine"],
      contraindications: []
    },
    usage: {
      timing: "Après l'entraînement",
      duration: "Usage régulier",
      seasonality: ["all_year"]
    },
    timeFrame: "long_term"
  },
  {
    id: "les-apothicaires",
    name: "Les Apothicaires",
    description: "Complexe immunitaire naturel",
    imageUrl: "/lovable-uploads/4ccea2a6-43df-472a-8f3c-848d654e081f.png",
    expectedResults: "Soutien immunitaire à base de plantes et de nutriments essentiels",
    recommendationReason: "Protection immunitaire naturelle",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/les-apothicaires",
    categories: ["immune", "seasonal"],
    scores: [
      { condition: "Renforcer l'immunité", score: 5 },
      { condition: "Protection saisonnière", score: 4 }
    ],
    therapeuticClaims: [
      "Renforce le système immunitaire",
      "Protection naturelle",
      "Soutien saisonnier"
    ],
    relationships: {
      complementaryProducts: ["miel-protecteur"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier ou saisonnier",
      seasonality: ["fall", "winter"]
    },
    timeFrame: "short_term"
  },
  {
    id: "miel-protecteur",
    name: "Miel Protecteur",
    description: "Formule naturelle pour la gorge et l'immunité",
    imageUrl: "/lovable-uploads/4ccea2a6-43df-472a-8f3c-848d654e081f.png",
    expectedResults: "Protège la gorge et soutient l'immunité naturelle",
    recommendationReason: "Protection naturelle de la gorge",
    dietaryInfo: "Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/miel-protecteur",
    categories: ["immune", "seasonal", "throat"],
    scores: [
      { condition: "Protection de la gorge", score: 5 },
      { condition: "Renforcer l'immunité", score: 4 }
    ],
    therapeuticClaims: [
      "Apaise la gorge",
      "Soutient l'immunité",
      "Protection saisonnière"
    ],
    relationships: {
      complementaryProducts: ["les-apothicaires"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage ponctuel ou saisonnier",
      seasonality: ["fall", "winter"]
    },
    timeFrame: "short_term"
  }
];
