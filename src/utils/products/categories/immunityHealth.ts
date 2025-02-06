import { ProductDefinition } from "../productTypes";

export const IMMUNITY_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "immunitaire",
    name: "Immunitaire",
    description: "Teinture mère botanique pour soutenir le système immunitaire et soulager les symptômes des infections respiratoires.",
    imageUrl: "/lovable-uploads/594a340a-cc3c-4504-92df-cc5a54d7482a.png",
    expectedResults: "Aide à soulager les symptômes et réduire la durée des infections des voies respiratoires supérieures. Soutient le système immunitaire.",
    recommendationReason: "Formule traditionnelle combinant l'échinacée, l'astragale et d'autres plantes médicinales pour renforcer l'immunité.",
    dietaryInfo: "Format : 150 ml, NPN : 80105353",
    productUrl: "https://maisonjacynthe.ca/fr/immunitaire",
    categories: ["immunité", "santé_générale", "gorge"],
    scores: [
      { condition: "Immunité", score: 5 },
      { condition: "Rhumes", score: 4 },
      { condition: "Gorge", score: 4 }
    ],
    therapeuticClaims: [
      "Soulage les maux de gorge et les symptômes d'infections respiratoires",
      "Réduit la durée des infections des voies respiratoires supérieures",
      "Aide au maintien d'un système immunitaire sain",
      "Soutient la circulation périphérique"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: [
        "Ne pas utiliser si vous prenez des immunosuppresseurs",
        "Ne pas utiliser si vous souffrez de maladies auto-immunes",
        "Consulter un professionnel si enceinte ou allaitante"
      ]
    },
    usage: {
      timing: "1 cuillère à thé, 3 fois par jour",
      duration: "Utiliser dès les premiers signes d'un rhume. Ne pas utiliser plus de 8 semaines sans avis médical",
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