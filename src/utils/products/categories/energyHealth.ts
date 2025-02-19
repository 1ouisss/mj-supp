
import { ProductDefinition } from "../productTypes";

export const ENERGY_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "energie-vitalite",
    name: "Énergie & Vitalité",
    description: "Formule énergisante naturelle pour la vitalité quotidienne",
    imageUrl: "/placeholder.svg",
    expectedResults: "Augmentation de l'énergie et de la vitalité",
    recommendationReason: "Solution naturelle pour l'énergie",
    dietaryInfo: "NPN: 80095445",
    productUrl: "https://maisonjacynthe.ca/fr/energie-vitalite",
    categories: ["énergie", "vitalité", "adaptogène"],
    scores: [
      { condition: "Fatigue", score: 9 },
      { condition: "Manque d'énergie", score: 9 },
      { condition: "Performance", score: 8 }
    ],
    therapeuticClaims: [
      "Augmente l'énergie naturellement",
      "Améliore l'endurance",
      "Soutient la vitalité",
      "Aide au métabolisme énergétique",
      "Source d'antioxydants pour le maintien d'une bonne santé"
    ],
    relationships: {
      complementaryProducts: ["mineral-drop", "complexe-b"],
      contraindications: []
    },
    usage: {
      timing: "Matin ou midi",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "complexe-b",
    name: "Complexe B",
    description: "Formule complète de vitamines B essentielles",
    imageUrl: "/lovable-uploads/9e2a27a2-80a8-45c6-a120-57d6f9250958.png",
    expectedResults: "Optimisation du métabolisme énergétique",
    recommendationReason: "Support essentiel pour l'énergie",
    dietaryInfo: "NPN: 80095447",
    productUrl: "https://maisonjacynthe.ca/fr/complexe-b",
    categories: ["énergie", "métabolisme", "stress"],
    scores: [
      { condition: "Fatigue", score: 9 },
      { condition: "Stress", score: 8 },
      { condition: "Métabolisme", score: 9 }
    ],
    therapeuticClaims: [
      "Soutient le métabolisme énergétique",
      "Aide à réduire la fatigue",
      "Soutient la fonction nerveuse",
      "Aide à la formation des globules rouges",
      "Favorise le métabolisme des protéines, des lipides et des glucides"
    ],
    relationships: {
      complementaryProducts: ["mineral-drop", "energie-vitalite"],
      contraindications: []
    },
    usage: {
      timing: "Avec les repas",
      duration: "Usage quotidien recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "huile-tcm",
    name: "Huile TCM",
    description: "Huile de triglycérides à chaîne moyenne pour l'énergie",
    imageUrl: "/placeholder.svg",
    expectedResults: "Énergie stable et durable",
    recommendationReason: "Source d'énergie rapide et durable",
    dietaryInfo: "Sans gluten, cétogène",
    productUrl: "https://maisonjacynthe.ca/fr/huile-tcm",
    categories: ["énergie", "métabolisme", "cerveau"],
    scores: [
      { condition: "Énergie", score: 9 },
      { condition: "Concentration", score: 8 },
      { condition: "Performance", score: 8 }
    ],
    therapeuticClaims: [
      "Source d'énergie rapide",
      "Soutient la fonction cognitive",
      "Aide à maintenir des niveaux d'énergie stables",
      "Favorise la production de cétones",
      "Support pour le régime cétogène"
    ],
    relationships: {
      complementaryProducts: ["complexe-b", "energie-vitalite"],
      contraindications: []
    },
    usage: {
      timing: "Matin ou avant l'effort",
      duration: "Usage quotidien possible",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
