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
  }
];
