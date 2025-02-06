import { ProductDefinition } from "../productTypes";

export const SPECIALIZED_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "detox-foie",
    name: "Détox",
    description: "Utilisé en phytothérapie, ces capsules aident à appuyer les fonctions hépatiques, comme agent protecteur du foie. Ils aident à soulager les troubles de digestion, stimuler et faciliter la digestion.",
    imageUrl: "/lovable-uploads/6fbbd43d-7002-4b76-bf09-02d331fe89e5.png",
    expectedResults: "Amélioration des fonctions hépatiques et de la digestion, augmentation de l'excrétion biliaire",
    recommendationReason: "Formule complète pour la santé du foie et la digestion, combinant des plantes médicinales traditionnelles et des antioxydants",
    dietaryInfo: "Format : 90 capsules, NPN : 80116539",
    productUrl: "https://maisonjacynthe.ca/fr/detox",
    categories: ["digestif", "santé_générale"],
    scores: [
      { condition: "Santé digestive", score: 5 },
      { condition: "Santé du foie", score: 5 },
      { condition: "Détoxification", score: 4 }
    ],
    therapeuticClaims: [
      "Aide et appuie les fonctions hépatiques",
      "Agent protecteur du foie",
      "Soulage les troubles de digestion",
      "Stimule et facilite la digestion",
      "Augmente l'excrétion biliaire",
      "Stimule la vésicule biliaire",
      "Source d'antioxydants"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: [
        "Ne pas utiliser en même temps que Metabzen",
        "Ne pas utiliser pendant la grossesse ou l'allaitement",
        "Ne pas utiliser en cas de maladie cardiaque, problèmes de pression sanguine",
        "Ne pas utiliser avec des antibiotiques ou de la nitroglycérine"
      ]
    },
    usage: {
      timing: "1 capsule, 2-3 fois par jour avec un repas",
      duration: "Usage occasionnel ou selon recommandation d'un thérapeute (jusqu'à 3 mois pour drainage du foie)",
      dosage: "2-3 capsules par jour pour les adultes",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "bobome",
    name: "Bobôme",
    description: "Notre baume qui calme les irritations causées par les piqûres de moustiques grâce aux belles propriétés comprises dans ces ingrédients de qualité.",
    imageUrl: "/lovable-uploads/b44d19fb-631d-40bb-acba-aa274dc40fd8.png",
    expectedResults: "Soulagement des irritations cutanées et piqûres d'insectes",
    recommendationReason: "Formule naturelle avec des ingrédients apaisants et anti-inflammatoires",
    dietaryInfo: "100% naturel, sans agent de conservation. Contient: beurre de karité, calendule CO2, lavande, camomille matricaire, menthe poivrée, géranium",
    productUrl: "https://maisonjacynthe.ca/fr/bobome",
    categories: ["topique", "peau"],
    scores: [
      { condition: "Irritations cutanées", score: 5 },
      { condition: "Piqûres d'insectes", score: 5 },
      { condition: "Inflammation", score: 4 }
    ],
    therapeuticClaims: [
      "Calme les irritations",
      "Effet anti-inflammatoire",
      "Propriétés antibactériennes",
      "Action décongestionnante",
      "Effet anesthésiant local"
    ],
    relationships: {
      complementaryProducts: ["formule-apaisante"],
      contraindications: []
    },
    usage: {
      timing: "Appliquer localement selon le besoin",
      duration: "Usage ponctuel",
      seasonality: ["été", "printemps"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "formule-apaisante",
    name: "Formule Apaisante",
    description: "Notre formule apaisante est un mélange d'huiles essentielles, qui vous surprendra par sa couleur bleue. Appliquez-la sur toutes vos rougeurs, éruptions cutanées, cicatrices. Son odeur fraîche et florale, mélange de lavande et camomille, saura vous relaxer lors de son application.",
    imageUrl: "/lovable-uploads/0592f1d5-124f-4219-8fdf-a197d9906a5c.png",
    expectedResults: "Apaisement des rougeurs, éruptions cutanées et cicatrices. Effet relaxant grâce à son odeur fraîche et florale.",
    recommendationReason: "Formule 100% naturelle, pure et active, sans agent de conservation. Sa couleur bleue unique provient de l'azulène de la camomille matricaire et du chamazulène de la camomille bleue.",
    dietaryInfo: "Format : 5 ml. Texture : Huile. Arôme : Frais et floral. Mode d'emploi : Une goutte sur les rougeurs avant l'application du sérum, 3 soirs par semaine. Contient: lavande aspic, géranium bourbon, camomille matricaire, camomille romaine, camomille bleue, sauge officinale, hélichryse italienne",
    productUrl: "https://maisonjacynthe.ca/fr/formule-apaisante",
    categories: ["topique", "peau"],
    scores: [
      { condition: "Rougeurs", score: 5 },
      { condition: "Cicatrisation", score: 4 },
      { condition: "Inflammation", score: 4 }
    ],
    therapeuticClaims: [
      "Apaisante et calmante",
      "Cicatrisante",
      "Anti-inflammatoire",
      "Décongestionnante",
      "100% naturel, pur et actif",
      "Sans agent de conservation"
    ],
    relationships: {
      complementaryProducts: ["bobome", "gel-apaisant", "eau-florale"],
      contraindications: [
        "Ne pas appliquer sur des plaies ouvertes",
        "Faire un test d'allergie avant utilisation",
        "Garder hors de la portée des enfants"
      ]
    },
    usage: {
      timing: "3 soirs par semaine",
      duration: "Selon les besoins",
      dosage: "Une goutte par application",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  }
];