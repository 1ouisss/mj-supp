import { ProductDefinition } from '../productTypes';

export const MUSCLE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "mineraux",
    name: "Minéraux",
    description: "Complexe complet de minéraux essentiels",
    imageUrl: "/lovable-uploads/4ccea2a6-43df-472a-8f3c-848d654e081f.png",
    expectedResults: "Meilleure santé osseuse et fonction musculaire",
    recommendationReason: "Apport équilibré en minéraux essentiels",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/mineraux",
    categories: ["essential", "muscle", "bone_health"],
    scores: [
      { condition: "Santé osseuse", score: 5 },
      { condition: "Fonction musculaire", score: 5 }
    ],
    therapeuticClaims: [
      "Soutient la santé osseuse",
      "Favorise la fonction musculaire",
      "Équilibre électrolytique"
    ],
    relationships: {
      complementaryProducts: ["mineral-drop", "vitamine-d-k"],
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
    id: "mineral-drop",
    name: "Mineral Drop",
    description: "Solution d'électrolytes concentrée",
    imageUrl: "/lovable-uploads/4ccea2a6-43df-472a-8f3c-848d654e081f.png",
    expectedResults: "Meilleure hydratation et récupération",
    recommendationReason: "Hydratation optimale et équilibre électrolytique",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/mineral-drop",
    categories: ["essential", "muscle", "energy"],
    scores: [
      { condition: "Hydratation", score: 5 },
      { condition: "Récupération", score: 4 }
    ],
    therapeuticClaims: [
      "Maintient l'équilibre électrolytique",
      "Favorise l'hydratation",
      "Soutient la récupération"
    ],
    relationships: {
      complementaryProducts: ["mineraux"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage ponctuel ou régulier",
      seasonality: ["all_year"]
    },
    timeFrame: "short_term"
  }
];