import { ProductDefinition } from '../productTypes';

export const MUSCLE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "creatine",
    name: "Créatine",
    description: "Supplément à l'entraînement. Poudre orale pour améliorer la force, la puissance et la performance lors d'activités physiques intenses.",
    imageUrl: "/lovable-uploads/3f363651-9c7a-4903-b219-ea79c15afc90.png",
    expectedResults: "Améliore la force/puissance/performance au cours des séances répétées et brèves d'activité physique très intense. Augmente la masse musculaire maigre avec un programme d'entraînement contre résistance.",
    recommendationReason: "Support optimal pour la performance musculaire et la récupération",
    dietaryInfo: "Format: 500g, NPN: 80124122. Ingrédient médicinal: Créatine monohydratée 5g par mesure. Ingrédient non médicinal: Silicate de calcium.",
    productUrl: "https://maisonjacynthe.ca/fr/creatine",
    categories: ["muscles", "énergie", "récupération"],
    scores: [
      { condition: "Performance musculaire", score: 5 },
      { condition: "Récupération", score: 4 }
    ],
    therapeuticClaims: [
      "Améliore la force et la puissance lors d'activités physiques intenses",
      "Augmente la masse musculaire maigre",
      "Soutient la performance sportive"
    ],
    relationships: {
      complementaryProducts: ["glutamine"],
      contraindications: []
    },
    usage: {
      timing: "Phase d'induction: 1 mesure 3 fois par jour pendant 5-7 jours. Phase d'entretien: 1 mesure 1 fois par jour",
      duration: "Utilisation régulière recommandée",
      dosage: "5g par mesure",
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