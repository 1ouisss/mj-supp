import { ProductDefinition } from '../productTypes';

export const GENERAL_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "omega-3-astaxanthine",
    name: "Oméga-3 Concentré & Astaxanthine",
    description: "Source d'acides gras oméga-3 (AEP et ADH) avec astaxanthine pour le maintien d'une bonne santé. Huile de poisson de haute qualité issue d'une pêche écoresponsable.",
    imageUrl: "/lovable-uploads/2819a71f-4f50-4840-8d61-3aec0af84fd1.png",
    expectedResults: "Soutien de la santé cardiovasculaire et des fonctions cérébrales",
    recommendationReason: "Formule concentrée d'oméga-3 avec astaxanthine pour une absorption optimale",
    dietaryInfo: "Contient: Gélatine, glycérine. Source marine.",
    productUrl: "https://maisonjacynthe.ca/fr/omega-3-concentre-astaxanthine",
    categories: ["santé_cardiaque", "cerveau", "santé_générale"],
    scores: [
      { condition: "Santé cardiovasculaire", score: 5 },
      { condition: "Fonctions cognitives", score: 4 },
      { condition: "Santé générale", score: 4 }
    ],
    therapeuticClaims: [
      "Aide à réduire les taux de triglycérides",
      "Aide au maintien de la santé cardiovasculaire",
      "Aide à soutenir la santé cognitive et les fonctions cérébrales",
      "Source d'acides gras oméga-3 (AEP et ADH)",
      "NPN: 80120055"
    ],
    relationships: {
      complementaryProducts: ["vitamine-d3", "complexe-b"],
      contraindications: []
    },
    usage: {
      timing: "2 capsules 1 fois par jour",
      duration: "Usage quotidien",
      dosage: "2 capsules par jour (apport de 2 mg d'astaxanthine)",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "multivitamines-la-totale",
    name: "Multivitamines La Totale",
    description: "Formule complète de multivitamines",
    imageUrl: "/lovable-uploads/f2d4ffb2-0e13-424f-bc29-2acaa73c0a00.png",
    expectedResults: "Couverture optimale des besoins nutritionnels",
    recommendationReason: "Formule complète pour une santé optimale",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/multivitamines-la-totale",
    categories: ["essentiel", "santé_générale"],
    scores: [
      { condition: "Soutien nutritionnel", score: 5 },
      { condition: "Santé générale", score: 5 }
    ],
    therapeuticClaims: [
      "Apport complet en vitamines et minéraux",
      "Soutient la santé globale",
      "Formule complète"
    ],
    relationships: {
      complementaryProducts: ["mineraux"],
      contraindications: []
    },
    usage: {
      timing: "Avec un repas",
      duration: "Usage quotidien",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
