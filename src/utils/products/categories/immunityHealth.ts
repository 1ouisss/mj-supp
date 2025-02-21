
import { ProductDefinition } from "../productTypes";

export const IMMUNITY_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "immunite-plus",
    name: "Immunité Plus",
    description: "Formule complète pour renforcer le système immunitaire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Renforcement des défenses naturelles et protection immunitaire",
    recommendationReason: "Support optimal pour le système immunitaire",
    dietaryInfo: "NPN: 80084376. Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/immunite-plus",
    categories: ["immunité", "défense", "santé_générale"],
    scores: [
      { condition: "Système immunitaire faible", score: 9 },
      { condition: "Défenses naturelles", score: 9 },
      { condition: "Protection saisonnière", score: 8 }
    ],
    therapeuticClaims: [
      "Renforce le système immunitaire",
      "Stimule les défenses naturelles",
      "Aide à combattre les infections",
      "Soutient la santé générale",
      "Protection contre les agressions extérieures"
    ],
    relationships: {
      complementaryProducts: ["vitamine-c", "vitamine-d"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage préventif ou cure intensive",
      seasonality: ["automne", "hiver"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "defense-naturelle",
    name: "Défense Naturelle",
    description: "Complexe d'herbes et nutriments pour la protection immunitaire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Protection immunitaire renforcée et résistance accrue",
    recommendationReason: "Solution naturelle pour renforcer l'immunité",
    dietaryInfo: "NPN: 80084377. Végétalien",
    productUrl: "https://maisonjacynthe.ca/fr/defense-naturelle",
    categories: ["immunité", "défense", "adaptogène"],
    scores: [
      { condition: "Protection immunitaire", score: 9 },
      { condition: "Résistance naturelle", score: 8 },
      { condition: "Santé générale", score: 9 }
    ],
    therapeuticClaims: [
      "Stimule le système immunitaire",
      "Aide à prévenir les infections",
      "Renforce les défenses naturelles",
      "Soutient la récupération",
      "Protection contre les agressions saisonnières"
    ],
    relationships: {
      complementaryProducts: ["vitamine-c", "zinc"],
      contraindications: []
    },
    usage: {
      timing: "Matin et soir",
      duration: "3 mois ou en continu",
      seasonality: ["automne", "hiver"]
    },
    timeFrame: "long_terme"
  }
];
