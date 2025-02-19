
import { ProductDefinition } from "../productTypes";

export const SLEEP_RELAXATION_PRODUCTS: ProductDefinition[] = [
  {
    id: "poudre-dodo",
    name: "Poudre Dodo",
    description: "Formule naturelle pour favoriser un sommeil réparateur",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration de la qualité du sommeil et de l'endormissement",
    recommendationReason: "Solution naturelle pour le sommeil et la relaxation",
    dietaryInfo: "NPN: 80095441. Sans gluten, végétalien",
    productUrl: "https://maisonjacynthe.ca/fr/poudre-dodo",
    categories: ["sommeil", "relaxation", "stress"],
    scores: [
      { condition: "Troubles du sommeil", score: 9 },
      { condition: "Stress", score: 8 },
      { condition: "Anxiété nocturne", score: 8 }
    ],
    therapeuticClaims: [
      "Favorise l'endormissement naturel",
      "Améliore la qualité du sommeil",
      "Aide à la relaxation",
      "Réduit le temps d'endormissement",
      "Favorise un sommeil réparateur",
      "Soulage l'anxiété légère"
    ],
    relationships: {
      complementaryProducts: ["magnesium", "melatonine"],
      contraindications: []
    },
    usage: {
      timing: "30-60 minutes avant le coucher",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "melatonine",
    name: "Mélatonine",
    description: "Hormone naturelle du sommeil pour réguler le cycle circadien",
    imageUrl: "/placeholder.svg",
    expectedResults: "Régulation du cycle du sommeil et meilleur endormissement",
    recommendationReason: "Aide naturelle pour le sommeil et le décalage horaire",
    dietaryInfo: "NPN: 80095442. Végétarien",
    productUrl: "https://maisonjacynthe.ca/fr/melatonine",
    categories: ["sommeil", "relaxation"],
    scores: [
      { condition: "Troubles du sommeil", score: 9 },
      { condition: "Décalage horaire", score: 9 },
      { condition: "Rythme circadien", score: 8 }
    ],
    therapeuticClaims: [
      "Aide à réduire le temps d'endormissement",
      "Soulage les symptômes du décalage horaire",
      "Régule le cycle du sommeil",
      "Aide à rétablir un rythme de sommeil sain",
      "Favorise un sommeil réparateur"
    ],
    relationships: {
      complementaryProducts: ["poudre-dodo", "magnesium"],
      contraindications: []
    },
    usage: {
      timing: "30 minutes avant le coucher",
      duration: "Usage ponctuel ou régulier selon les besoins",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "relaxation-intense",
    name: "Relaxation Intense",
    description: "Formule apaisante pour la détente et le calme mental",
    imageUrl: "/placeholder.svg",
    expectedResults: "Réduction du stress et de l'anxiété, meilleure relaxation",
    recommendationReason: "Solution naturelle pour la relaxation et le calme",
    dietaryInfo: "NPN: 80095443. Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/relaxation-intense",
    categories: ["relaxation", "stress", "sommeil"],
    scores: [
      { condition: "Stress", score: 9 },
      { condition: "Anxiété", score: 9 },
      { condition: "Tension nerveuse", score: 8 }
    ],
    therapeuticClaims: [
      "Aide à la relaxation",
      "Réduit le stress",
      "Favorise le calme mental",
      "Soulage l'anxiété légère",
      "Aide à gérer le stress quotidien",
      "Procure un effet calmant naturel"
    ],
    relationships: {
      complementaryProducts: ["magnesium", "poudre-dodo"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage régulier possible",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
