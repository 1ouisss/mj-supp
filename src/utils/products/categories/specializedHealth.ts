import { ProductDefinition } from '../productTypes';

export const SPECIALIZED_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "collagene-marin",
    name: "Collagène Marin",
    description: "Supplément de collagène marin pour la santé des articulations et de la peau",
    imageUrl: "/lovable-uploads/dd6224c3-17c2-4887-ba91-609aa9cd867b.png",
    expectedResults: "Amélioration de la santé articulaire et de la peau",
    recommendationReason: "Support pour la santé des tissus conjonctifs",
    dietaryInfo: "Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/collagene-marin",
    categories: ["articulations", "peau"],
    scores: [
      { condition: "Santé articulaire", score: 5 },
      { condition: "Santé de la peau", score: 5 }
    ],
    therapeuticClaims: [
      "Soutient la santé des articulations",
      "Améliore l'élasticité de la peau",
      "Renforce les tissus conjonctifs"
    ],
    relationships: {
      complementaryProducts: ["vitamine-d3"],
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
    id: "huile-tcm",
    name: "Huile TCM",
    description: "Huile de triglycérides à chaîne moyenne pour l'énergie",
    imageUrl: "/lovable-uploads/98f02f89-7e9c-4bac-8a08-994b109e767a.png",
    expectedResults: "Énergie soutenue et clarté mentale",
    recommendationReason: "Source d'énergie rapide et durable",
    dietaryInfo: "Vegan, Sans gluten, Cétogène",
    productUrl: "https://maisonjacynthe.ca/fr/huile-tcm",
    categories: ["énergie", "cerveau"],
    scores: [
      { condition: "Énergie", score: 5 },
      { condition: "Clarté mentale", score: 4 }
    ],
    therapeuticClaims: [
      "Fournit de l'énergie rapide",
      "Soutient la fonction cognitive",
      "Compatible régime cétogène"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: []
    },
    usage: {
      timing: "Matin ou avant l'effort",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "quest-ce-que-cest",
    name: "Qu'est-ce que c'est?",
    description: "Supplément de silicium pour la santé et la beauté des cheveux, ongles et peau. Contient 25 mg de silicium (acide orthosilicique stabilisé par de la choline) par capsule.",
    imageUrl: "/lovable-uploads/879ae760-3137-401f-9c03-e8988df142e5.png",
    expectedResults: "Amélioration de la santé et de la beauté de la peau, des cheveux et des ongles",
    recommendationReason: "Source naturelle de silicium pour la santé des tissus",
    dietaryInfo: "Sans produits laitiers, blé, gluten, levure ou maïs",
    productUrl: "https://maisonjacynthe.ca/fr/quest-ce-que-cest",
    categories: ["santé_cheveux", "peau", "ongles"],
    scores: [
      { condition: "Santé des cheveux", score: 5 },
      { condition: "Santé de la peau", score: 5 },
      { condition: "Santé des ongles", score: 5 }
    ],
    therapeuticClaims: [
      "Soutient la santé et la beauté de la peau",
      "Favorise la croissance des cheveux",
      "Renforce les ongles",
      "NPN: 80106437"
    ],
    relationships: {
      complementaryProducts: ["collagene-marin"],
      contraindications: []
    },
    usage: {
      timing: "1 capsule, 1 fois par jour",
      duration: "Usage régulier",
      dosage: "1 capsule par jour pour les adultes",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "cocktail-cheveux",
    name: "Cocktail Cheveux",
    description: "Nourrissez vos cheveux de l'intérieur. Une formule unique qui pénètre vos cheveux, les nourrissant à leur plein potentiel pour une chevelure forte et saine.",
    imageUrl: "/lovable-uploads/7fe19697-39eb-46b2-bbe2-366835c10d30.png",
    expectedResults: "Cheveux plus forts et plus sains, ongles renforcés, et amélioration de la santé de la peau",
    recommendationReason: "Formule complète de nutriments essentiels pour la santé des cheveux, des ongles et de la peau",
    dietaryInfo: "Sans OGM, sans gluten, sans allergène, convient aux diabétiques",
    productUrl: "https://maisonjacynthe.ca/fr/cocktail-cheveux",
    categories: ["santé_cheveux", "peau", "ongles"],
    scores: [
      { condition: "Santé des cheveux", score: 5 },
      { condition: "Santé des ongles", score: 4 },
      { condition: "Santé de la peau", score: 4 }
    ],
    therapeuticClaims: [
      "Contribue au maintien d'une chevelure saine",
      "Aide à renforcer les cheveux et les ongles",
      "Prévient une carence en zinc et en cuivre",
      "Fournit un apport en silice",
      "Améliore la fermeté et l'élasticité de la peau",
      "Réduit les rougeurs et les ridules"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: []
    },
    usage: {
      timing: "2 capsules, 2 fois par jour",
      duration: "Usage régulier",
      dosage: "4 capsules par jour pour les adultes",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
