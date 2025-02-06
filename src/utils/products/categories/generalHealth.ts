import { ProductDefinition } from '../productTypes';

export const GENERAL_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "multivitamines-la-totale",
    name: "Multivitamines La Totale",
    description: "Complexe complet de vitamines et minéraux essentiels. Ce supplément fournit plus de 40 vitamines, minéraux et antioxydants essentiels pour le maintien d'une bonne santé.",
    imageUrl: "/lovable-uploads/e4f212e6-cdf3-49b2-9ca9-d07da61b3d4c.png",
    expectedResults: "Soutien nutritionnel complet pour la santé générale, incluant la santé des os, des cheveux, de la peau, des ongles et du système immunitaire.",
    recommendationReason: "Formule complète offrant une multitude de bienfaits pour votre corps avec plus de 40 nutriments essentiels.",
    dietaryInfo: "Format: 100 comprimés à croquer. NPN: 80117096. Contient des bioflavonoïdes d'agrumes et des antioxydants naturels.",
    productUrl: "https://maisonjacynthe.ca/fr/multivitamines-la-totale",
    categories: [
      "santé_générale",
      "essentiel",
      "long_terme",
      "santé_osseuse",
      "immunité",
      "peau",
      "santé_cheveux",
      "ongles",
      "thyroïde",
      "santé_cardiaque",
      "métabolisme"
    ],
    scores: [
      { condition: "Soutien nutritionnel", score: 5 },
      { condition: "Santé générale", score: 5 },
      { condition: "Immunité", score: 4 },
      { condition: "Santé osseuse", score: 4 },
      { condition: "Métabolisme", score: 4 }
    ],
    therapeuticClaims: [
      "Aide au maintien des os et à prévenir la perte osseuse/l'ostéoporose",
      "Aide à maintenir le métabolisme normal du fer",
      "Aide au maintien de la santé des cheveux, de la peau, des ongles, des gencives et des dents",
      "Aide au maintien des fonctions immunitaires",
      "Aide au maintien des muscles dont celui du cœur",
      "Aide au fonctionnement normal de la glande thyroïde",
      "Favorise la cicatrisation des blessures",
      "Aide au maintien de la production d'énergie",
      "Aide au maintien des fonctions hépatiques"
    ],
    relationships: {
      complementaryProducts: ["mineral-drop", "omega-3"],
      contraindications: []
    },
    usage: {
      timing: "Prendre avec de la nourriture/un repas",
      dosage: "3 - 5 comprimés, 1 fois par jour",
      duration: "Consulter un praticien de soins de santé si l'usage se prolonge au-delà de 12 semaines",
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