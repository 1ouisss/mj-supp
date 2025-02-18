
import { ProductDefinition } from "../productTypes";

export const HORMONE_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "equilibre-hormonal",
    name: "Équilibre Hormonal",
    description: "Complexe naturel pour l'équilibre hormonal",
    imageUrl: "/placeholder.svg",
    expectedResults: "Meilleur équilibre hormonal et bien-être général",
    recommendationReason: "Support naturel pour l'équilibre hormonal",
    dietaryInfo: "Sans gluten, végétarien",
    productUrl: "https://maisonjacynthe.ca/fr/equilibre-hormonal",
    categories: ["hormones", "santé_femme", "adaptogène"],
    scores: [
      { condition: "Déséquilibre hormonal", score: 5 },
      { condition: "Symptômes prémenstruels", score: 4 }
    ],
    therapeuticClaims: [
      "Aide à équilibrer les hormones naturellement",
      "Soutient le bien-être féminin",
      "Contribue à réduire les symptômes hormonaux"
    ],
    relationships: {
      complementaryProducts: ["omega-3", "magnesium"],
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
    id: "thyro-plus",
    name: "Thyro Plus",
    description: "Support naturel pour la fonction thyroïdienne",
    imageUrl: "/placeholder.svg",
    expectedResults: "Meilleur fonctionnement de la thyroïde",
    recommendationReason: "Soutien optimal de la thyroïde",
    dietaryInfo: "Sans allergènes majeurs",
    productUrl: "https://maisonjacynthe.ca/fr/thyro-plus",
    categories: ["thyroïde", "hormones", "métabolisme"],
    scores: [
      { condition: "Fonction thyroïdienne", score: 5 },
      { condition: "Métabolisme", score: 4 }
    ],
    therapeuticClaims: [
      "Soutient la fonction thyroïdienne",
      "Aide à maintenir un métabolisme sain",
      "Contribue à l'équilibre hormonal"
    ],
    relationships: {
      complementaryProducts: ["selenium", "zinc"],
      contraindications: []
    },
    usage: {
      timing: "Matin",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "meno-harmonie",
    name: "Méno-Harmonie",
    description: "Formule naturelle pour la ménopause",
    imageUrl: "/placeholder.svg",
    expectedResults: "Réduction des symptômes de la ménopause",
    recommendationReason: "Support naturel pendant la ménopause",
    dietaryInfo: "Sans gluten, végétarien",
    productUrl: "https://maisonjacynthe.ca/fr/meno-harmonie",
    categories: ["ménopause", "hormones", "santé_femme"],
    scores: [
      { condition: "Symptômes ménopause", score: 5 },
      { condition: "Bouffées de chaleur", score: 4 }
    ],
    therapeuticClaims: [
      "Aide à réduire les bouffées de chaleur",
      "Soutient l'équilibre hormonal",
      "Favorise le bien-être pendant la ménopause"
    ],
    relationships: {
      complementaryProducts: ["equilibre-hormonal", "magnesium"],
      contraindications: []
    },
    usage: {
      timing: "Quotidien",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  }
];
