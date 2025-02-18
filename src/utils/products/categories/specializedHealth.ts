
import { ProductDefinition } from "../productTypes";

export const SPECIALIZED_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "formule-libido",
    name: "Formule Libido",
    description: "Soutien naturel pour la libido et les fonctions cognitives",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration de la libido et réduction de la nervosité",
    recommendationReason: "Solution naturelle pour la santé féminine",
    dietaryInfo: "NPN : 80125167",
    productUrl: "https://maisonjacynthe.ca/fr/formule-libido",
    categories: ["libido", "santé_femme", "adaptogène", "stress"],
    scores: [
      { condition: "Libido faible", score: 5 },
      { condition: "Stress", score: 4 },
      { condition: "Fonctions cognitives", score: 4 }
    ],
    therapeuticClaims: [
      "Aide à augmenter et soutenir la libido saine chez les femmes",
      "Aide à améliorer les fonctions cognitives",
      "Aide à soulager l'agitation et la nervosité",
      "Adaptogène pour accroître l'énergie et la résistance au stress"
    ],
    relationships: {
      complementaryProducts: ["energie-et-adaptogenes"],
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
    id: "formule-menopause",
    name: "Formule Ménopause",
    description: "Solution naturelle pour les symptômes de la ménopause",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement des symptômes de la ménopause",
    recommendationReason: "Support complet pour la ménopause",
    dietaryInfo: "NPN : 80124806",
    productUrl: "https://maisonjacynthe.ca/fr/formule-menopause",
    categories: ["ménopause", "santé_femme", "adaptogène", "stress"],
    scores: [
      { condition: "Symptômes ménopause", score: 5 },
      { condition: "Bouffées de chaleur", score: 5 },
      { condition: "Stress", score: 4 }
    ],
    therapeuticClaims: [
      "Aide au maintien des fonctions cognitives",
      "Aide à réduire la fatigue mentale",
      "Soulage les symptômes de la ménopause",
      "Source d'antioxydants"
    ],
    relationships: {
      complementaryProducts: ["magnésium", "vitamine-d-et-k"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier selon les besoins",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "formule-douleurs-musculaires",
    name: "Formule Douleurs Musculaires",
    description: "Huile topique pour le soulagement des douleurs musculaires et articulaires",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement temporaire des douleurs musculaires et articulaires",
    recommendationReason: "Solution naturelle pour les douleurs",
    dietaryInfo: "NPN : 80119457",
    productUrl: "https://maisonjacynthe.ca/fr/formule-douleurs-musculaires",
    categories: ["douleur", "muscles", "articulations", "sport"],
    scores: [
      { condition: "Douleurs musculaires", score: 5 },
      { condition: "Douleurs articulaires", score: 5 }
    ],
    therapeuticClaims: [
      "Soulage temporairement la douleur des muscles et des articulations",
      "Aide pour le mal de dos et le lumbago",
      "Soulage les contusions et les entorses",
      "Soulage la douleur arthritique"
    ],
    relationships: {
      complementaryProducts: ["magnesium", "collagene-marin"],
      contraindications: []
    },
    usage: {
      timing: "Application selon les besoins",
      duration: "Usage ponctuel",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  }
];
