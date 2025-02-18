
import { ProductDefinition } from "../productTypes";

export const DIGESTIVE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "l-ami",
    name: "L'Ami",
    description: "Soutien naturel pour la santé digestive et l'équilibre intestinal",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration du confort digestif et de la régularité",
    recommendationReason: "Solution naturelle pour la santé intestinale",
    dietaryInfo: "NPN: 80097181. Sans gluten, végétalien",
    productUrl: "https://maisonjacynthe.ca/fr/l-ami",
    categories: ["digestif", "santé_générale"],
    scores: [
      { condition: "Digestion difficile", score: 9 },
      { condition: "Transit intestinal", score: 9 },
      { condition: "Ballonnements", score: 8 }
    ],
    therapeuticClaims: [
      "Favorise la santé digestive",
      "Aide à maintenir un transit intestinal régulier",
      "Soutient l'équilibre de la flore intestinale"
    ],
    relationships: {
      complementaryProducts: ["probiotiques", "fibresEssentielles"],
      contraindications: []
    },
    usage: {
      timing: "Avant les repas",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "probiotiques",
    name: "Probiotiques",
    description: "Formule probiotique avancée pour la santé intestinale",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration de la flore intestinale et du système immunitaire",
    recommendationReason: "Soutien essentiel pour la santé digestive",
    dietaryInfo: "NPN: 80098765. Sans produits laitiers",
    productUrl: "https://maisonjacynthe.ca/fr/probiotiques",
    categories: ["digestif", "immunité"],
    scores: [
      { condition: "Santé intestinale", score: 9 },
      { condition: "Système immunitaire", score: 8 },
      { condition: "Digestion", score: 9 }
    ],
    therapeuticClaims: [
      "Soutient la santé digestive",
      "Renforce le système immunitaire",
      "Aide à maintenir une flore intestinale saine"
    ],
    relationships: {
      complementaryProducts: ["lAmi", "fibresEssentielles"],
      contraindications: []
    },
    usage: {
      timing: "À jeun ou avant les repas",
      duration: "Usage quotidien recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "fibres-essentielles",
    name: "Fibres Essentielles",
    description: "Complément de fibres pour une digestion optimale",
    imageUrl: "/placeholder.svg",
    expectedResults: "Amélioration du transit et du confort digestif",
    recommendationReason: "Source naturelle de fibres alimentaires",
    dietaryInfo: "NPN: 80099876. Sans gluten, végétalien",
    productUrl: "https://maisonjacynthe.ca/fr/fibres-essentielles",
    categories: ["digestif", "poids"],
    scores: [
      { condition: "Transit intestinal", score: 9 },
      { condition: "Digestion", score: 8 },
      { condition: "Satiété", score: 7 }
    ],
    therapeuticClaims: [
      "Favorise la régularité intestinale",
      "Aide à maintenir une digestion saine",
      "Contribue à la sensation de satiété"
    ],
    relationships: {
      complementaryProducts: ["lAmi", "probiotiques"],
      contraindications: []
    },
    usage: {
      timing: "Avec beaucoup d'eau",
      duration: "Usage quotidien recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "detox",
    name: "Détox",
    description: "Formule détoxifiante pour le système digestif",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soutien de la fonction hépatique et digestive",
    recommendationReason: "Aide à la détoxification naturelle",
    dietaryInfo: "NPN: 80099887. Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/detox",
    categories: ["digestif", "détox"],
    scores: [
      { condition: "Détoxification", score: 9 },
      { condition: "Fonction hépatique", score: 8 },
      { condition: "Digestion", score: 7 }
    ],
    therapeuticClaims: [
      "Soutient la fonction hépatique",
      "Aide à la détoxification naturelle",
      "Favorise une digestion saine"
    ],
    relationships: {
      complementaryProducts: ["lAmi", "probiotiques"],
      contraindications: []
    },
    usage: {
      timing: "À jeun le matin",
      duration: "Cure de 1-3 mois",
      seasonality: ["printemps", "automne"]
    },
    timeFrame: "court_terme"
  }
];
