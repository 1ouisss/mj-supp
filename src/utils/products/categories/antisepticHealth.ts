
import { ProductDefinition } from "../productTypes";

export const ANTISEPTIC_HEALTH_PRODUCTS: ProductDefinition[] = [
  {
    id: "respire-bien",
    name: "Respire Bien",
    description: "Formule aromatique pour la santé respiratoire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Dégagement des voies respiratoires et respiration facilitée",
    recommendationReason: "Solution naturelle pour la respiration",
    dietaryInfo: "NPN: 80095447. 100% naturel",
    productUrl: "https://maisonjacynthe.ca/fr/respire-bien",
    categories: ["respiratoire", "antiseptique", "voies_respiratoires"],
    scores: [
      { condition: "Congestion", score: 9 },
      { condition: "Respiration difficile", score: 9 },
      { condition: "Allergies saisonnières", score: 8 }
    ],
    therapeuticClaims: [
      "Aide à dégager les voies respiratoires",
      "Soulage les symptômes du rhume",
      "Propriétés antiseptiques naturelles"
    ],
    relationships: {
      complementaryProducts: ["immunitaire", "vitaminec"],
      contraindications: []
    },
    usage: {
      timing: "Selon les besoins",
      duration: "Usage ponctuel",
      seasonality: ["automne", "hiver"]
    },
    timeFrame: "court_terme"
  },
  {
    id: "synergie-fraicheur",
    name: "Synergie Fraîcheur",
    description: "Mélange d'huiles essentielles purifiantes",
    imageUrl: "/placeholder.svg",
    expectedResults: "Purification de l'air et bien-être respiratoire",
    recommendationReason: "Solution naturelle pour l'air ambiant",
    dietaryInfo: "Usage externe uniquement",
    productUrl: "https://maisonjacynthe.ca/fr/synergie-fraicheur",
    categories: ["antiseptique", "respiratoire", "voies_respiratoires"],
    scores: [
      { condition: "Qualité de l'air", score: 9 },
      { condition: "Respiration", score: 8 },
      { condition: "Bien-être", score: 8 }
    ],
    therapeuticClaims: [
      "Purifie l'air ambiant",
      "Propriétés antiseptiques naturelles",
      "Favorise une respiration saine"
    ],
    relationships: {
      complementaryProducts: ["respireBien", "immunitaire"],
      contraindications: []
    },
    usage: {
      timing: "Usage quotidien ou selon les besoins",
      duration: "Usage régulier",
      seasonality: ["toute_année"]
    },
    timeFrame: "long_terme"
  },
  {
    id: "miel-protecteur",
    name: "Miel Protecteur",
    description: "Formule naturelle pour la gorge et le système respiratoire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soulagement de la gorge et soutien respiratoire",
    recommendationReason: "Solution naturelle pour la gorge",
    dietaryInfo: "NPN: 80095448. Contient du miel",
    productUrl: "https://maisonjacynthe.ca/fr/miel-protecteur",
    categories: ["gorge", "respiratoire", "antiseptique"],
    scores: [
      { condition: "Irritation gorge", score: 9 },
      { condition: "Toux", score: 8 },
      { condition: "Confort respiratoire", score: 8 }
    ],
    therapeuticClaims: [
      "Soulage les irritations de la gorge",
      "Propriétés antiseptiques naturelles",
      "Aide à apaiser la toux"
    ],
    relationships: {
      complementaryProducts: ["respireBien", "immunitaire"],
      contraindications: []
    },
    usage: {
      timing: "3-4 fois par jour",
      duration: "Usage ponctuel",
      seasonality: ["automne", "hiver"]
    },
    timeFrame: "court_terme"
  }
];
