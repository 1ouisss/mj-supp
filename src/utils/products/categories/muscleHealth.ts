import { ProductDefinition } from '../productTypes';

export const MUSCLE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "creatine",
    name: "Créatine",
    description: "Supplément de créatine pure pour la performance musculaire",
    imageUrl: "/lovable-uploads/f2d4ffb2-0e13-424f-bc29-2acaa73c0a00.png",
    expectedResults: "Amélioration de la force et de la récupération musculaire",
    recommendationReason: "Support optimal pour la performance musculaire",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/creatine",
    categories: ["muscles", "énergie"],
    scores: [
      { condition: "Performance musculaire", score: 5 },
      { condition: "Récupération", score: 4 }
    ],
    therapeuticClaims: [
      "Améliore la force musculaire",
      "Favorise la récupération",
      "Soutient la performance"
    ],
    relationships: {
      complementaryProducts: ["glutamine"],
      contraindications: []
    },
    usage: {
      timing: "Avant ou après l'entraînement",
      duration: "Utilisation régulière recommandée",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "glutamine",
    name: "Glutamine",
    description: "Supplément à l'entraînement. Aide à la réparation de cellules musculaires suite à de l'exercice physique.",
    imageUrl: "/lovable-uploads/7f55b09b-4e4c-4306-887e-aedfd0b52129.png",
    expectedResults: "Meilleure récupération musculaire et restauration des niveaux de glutamine après l'exercice",
    recommendationReason: "Support pour la récupération musculaire et la synthèse des protéines",
    dietaryInfo: "Format: 300 g. NPN: 80124034. Ingrédient médicinal: L-Glutamine 9 g par portion.",
    productUrl: "https://maisonjacynthe.ca/fr/glutamine",
    categories: [
      "muscles",
      "récupération",
      "court_terme"
    ],
    scores: [
      { condition: "Récupération musculaire", score: 5 },
      { condition: "Performance sportive", score: 4 },
      { condition: "Stress physique", score: 4 }
    ],
    therapeuticClaims: [
      "Aide à la réparation de cellules musculaires suite à de l'exercice physique",
      "Aide à restaurer les niveaux sanguins de glutamine appauvris suite à des périodes de stress physique",
      "Source d'un acide aminé non essentiel jouant un rôle dans la synthèse des protéines musculaires"
    ],
    relationships: {
      complementaryProducts: ["creatine"],
      contraindications: []
    },
    usage: {
      timing: "Prendre dans les 90 minutes après un exercice",
      dosage: "1 mesure 1 fois par jour",
      duration: "Selon les besoins d'entraînement",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  }
];