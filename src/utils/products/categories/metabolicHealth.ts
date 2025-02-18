
import { ProductDefinition } from "../productTypes";

export const METABOLIC_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "gluconig",
    name: "Gluconig",
    description: "Régulateur de glucose sanguin naturel",
    imageUrl: "/placeholder.svg",
    expectedResults: "Maintien d'une glycémie saine",
    recommendationReason: "Aide à la régulation du sucre sanguin",
    dietaryInfo: "NPN : 80087435",
    productUrl: "https://maisonjacynthe.ca/fr/gluconig",
    categories: ["métabolisme", "santé_générale"],
    scores: [
      { condition: "Glycémie élevée", score: 5 },
      { condition: "Métabolisme", score: 4 }
    ],
    therapeuticClaims: [
      "Aide au maintien d'un taux de glucose sanguin sain",
      "Aide à réduire l'index glycémique des aliments ingérés"
    ],
    relationships: {
      complementaryProducts: ["metzaben", "complexe-b"],
      contraindications: []
    },
    usage: {
      timing: "Avant les repas",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "metzaben",
    name: "Metzaben",
    description: "Support pour un métabolisme sain",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration du métabolisme du glucose",
    recommendationReason: "Soutien du métabolisme et des fonctions hépatiques",
    dietaryInfo: "NPN : 80093296",
    productUrl: "https://maisonjacynthe.ca/fr/metzaben",
    categories: ["métabolisme", "santé_générale"],
    scores: [
      { condition: "Métabolisme", score: 5 },
      { condition: "Santé hépatique", score: 4 }
    ],
    therapeuticClaims: [
      "Contribue au sain métabolisme de glucose",
      "Aide à maintenir les capacités du corps à métaboliser les nutriments",
      "Aide à appuyer les fonctions hépatiques",
      "Source d'antioxydants pour le maintien d'une bonne santé"
    ],
    relationships: {
      complementaryProducts: ["gluconig", "mineral-drop"],
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
    id: "extrait-the-vert",
    name: "Extrait de thé vert",
    description: "Support naturel pour la gestion du poids",
    imageUrl: "/placeholder.svg",
    expectedResults: "Aide à la gestion du poids dans le cadre d'un mode de vie sain",
    recommendationReason: "Complément naturel pour la gestion du poids",
    dietaryInfo: "NPN : 80095039",
    productUrl: "https://maisonjacynthe.ca/fr/extrait-the-vert",
    categories: ["poids", "antioxydant", "métabolisme"],
    scores: [
      { condition: "Gestion du poids", score: 4 },
      { condition: "Métabolisme", score: 4 }
    ],
    therapeuticClaims: [
      "À utiliser dans le cadre d'un programme de réduction de l'apport calorique",
      "Aide à la gestion du poids avec une activité physique régulière"
    ],
    relationships: {
      complementaryProducts: ["mineral-drop", "complexe-b"],
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
