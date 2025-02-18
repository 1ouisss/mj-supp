
import { ProductDefinition } from "../productTypes";

export const GENERAL_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "collagene-marin",
    name: "Collagène Marin + Acide Hyaluronique",
    description: "Délicieux, au goût de limonade, sans sucre ajouté, notre collagène marin est combiné à l'acide hyaluronique",
    imageUrl: "/lovable-uploads/9415d79b-277c-4a45-8c82-88d980033468.png",
    expectedResults: "Aide au maintien d'articulations saines et à réduire la douleur articulaire",
    recommendationReason: "Formule hautement biodisponible combinant collagène marin et acide hyaluronique",
    dietaryInfo: "Format: 300g, NPN: 80113524",
    productUrl: "https://maisonjacynthe.ca/fr/collagene-marin",
    categories: ["articulations", "peau"],
    scores: [
      { condition: "Santé articulaire", score: 5 },
      { condition: "Santé de la peau", score: 4 },
      { condition: "Douleur articulaire", score: 4 }
    ],
    therapeuticClaims: [
      "Aide au maintien d'articulations saines",
      "Aide à réduire la douleur aux articulations associée à l'arthrose/l'ostéoarthrite"
    ],
    relationships: {
      complementaryProducts: ["omega-3", "vitamine-c"],
      contraindications: []
    },
    usage: {
      timing: "1 portion par jour",
      duration: "Utiliser pendant au moins 5 mois pour constater les effets bénéfiques",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "soutien-sante",
    name: "Soutien Santé",
    description: "Formule complète pour le soutien de la santé générale",
    imageUrl: "/lovable-uploads/81fe24a0-70fe-4718-b8e3-db356eb4cd93.png",
    expectedResults: "Soutien global de la santé et du bien-être",
    recommendationReason: "Formule complète avec curcuma, vitamine D et champignons adaptogènes",
    dietaryInfo: "NPN : 80128737",
    productUrl: "https://maisonjacynthe.ca/fr/soutien-sante",
    categories: ["santé_générale", "immunité", "articulations"],
    scores: [
      { condition: "Santé générale", score: 5 },
      { condition: "Inflammation", score: 4 },
      { condition: "Système immunitaire", score: 4 }
    ],
    therapeuticClaims: [
      "Aide à soulager la douleur articulaire (curcuma)",
      "Agent hépatoprotecteur et protecteur du foie",
      "Facilite la digestion",
      "Aide à prévenir une carence en vitamine D",
      "Source de polysaccharides fongiques ayant des propriétés immunomodulatrices",
      "Aide à accroître l'énergie et la résistance au stress",
      "Améliore les fonctions cognitives et la mémoire"
    ],
    relationships: {
      complementaryProducts: ["probiotiques", "magnesium"],
      contraindications: []
    },
    usage: {
      timing: "Selon les indications",
      duration: "Usage régulier recommandé",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
