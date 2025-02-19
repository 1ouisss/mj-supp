
import { ProductDefinition } from "../productTypes";

export const GENERAL_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "la-totale",
    name: "La Totale",
    description: "Complément nutritionnel complet pour une santé optimale",
    imageUrl: "/lovable-uploads/81fe24a0-70fe-4718-b8e3-db356eb4cd93.png",
    expectedResults: "Amélioration de la vitalité générale et du bien-être",
    recommendationReason: "Support nutritionnel complet pour la santé quotidienne",
    dietaryInfo: "NPN: 80123456",
    productUrl: "https://maisonjacynthe.ca/fr/la-totale",
    categories: ["santé_générale", "vitalité", "minéraux"],
    scores: [
      { condition: "Santé générale", score: 9 },
      { condition: "Vitalité", score: 9 },
      { condition: "Énergie", score: 8 }
    ],
    therapeuticClaims: [
      "Soutient la santé globale",
      "Aide à maintenir une bonne santé",
      "Source de vitamines et minéraux essentiels",
      "Contribue à l'énergie et la vitalité",
      "Aide au métabolisme des nutriments"
    ],
    relationships: {
      complementaryProducts: ["mineral-drop", "omega-3"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "mineral-drop",
    name: "Mineral Drop",
    description: "Solution concentrée de minéraux essentiels",
    imageUrl: "/lovable-uploads/32c160a9-abc3-47bd-b0ad-507c4dec3c50.png",
    expectedResults: "Optimisation des niveaux de minéraux",
    recommendationReason: "Source complète de minéraux biodisponibles",
    dietaryInfo: "NPN: 80095447",
    productUrl: "https://maisonjacynthe.ca/fr/mineral-drop",
    categories: ["minéraux", "santé_générale", "métabolisme"],
    scores: [
      { condition: "Déficience en minéraux", score: 9 },
      { condition: "Santé générale", score: 8 },
      { condition: "Hydratation", score: 8 }
    ],
    therapeuticClaims: [
      "Source de minéraux essentiels",
      "Aide au maintien d'une bonne santé",
      "Soutient les fonctions métaboliques",
      "Aide à l'équilibre électrolytique",
      "Contribue à la formation des tissus"
    ],
    relationships: {
      complementaryProducts: ["vitamine-d-et-k", "la-totale"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "vitamine-d-et-k",
    name: "Vitamine D & K",
    description: "Combinaison synergique de vitamines D3 et K2",
    imageUrl: "/lovable-uploads/0def73d4-861c-4e96-8a86-247966b03669.png",
    expectedResults: "Optimisation de la santé osseuse et cardiovasculaire",
    recommendationReason: "Vitamines essentielles pour la santé générale",
    dietaryInfo: "NPN: 80098765",
    productUrl: "https://maisonjacynthe.ca/fr/vitamine-d-et-k",
    categories: ["santé_osseuse", "santé_cardiaque", "santé_générale"],
    scores: [
      { condition: "Santé osseuse", score: 9 },
      { condition: "Santé cardiovasculaire", score: 8 },
      { condition: "Immunité", score: 8 }
    ],
    therapeuticClaims: [
      "Aide au maintien d'os en santé",
      "Soutient la santé cardiovasculaire",
      "Aide à l'absorption du calcium",
      "Contribue au maintien du système immunitaire",
      "Aide à la coagulation normale du sang"
    ],
    relationships: {
      complementaryProducts: ["mineral-drop", "calcium-magnesium"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
