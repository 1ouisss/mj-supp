import { ProductDefinition } from "../productTypes";

export const GENERAL_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "collagene-marin",
    name: "Collagène Marin + Acide Hyaluronique",
    description: "Délicieux, au goût de limonade, sans sucre ajouté, notre collagène marin est combiné à l'acide hyaluronique, ce qui en fait une formule gagnante. Emballé dans un sac Omnidegradable® respectueux de l'environnement.",
    imageUrl: "/lovable-uploads/9415d79b-277c-4a45-8c82-88d980033468.png",
    expectedResults: "Aide au maintien d'articulations saines et à réduire la douleur articulaire associée à l'arthrose et l'ostéoarthrite",
    recommendationReason: "Formule hautement biodisponible combinant collagène marin et acide hyaluronique, fournissant 8g de protéine par portion",
    dietaryInfo: "Format: 300g, NPN: 80113524. Ingrédients médicinaux par portion: Acide hyaluronique 120mg, Collagène hydrolysé (Poisson) 10g. Non-végane mais provient de sources durables.",
    productUrl: "https://maisonjacynthe.ca/fr/collagene-marin",
    categories: ["santé_générale", "articulations", "peau"],
    scores: [
      { condition: "Santé articulaire", score: 5 },
      { condition: "Santé de la peau", score: 4 },
      { condition: "Douleur articulaire", score: 4 }
    ],
    therapeuticClaims: [
      "Aide au maintien d'articulations saines",
      "Aide à réduire la douleur aux articulations associée à l'arthrose",
      "Hautement biodisponible et facilement absorbé",
      "Fournit 8g de protéine par portion",
      "Provient de sources durables et d'une pêche écoresponsable"
    ],
    relationships: {
      complementaryProducts: ["huile-tcm", "complet"],
      contraindications: [
        "Consulter un praticien de santé si enceinte ou allaitante",
        "Cesser l'utilisation en cas de diarrhée, douleur abdominale, brûlements, nausée ou vomissements"
      ]
    },
    usage: {
      timing: "1 portion de 5 cuillères à thé (13g) 1 fois par jour",
      duration: "Utiliser pendant au moins 5 mois pour constater les effets bénéfiques",
      dosage: "Mélanger dans 1 à 2 tasses de liquide avant consommation",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
