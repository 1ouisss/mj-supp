import { ProductDefinition } from '../productTypes';

export const SLEEP_RELAXATION_PRODUCTS: ProductDefinition[] = [
  {
    id: "melatonine",
    name: "Mélatonine",
    description: "Aide naturelle pour améliorer la qualité du sommeil et réduire l'insomnie.",
    imageUrl: "/lovable-uploads/44cf3f14-98a1-43e6-b5f4-e1ddcbda3d93.png",
    expectedResults: "Sommeil réparateur, réduction des troubles du sommeil",
    recommendationReason: "Solution naturelle pour le sommeil",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/melatonine-cerise",
    categories: ["sommeil", "relaxation"],
    scores: [
      { condition: "Améliorer le sommeil", score: 5 },
      { condition: "Difficulté à se détendre ou à dormir", score: 5 }
    ],
    therapeuticClaims: [
      "Améliore l'endormissement",
      "Réduit les réveils nocturnes",
      "Aide à l'endormissement naturel",
      "Régulation du cycle circadien"
    ],
    relationships: {
      complementaryProducts: ["magnesium", "poudre-dodo"],
      contraindications: ["Grossesse", "Allaitement"]
    },
    usage: {
      timing: "Prendre 30 minutes avant le coucher",
      duration: "Utilisation ponctuelle recommandée",
      dosage: "1-3mg selon les besoins",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "poudre-dodo",
    name: "Poudre Dodo",
    description: "Super poudre apaisante pour un sommeil naturel et réparateur",
    imageUrl: "/lovable-uploads/ef8d4c63-b573-46d0-9be3-4033e7cca34b.png",
    expectedResults: "Sommeil profond et relaxation naturelle",
    recommendationReason: "Solution naturelle pour le sommeil",
    dietaryInfo: "Vegan, Sans gluten, Orale/Oral 90g",
    productUrl: "https://maisonjacynthe.ca/fr/poudre-dodo",
    categories: ["sommeil", "relaxation"],
    scores: [
      { condition: "Améliorer le sommeil", score: 5 },
      { condition: "Stress nocturne", score: 4 }
    ],
    therapeuticClaims: [
      "Favorise un sommeil naturel",
      "Aide à la relaxation",
      "Soutient la qualité du sommeil"
    ],
    relationships: {
      complementaryProducts: ["magnesium", "melatonine"],
      contraindications: []
    },
    usage: {
      timing: "Prendre 30 minutes avant le coucher",
      duration: "Utilisation quotidienne possible",
      seasonality: ["toute_année"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "magnesium",
    name: "Magnésium",
    description: "Minéral essentiel pour la relaxation musculaire et nerveuse.",
    imageUrl: "/lovable-uploads/13e46990-e5e0-4bd3-8238-5682ce7a6045.png",
    expectedResults: "Détente musculaire et mentale",
    recommendationReason: "Soutien pour la relaxation",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/magnesium",
    categories: ["relaxation", "stress", "muscles"],
    scores: [
      { condition: "Gérer le stress", score: 5 },
      { condition: "Améliorer le sommeil", score: 4 },
      { condition: "Douleurs musculaires", score: 4 }
    ],
    therapeuticClaims: [
      "Relaxation musculaire profonde",
      "Réduction du stress chronique",
      "Soutien du système nerveux"
    ],
    relationships: {
      complementaryProducts: ["melatonine"],
      contraindications: ["Insuffisance rénale"]
    },
    usage: {
      timing: "Prendre le soir pour la relaxation",
      duration: "Utilisation quotidienne recommandée",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "respire-bien",
    name: "Respire Bien",
    description: "Support naturel pour la respiration, à vaporiser (2 ans et plus)",
    imageUrl: "/lovable-uploads/4ad65483-777a-46cb-9ec8-2728ee8022e3.png",
    expectedResults: "Respiration facilitée et voies respiratoires dégagées",
    recommendationReason: "Soutien respiratoire naturel",
    dietaryInfo: "Vaporisateur 30ml, NPN 80131370",
    productUrl: "https://maisonjacynthe.ca/fr/respire-bien",
    categories: ["saisonnier", "gorge"],
    scores: [
      { condition: "Problèmes respiratoires", score: 5 },
      { condition: "Congestion", score: 4 }
    ],
    therapeuticClaims: [
      "Soutient la santé respiratoire",
      "Aide à dégager les voies respiratoires"
    ],
    relationships: {
      complementaryProducts: [],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage ponctuel ou régulier",
      seasonality: ["hiver", "printemps"]
    },
    timeFrame: "court_terme"
  }
];