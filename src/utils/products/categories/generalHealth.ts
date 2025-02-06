import { ProductDefinition } from '../productTypes';

export const GENERAL_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "omega-3",
    name: "Multivitamines La Totale",
    description: "Complexe complet de vitamines et minéraux essentiels.",
    imageUrl: "/lovable-uploads/9fe3dcb7-455a-4684-af23-43bb9a63de07.png",
    expectedResults: "Soutien nutritionnel complet 🌟",
    recommendationReason: "Base nutritionnelle essentielle",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/multivitamines",
    categories: ["santé_générale", "essentiel", "long_terme"],
    scores: [
      { condition: "Soutien nutritionnel", score: 5 },
      { condition: "Santé générale", score: 5 }
    ],
    therapeuticClaims: [
      "Apport quotidien en vitamines et minéraux",
      "Soutien du système immunitaire",
      "Énergie et vitalité"
    ],
    relationships: {
      complementaryProducts: ["magnesium"],
      contraindications: []
    },
    usage: {
      timing: "Prendre avec un repas",
      duration: "Utilisation quotidienne recommandée",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "mineral-drop",
    name: "Minéral Drop",
    description: "Ce produit contient des traces de 70 minéraux et oligo-éléments naturels présents dans le Grand Lac Salé, une mer intérieure.",
    imageUrl: "/lovable-uploads/073c03dc-0bd2-4551-9b1f-a52350133301.png",
    expectedResults: "Aide au métabolisme des glucides, protéines et graisses. Contribue au développement des os et des dents.",
    recommendationReason: "Source naturelle de magnésium et potassium, idéal pour le maintien d'une bonne santé.",
    dietaryInfo: "Pour adultes uniquement. Format: 4 oz. NPN: 80041396",
    productUrl: "https://maisonjacynthe.ca/fr/mineral-drop",
    categories: ["santé_générale", "essentiel", "muscles", "santé_osseuse"],
    scores: [
      { condition: "Santé générale", score: 5 },
      { condition: "Santé osseuse", score: 4 },
      { condition: "Fonction musculaire", score: 4 }
    ],
    therapeuticClaims: [
      "Aide l'organisme à métaboliser les glucides, protéines et graisses",
      "Contribue au développement et à l'entretien des os et des dents",
      "Contribue à la formation des tissus",
      "Contribue au bon fonctionnement des muscles"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: []
    },
    usage: {
      timing: "Mélanger 1 bouchon avec 1 L de liquide",
      duration: "Selon les besoins lors d'un exercice physique intense",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
