
import { ProductDefinition } from "../productTypes";

export const ENERGY_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "energie-vitale",
    name: "Énergie Vitale",
    description: "Formule complète pour booster l'énergie naturelle et la vitalité",
    imageUrl: "/placeholder.svg",
    expectedResults: "Augmentation de l'énergie et réduction de la fatigue",
    recommendationReason: "Solution naturelle pour retrouver son énergie",
    dietaryInfo: "NPN: 80084374. Sans gluten, végétalien",
    productUrl: "https://maisonjacynthe.ca/fr/energie-vitale",
    categories: ["énergie", "vitalité", "adaptogène"],
    scores: [
      { condition: "Fatigue chronique", score: 9 },
      { condition: "Manque d'énergie", score: 9 },
      { condition: "Épuisement", score: 8 }
    ],
    therapeuticClaims: [
      "Aide à combattre la fatigue",
      "Augmente l'énergie naturelle",
      "Améliore l'endurance",
      "Soutient le système immunitaire",
      "Aide à la récupération",
      "Renforce la vitalité"
    ],
    relationships: {
      complementaryProducts: ["vitamine-b", "mineral-complexe"],
      contraindications: []
    },
    usage: {
      timing: "Matin et début d'après-midi",
      duration: "Usage quotidien",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "force-botanique",
    name: "Force Botanique",
    description: "Mélange d'adaptogènes pour l'énergie et la résistance au stress",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration de l'énergie et de l'adaptation au stress",
    recommendationReason: "Support naturel pour l'énergie et la résistance",
    dietaryInfo: "NPN: 80084375. Végétalien",
    productUrl: "https://maisonjacynthe.ca/fr/force-botanique",
    categories: ["énergie", "adaptogène", "stress"],
    scores: [
      { condition: "Stress chronique", score: 9 },
      { condition: "Fatigue adaptative", score: 8 },
      { condition: "Résistance physique", score: 9 }
    ],
    therapeuticClaims: [
      "Augmente la résistance au stress",
      "Améliore l'adaptation de l'organisme",
      "Soutient l'énergie naturelle",
      "Renforce la vitalité",
      "Aide à maintenir l'équilibre hormonal"
    ],
    relationships: {
      complementaryProducts: ["vitamine-d", "mineral-complexe"],
      contraindications: []
    },
    usage: {
      timing: "Matin",
      duration: "Cure de 2-3 mois",
      seasonality: ["automne", "hiver"]
    },
    timeFrame: "court_terme"
  }
];
