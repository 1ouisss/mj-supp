
import { SLEEP_RELAXATION_PRODUCTS } from './categories/sleepRelaxation';
import { DIGESTIVE_HEALTH_PRODUCTS } from './categories/digestiveHealth';
import { MENTAL_HEALTH_PRODUCTS } from './categories/mentalHealth';
import { SPECIALIZED_HEALTH_PRODUCTS } from './categories/specializedHealth';
import { GENERAL_HEALTH_PRODUCTS } from './categories/generalHealth';
import { IMMUNITY_HEALTH_PRODUCTS } from './categories/immunityHealth';
import { BRAIN_HEALTH_PRODUCTS } from './categories/brainHealth';
import { ENERGY_HEALTH_PRODUCTS } from './categories/energyHealth';
import { VITAMIN_HEALTH_PRODUCTS } from './categories/vitaminHealth';
import { ANTISEPTIC_HEALTH_PRODUCTS } from './categories/antisepticHealth';
import { ProductDefinition } from './productTypes';

// Local product database
const MIGRAINE_THYROID_PRODUCTS: ProductDefinition[] = [
  {
    id: "coq10-1",
    name: "Coenzyme Q10",
    description: "Antioxydant puissant pour la santé cardiovasculaire et la gestion des migraines",
    imageUrl: "/placeholder.svg",
    expectedResults: "Réduction de la fréquence et de l'intensité des migraines",
    recommendationReason: "Solution naturelle pour les migraines chroniques",
    dietaryInfo: "Sans gluten, végétarien",
    productUrl: "https://maisonjacynthe.ca/fr/coenzyme-q10",
    categories: ["migraine", "santé_cardiaque", "antioxydant"],
    scores: [
      { condition: "Migraines fréquentes", score: 9 },
      { condition: "Fatigue chronique", score: 7 }
    ],
    therapeuticClaims: [
      "Aide à réduire la fréquence des migraines",
      "Soutient la santé cardiovasculaire",
      "Puissant antioxydant",
      "Aide à maintenir les niveaux d'énergie"
    ],
    relationships: {
      complementaryProducts: ["Magnésium", "Oméga-3"],
      contraindications: []
    },
    usage: {
      timing: "Matin et soir",
      duration: "Usage quotidien",
      dosage: "100-200mg par jour"
    },
    timeFrame: "long_terme"
  },
  {
    id: "selenium-1",
    name: "Sélénium",
    description: "Minéral essentiel pour la fonction thyroïdienne et le système immunitaire",
    imageUrl: "/placeholder.svg",
    expectedResults: "Soutien optimal de la fonction thyroïdienne",
    recommendationReason: "Support naturel pour la santé de la thyroïde",
    dietaryInfo: "Sans gluten, végétarien",
    productUrl: "https://maisonjacynthe.ca/fr/selenium",
    categories: ["thyroïde", "immunité", "antioxydant"],
    scores: [
      { condition: "Problèmes de thyroïde", score: 9 },
      { condition: "Système immunitaire affaibli", score: 7 }
    ],
    therapeuticClaims: [
      "Soutient la fonction thyroïdienne normale",
      "Contribue à la protection des cellules contre le stress oxydatif",
      "Aide au fonctionnement normal du système immunitaire",
      "Contribue à la formation normale des cheveux et des ongles"
    ],
    relationships: {
      complementaryProducts: ["Zinc", "Magnésium"],
      contraindications: []
    },
    usage: {
      timing: "Avec un repas",
      duration: "Usage quotidien",
      dosage: "100-200mcg par jour"
    },
    timeFrame: "long_terme"
  }
];

// Update product images in their respective category files
const LOCAL_PRODUCT_IMAGES = {
  "Focus": "/lovable-uploads/08b3afe7-d173-4bc6-b68b-575f171df2ff.png",
  "La Totale": "/lovable-uploads/81fe24a0-70fe-4718-b8e3-db356eb4cd93.png",
  "Complexe B": "/lovable-uploads/9e2a27a2-80a8-45c6-a120-57d6f9250958.png",
  "Mineral Drop": "/lovable-uploads/32c160a9-abc3-47bd-b0ad-507c4dec3c50.png",
  "Vitamine D & K": "/lovable-uploads/0def73d4-861c-4e96-8a86-247966b03669.png"
};

// Update the products array
export const PRODUCTS: ProductDefinition[] = [
  ...SLEEP_RELAXATION_PRODUCTS,
  ...DIGESTIVE_HEALTH_PRODUCTS,
  ...MENTAL_HEALTH_PRODUCTS,
  ...SPECIALIZED_HEALTH_PRODUCTS,
  ...GENERAL_HEALTH_PRODUCTS,
  ...IMMUNITY_HEALTH_PRODUCTS,
  ...BRAIN_HEALTH_PRODUCTS,
  ...ENERGY_HEALTH_PRODUCTS,
  ...VITAMIN_HEALTH_PRODUCTS,
  ...ANTISEPTIC_HEALTH_PRODUCTS
].map(product => ({
  ...product,
  imageUrl: LOCAL_PRODUCT_IMAGES[product.name] || product.imageUrl
}));
