import { ProductDefinition } from "../productTypes";

export const IMMUNITY_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "echinacea",
    name: "Echinacea",
    description: "Utilisé pour renforcer le système immunitaire et réduire la durée des rhumes.",
    imageUrl: "/lovable-uploads/echinacea.png",
    expectedResults: "Renforcement du système immunitaire, réduction des symptômes de rhume",
    recommendationReason: "Plante médicinale reconnue pour ses propriétés immunostimulantes.",
    dietaryInfo: "Format : 60 capsules, NPN : 80012345",
    productUrl: "https://maisonjacynthe.ca/fr/echinacea",
    categories: ["immunité", "santé_générale"],
    scores: [
      { condition: "Immunité", score: 5 },
      { condition: "Rhumes", score: 4 }
    ],
    therapeuticClaims: [
      "Renforce le système immunitaire",
      "Réduit la durée des rhumes",
      "Propriétés anti-inflammatoires"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: [
        "Ne pas utiliser en cas d'allergie aux plantes de la famille des astéracées"
      ]
    },
    usage: {
      timing: "1 capsule, 2 fois par jour",
      duration: "Usage préventif ou lors de symptômes de rhume",
      seasonality: ["automne", "hiver"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "le-protecteur",
    name: "Le Protecteur",
    description: "Miel aromatisé pour consommation, enrichi d'huiles essentielles naturelles pour soutenir le système immunitaire.",
    imageUrl: "/lovable-uploads/5da495ea-a536-4ef9-8ae4-eb82cef13544.png",
    expectedResults: "Soutien du système immunitaire et bien-être général",
    recommendationReason: "Formule 100% naturelle combinant les bienfaits du miel et des huiles essentielles protectrices",
    dietaryInfo: "100% naturel & pur. Format: 250 ml. Contient: Miel, huile de clou de girofle, huile d'écorce de cannelle, huile de romarin, huile de zeste de citron, huile d'eucalyptus",
    productUrl: "https://maisonjacynthe.ca/fr/le-protecteur",
    categories: ["immunité", "santé_générale"],
    scores: [
      { condition: "Immunité", score: 5 },
      { condition: "Bien-être général", score: 4 }
    ],
    therapeuticClaims: [
      "Soutien du système immunitaire",
      "Propriétés antimicrobiennes naturelles",
      "Action protectrice"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: [
        "Ne pas utiliser sur le visage",
        "Non recommandé pour les enfants de moins de 6 ans"
      ]
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage régulier ou ponctuel",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  }
];
