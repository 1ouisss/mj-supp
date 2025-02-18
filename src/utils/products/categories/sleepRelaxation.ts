
import { ProductDefinition } from '../productTypes';

export const SLEEP_RELAXATION_PRODUCTS: ProductDefinition[] = [
  {
    id: "melatonine",
    name: "Mélatonine",
    description: "Aide naturelle pour la qualité du sommeil et la régulation du cycle veille-sommeil",
    imageUrl: "/lovable-uploads/44cf3f14-98a1-43e6-b5f4-e1ddcbda3d93.png",
    expectedResults: "Amélioration de la qualité du sommeil et réduction du temps d'endormissement",
    recommendationReason: "Aide à rétablir le cycle veille-sommeil",
    dietaryInfo: "NPN : 80111173",
    productUrl: "https://maisonjacynthe.ca/fr/melatonine-cerise",
    categories: ["sommeil", "relaxation"],
    scores: [
      { condition: "Troubles du sommeil", score: 5 },
      { condition: "Difficulté d'endormissement", score: 5 }
    ],
    therapeuticClaims: [
      "Aide à rétablir le cycle veille-sommeil (aspect du rythme circadien)",
      "Aide à accélérer/réduire le temps nécessaire pour s'endormir",
      "Aide les personnes qui s'endorment lentement"
    ],
    relationships: {
      complementaryProducts: ["magnesium"],
      contraindications: []
    },
    usage: {
      timing: "30 minutes avant le coucher",
      duration: "Utilisation ponctuelle recommandée",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "magnesium",
    name: "Magnésium",
    description: "Support pour la relaxation musculaire et nerveuse",
    imageUrl: "/lovable-uploads/13e46990-e5e0-4bd3-8238-5682ce7a6045.png",
    expectedResults: "Meilleur fonctionnement musculaire et réduction du stress",
    recommendationReason: "Aide au bon fonctionnement des muscles et au maintien de la santé",
    dietaryInfo: "NPN : 80095762",
    productUrl: "https://maisonjacynthe.ca/fr/magnesium",
    categories: ["relaxation", "muscles", "stress"],
    scores: [
      { condition: "Stress", score: 5 },
      { condition: "Tension musculaire", score: 4 },
      { condition: "Sommeil", score: 4 }
    ],
    therapeuticClaims: [
      "Aide au bon fonctionnement des muscles, incluant le muscle du cœur",
      "Aide au développement et au maintien des os et des dents",
      "Aide à maintenir la formation de globules rouges et des tissus",
      "Aide à réduire les symptômes liés au syndrome prémenstruel",
      "Source d'électrolyte pour le maintien d'une bonne santé"
    ],
    relationships: {
      complementaryProducts: ["melatonine", "complexe-b"],
      contraindications: []
    },
    usage: {
      timing: "Le soir pour la relaxation",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
