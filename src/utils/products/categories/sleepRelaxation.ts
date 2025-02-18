
import { ProductDefinition } from "../productTypes";

export const SLEEP_RELAXATION_PRODUCTS: ProductDefinition[] = [
  {
    id: "poudre-dodo",
    name: "Poudre Dodo",
    description: "Formule naturelle pour favoriser un sommeil réparateur",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration de la qualité du sommeil",
    recommendationReason: "Solution naturelle pour le sommeil",
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
      "Aide à la relaxation"
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
    description: "Hormone naturelle du sommeil",
    imageUrl: "/placeholder.svg",
    expectedResults: "Régulation du cycle du sommeil",
    recommendationReason: "Aide naturelle pour le sommeil",
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
      "Régule le cycle du sommeil"
    ],
    relationships: {
      complementaryProducts: ["poudreDodo", "magnesium"],
      contraindications: []
    },
    usage: {
      timing: "30 minutes avant le coucher",
      duration: "Usage ponctuel ou régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "relaxation-intense",
    name: "Relaxation Intense",
    description: "Formule apaisante pour la détente et le calme",
    imageUrl: "/placeholder.svg",
    expectedResults: "Réduction du stress et de l'anxiété",
    recommendationReason: "Solution naturelle pour la relaxation",
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
      "Favorise le calme mental"
    ],
    relationships: {
      complementaryProducts: ["magnesium", "poudreDodo"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage régulier possible",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "force-botanique",
    name: "Force Botanique",
    description: "Mélange de plantes adaptogènes pour l'équilibre",
    imageUrl: "/placeholder.svg",
    expectedResults: "Équilibre du système nerveux et gestion du stress",
    recommendationReason: "Support naturel pour le stress",
    dietaryInfo: "NPN: 80095444. Végétalien",
    productUrl: "https://maisonjacynthe.ca/fr/force-botanique",
    categories: ["stress", "adaptogène", "relaxation"],
    scores: [
      { condition: "Stress chronique", score: 9 },
      { condition: "Fatigue", score: 8 },
      { condition: "Équilibre émotionnel", score: 8 }
    ],
    therapeuticClaims: [
      "Aide à l'adaptation au stress",
      "Soutient l'équilibre nerveux",
      "Favorise la vitalité"
    ],
    relationships: {
      complementaryProducts: ["relaxationIntense", "champignonsAdaptogenes"],
      contraindications: []
    },
    usage: {
      timing: "Matin et midi",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
