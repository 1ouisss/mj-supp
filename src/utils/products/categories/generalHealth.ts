import { ProductDefinition } from "../productTypes";

export const GENERAL_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "soutien-sante",
    name: "Soutien Santé",
    description: "Pour vivre bien longtemps, s'adressant aux 5 axes du vieillissement, selon une formulation épatante qui réunit quatorze ingrédients judicieusement choisis, dont le Resvératrol et un extrait à haute teneur en hydroxytyrosol.",
    imageUrl: "/lovable-uploads/341b7f5b-bb0d-4e06-a94c-cca915a582f4.png",
    expectedResults: "Aide à améliorer les fonctions cognitives, maintenir la santé des os, des cheveux, des ongles et de la peau, et soutient le système immunitaire.",
    recommendationReason: "Formule complète qui combine des antioxydants puissants avec des nutriments essentiels pour une santé optimale.",
    dietaryInfo: "Sans allergènes majeurs. Prendre avec de la nourriture pour éviter les problèmes digestifs.",
    productUrl: "https://www.maisonjacynthe.ca/fr/soutien-sante",
    categories: [
      "santé_générale",
      "immunité",
      "cerveau",
      "articulations",
      "digestif",
      "santé_osseuse",
      "santé_cheveux",
      "peau",
      "ongles",
      "vitalité"
    ],
    scores: [
      { condition: "Améliorer la santé générale", score: 95 },
      { condition: "Soutenir le système immunitaire", score: 90 },
      { condition: "Améliorer les fonctions cognitives", score: 85 },
      { condition: "Santé des articulations", score: 80 },
      { condition: "Améliorer la digestion", score: 75 }
    ],
    therapeuticClaims: [
      "Aide à améliorer les fonctions cognitives et la mémoire",
      "Contribue au maintien de la circulation périphérique",
      "Soutient le développement et le maintien des os et du cartilage",
      "Source d'antioxydants pour le maintien d'une bonne santé",
      "Agent hépatoprotecteur et protecteur du foie",
      "Aide à soulager la douleur articulaire",
      "Soutient le système immunitaire"
    ],
    relationships: {
      complementaryProducts: ["metabzen"],
      contraindications: [
        "antibiotiques",
        "nitroglycérine",
        "produits affectant la coagulation sanguine"
      ]
    },
    usage: {
      timing: "1 capsule 3 fois par jour",
      duration: "Consulter un praticien pour un usage au-delà de 4 semaines",
      dosage: "Prendre avec de la nourriture",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
