
import { ProductDefinition } from '../productTypes';

export const DIGESTIVE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "probiotiques",
    name: "Probiotiques",
    description: "Régénérant actif de la flore intestinale avec bactéries probiotiques",
    imageUrl: "/lovable-uploads/54ac0240-dbc0-465e-813f-6d8741631873.png",
    expectedResults: "Amélioration du confort intestinal et régénération de la flore intestinale",
    recommendationReason: "Ce probiotique exerce un effet bénéfique pour la santé",
    dietaryInfo: "NPN : 80012298",
    productUrl: "https://maisonjacynthe.ca/fr/probiotiques",
    categories: ["digestif", "immunité"],
    scores: [
      { condition: "Problèmes digestifs", score: 5 },
      { condition: "Santé intestinale", score: 5 }
    ],
    therapeuticClaims: [
      "Régénérant actif de la flore intestinale",
      "Améliore le confort intestinal",
      "Exerce un effet bénéfique pour la santé"
    ],
    relationships: {
      complementaryProducts: ["jus-aloes", "fibres-ami"],
      contraindications: []
    },
    usage: {
      timing: "À jeun, avec un peu de liquide froid",
      duration: "Usage quotidien ou selon les besoins",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "jus-aloes",
    name: "Jus d'Aloès",
    description: "Jus d'aloès vera 99% pur pour la santé digestive",
    imageUrl: "/lovable-uploads/12fd5f58-c55e-4dbd-896b-e5dbf32417a9.png",
    expectedResults: "Soulagement de l'irritation et de l'inflammation du tractus gastro-intestinal",
    recommendationReason: "Utilisé en phytothérapie comme émollient pour le tractus gastro-intestinal",
    dietaryInfo: "NPN : 80092598. Aloe Vera 99% - Procédé à froid",
    productUrl: "https://maisonjacynthe.ca/fr/jus-aloes",
    categories: ["digestif", "immunité"],
    scores: [
      { condition: "Santé digestive", score: 5 },
      { condition: "Irritation gastro-intestinale", score: 4 }
    ],
    therapeuticClaims: [
      "Utilisé en phytothérapie comme émollient pour aider à soulager l'irritation et l'inflammation du tractus gastro-intestinal",
      "Source d'antioxydants",
      "Essentiel de base"
    ],
    relationships: {
      complementaryProducts: ["probiotiques"],
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
    id: "detox",
    name: "Détox",
    description: "Support pour les fonctions hépatiques et la digestion",
    imageUrl: "/lovable-uploads/6fbbd43d-7002-4b76-bf09-02d331fe89e5.png",
    expectedResults: "Amélioration des fonctions hépatiques et de la digestion",
    recommendationReason: "Soutien des fonctions hépatiques et digestives",
    dietaryInfo: "NPN : 80116539",
    productUrl: "https://maisonjacynthe.ca/fr/detox",
    categories: ["digestif", "santé_générale"],
    scores: [
      { condition: "Santé digestive", score: 5 },
      { condition: "Fonction hépatique", score: 5 }
    ],
    therapeuticClaims: [
      "Aide à appuyer les fonctions hépatiques",
      "Agent protecteur du foie",
      "Aide à soulager les troubles de digestion",
      "Stimule et facilite la digestion",
      "Augmente l'excrétion biliaire",
      "Source d'antioxydants"
    ],
    relationships: {
      complementaryProducts: ["probiotiques", "jus-aloes"],
      contraindications: [
        "Ne pas utiliser pendant la grossesse ou l'allaitement",
        "Ne pas utiliser en cas de maladie cardiaque, problèmes de pression sanguine",
        "Ne pas utiliser avec des antibiotiques ou de la nitroglycérine"
      ]
    },
    usage: {
      timing: "1 capsule, 2-3 fois par jour avec un repas",
      duration: "Usage occasionnel ou selon recommandation (jusqu'à 3 mois pour drainage du foie)",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  }
];
