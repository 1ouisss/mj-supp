import { ProductDefinition } from '../productTypes';

export const MENTAL_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "energie-adaptogene",
    name: "Énergie & Adaptogène",
    description: "Supplément énergétique et adaptogène pour accroître l'énergie et la résistance au stress. Formule unique combinant des plantes adaptogènes, des vitamines B et des antioxydants.",
    imageUrl: "/lovable-uploads/b34b8702-e883-457c-80f3-0ede7e7ca946.png",
    expectedResults: "Augmentation rapide de l'énergie et amélioration de la résistance au stress",
    recommendationReason: "Formule complète combinant adaptogènes et vitamines pour un effet énergisant rapide",
    dietaryInfo: "Sans produits laitiers, sans gluten. Contient: Hypromellose, stéarate de magnésium, dioxyde de silicium, farine de riz.",
    productUrl: "https://maisonjacynthe.ca/fr/energie-adaptogene",
    categories: ["énergie", "stress", "concentration", "vitalité"],
    scores: [
      { condition: "Fatigue", score: 5 },
      { condition: "Stress", score: 4 },
      { condition: "Performance physique", score: 4 },
      { condition: "Concentration", score: 3 }
    ],
    therapeuticClaims: [
      "Aide à accroître l'énergie et la résistance au stress",
      "Améliore la consommation d'oxygène musculaire",
      "Améliore les performances lors d'exercices intenses",
      "Source d'antioxydants",
      "Aide au métabolisme de l'énergie",
      "Aide à la formation de globules rouges",
      "NPN: 80129617"
    ],
    relationships: {
      complementaryProducts: ["champignons-adaptogenes", "magnesium", "vitamine-d3"],
      contraindications: ["Contre-indiqué avec certains médicaments pour le cœur ou la pression sanguine"]
    },
    usage: {
      timing: "3 capsules 1 fois par jour avec de la nourriture. Pour la performance: 1 heure avant l'exercice",
      duration: "Consulter un praticien si l'utilisation dépasse 15 jours",
      dosage: "3 capsules par jour",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "some-existing-product-1",
    name: "Existing Product 1",
    description: "Description of existing product 1.",
    imageUrl: "/path/to/image1.png",
    expectedResults: "Expected results for existing product 1.",
    recommendationReason: "Reason for recommending existing product 1.",
    dietaryInfo: "Dietary info for existing product 1.",
    productUrl: "https://example.com/existing-product-1",
    categories: ["mental_health"],
    scores: [
      { condition: "Condition 1", score: 4 },
      { condition: "Condition 2", score: 3 }
    ],
    therapeuticClaims: ["Claim 1", "Claim 2"],
    relationships: {
      complementaryProducts: ["existing-product-2"],
      contraindications: []
    },
    usage: {
      timing: "Usage timing for existing product 1.",
      duration: "Duration for existing product 1.",
      dosage: "Dosage for existing product 1.",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "some-existing-product-2",
    name: "Existing Product 2",
    description: "Description of existing product 2.",
    imageUrl: "/path/to/image2.png",
    expectedResults: "Expected results for existing product 2.",
    recommendationReason: "Reason for recommending existing product 2.",
    dietaryInfo: "Dietary info for existing product 2.",
    productUrl: "https://example.com/existing-product-2",
    categories: ["mental_health"],
    scores: [
      { condition: "Condition 1", score: 5 },
      { condition: "Condition 2", score: 4 }
    ],
    therapeuticClaims: ["Claim 1", "Claim 2"],
    relationships: {
      complementaryProducts: ["existing-product-1"],
      contraindications: []
    },
    usage: {
      timing: "Usage timing for existing product 2.",
      duration: "Duration for existing product 2.",
      dosage: "Dosage for existing product 2.",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
