import { ProductDefinition } from '../productTypes';

export const GENERAL_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "mineral-complex-80111171",
    name: "Pourquoi des Minéraux?",
    description: "Les multiminéraux sont un facteur contribuant au maintien d'une bonne santé. C'est pourquoi des minéraux sont propices à considérer comme supplément.",
    imageUrl: "/lovable-uploads/fcce943d-10c8-4c09-9f73-b3ff9a3a08b9.png",
    expectedResults: "Aide au maintien des fonctions immunitaires, au métabolisme de l'énergie, à la formation des tissus et des globules rouges, et au maintien de la santé des os, de la peau, des cheveux et des ongles.",
    recommendationReason: "Supplément complet de minéraux essentiels pour la santé générale et le maintien des fonctions corporelles.",
    dietaryInfo: "Format: 90 capsules, NPN: 80111171. Sans produits laitiers, blé, gluten, levure ou maïs.",
    productUrl: "https://maisonjacynthe.ca/fr/pourquoi-des-mineraux",
    categories: [
      "santé_générale",
      "immunité",
      "santé_osseuse",
      "santé_cheveux",
      "peau",
      "ongles",
      "muscles",
      "thyroïde",
      "santé_cardiaque",
      "métabolisme"
    ],
    scores: [
      { condition: "santé_générale", score: 95 },
      { condition: "immunité", score: 90 },
      { condition: "santé_osseuse", score: 85 },
      { condition: "métabolisme", score: 85 }
    ],
    therapeuticClaims: [
      "Soutient le système immunitaire",
      "Aide au métabolisme de l'énergie",
      "Contribue à la formation des tissus",
      "Aide à la formation de globules rouges",
      "Maintient la santé de la peau et des cheveux",
      "Soutient le fonctionnement musculaire et cardiaque",
      "Aide au fonctionnement de la thyroïde",
      "Contribue à l'équilibre électrolytique"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: ["Ne pas utiliser ce produit avec d'autres suppléments contenant du potassium ou avec d'autres succédanés du sel contenant du potassium."]
    },
    usage: {
      timing: "Prendre avec de la nourriture",
      dosage: "2 capsules 1 fois par jour",
      duration: "Usage quotidien",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
