
import { ProductDefinition } from "../productTypes";

export const BRAIN_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "focus",
    name: "Focus",
    description: "Formule avancée pour la concentration et la clarté mentale",
    imageUrl: "/lovable-uploads/08b3afe7-d173-4bc6-b68b-575f171df2ff.png",
    expectedResults: "Amélioration de la concentration, de la mémoire et des performances cognitives",
    recommendationReason: "Soutien optimal pour la concentration et la clarté mentale",
    dietaryInfo: "NPN: 80084372. Sans gluten, végétalien",
    productUrl: "https://maisonjacynthe.ca/fr/focus",
    categories: ["cerveau", "concentration", "énergie"],
    scores: [
      { condition: "Difficulté de concentration", score: 9 },
      { condition: "Fatigue mentale", score: 8 },
      { condition: "Performance cognitive", score: 9 }
    ],
    therapeuticClaims: [
      "Améliore la concentration et la mémoire",
      "Soutient les fonctions cognitives",
      "Aide à maintenir la clarté mentale",
      "Favorise la performance intellectuelle",
      "Contribue à réduire la fatigue mentale",
      "Support pour l'apprentissage"
    ],
    relationships: {
      complementaryProducts: ["omega3", "vitamine-b"],
      contraindications: []
    },
    usage: {
      timing: "Matin et début d'après-midi",
      duration: "Usage quotidien recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "neuro-calm",
    name: "Neuro Calm",
    description: "Formule apaisante pour le système nerveux et la santé cognitive",
    imageUrl: "/placeholder.svg",
    expectedResults: "Apaisement du système nerveux et amélioration de la clarté mentale",
    recommendationReason: "Solution naturelle pour le stress mental et la santé cognitive",
    dietaryInfo: "NPN: 80084373. Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/neuro-calm",
    categories: ["cerveau", "stress", "relaxation"],
    scores: [
      { condition: "Stress mental", score: 9 },
      { condition: "Anxiété cognitive", score: 8 },
      { condition: "Surmenage", score: 9 }
    ],
    therapeuticClaims: [
      "Aide à réduire le stress mental",
      "Soutient le système nerveux",
      "Favorise la clarté mentale",
      "Contribue à l'équilibre émotionnel",
      "Améliore la résistance au stress"
    ],
    relationships: {
      complementaryProducts: ["magnesium", "vitamine-b"],
      contraindications: []
    },
    usage: {
      timing: "Matin ou selon les besoins",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
