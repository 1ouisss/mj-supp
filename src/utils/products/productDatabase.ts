import { ProductDefinition } from './productTypes';

export const PRODUCTS: ProductDefinition[] = [
  {
    id: "melatonine",
    name: "Mélatonine",
    description: "Aide naturelle pour améliorer la qualité du sommeil et réduire l'insomnie.",
    imageUrl: "/lovable-uploads/22745bb0-8d77-4396-a470-13ee7a473f54.png",
    expectedResults: "Sommeil réparateur, réduction des troubles du sommeil 🌙",
    recommendationReason: "Aide naturelle pour le sommeil et la relaxation",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/melatonine-cerise",
    categories: ["relaxation", "sleep"],
    scores: [
      { condition: "Améliorer le sommeil", score: 3 },
      { condition: "Gérer le stress", score: 2 }
    ],
    therapeuticClaims: ["Troubles du sommeil", "Insomnie"]
  },
  {
    id: "magnesium",
    name: "Magnésium",
    description: "Essentiel pour la relaxation musculaire et nerveuse.",
    imageUrl: "/lovable-uploads/1b29c20b-ccd6-4eae-a0cd-81d85ed7aeae.png",
    expectedResults: "Réduction du stress, meilleure qualité de sommeil, soutien musculaire 🛌",
    recommendationReason: "Soutien pour la relaxation et le stress",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/capsules-vegetales-magnesium",
    categories: ["relaxation", "stress", "muscle"],
    scores: [
      { condition: "Améliorer le sommeil", score: 2 },
      { condition: "Gérer le stress", score: 3 },
      { condition: "Aide à la récupération et réparation musculaire", score: 2 }
    ],
    therapeuticClaims: ["Stress", "Tension musculaire", "Fatigue"]
  },
  {
    id: "poudre-dodo",
    name: "Poudre Dodo",
    description: "Mélange naturel pour favoriser le sommeil profond.",
    imageUrl: "/lovable-uploads/7c391ca6-e829-4dbb-ab08-3882ec7920b7.png",
    expectedResults: "Amélioration de l'endormissement, sommeil apaisant 😴",
    recommendationReason: "Solution naturelle pour le sommeil",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/dodo-super-poudre",
    categories: ["relaxation", "sleep"],
    scores: [
      { condition: "Améliorer le sommeil", score: 3 },
      { condition: "Gérer le stress", score: 2 }
    ],
    therapeuticClaims: ["Insomnie", "Anxiété nocturne"]
  },
  {
    id: "respire-bien",
    name: "Respire Bien",
    description: "Aide à calmer le système respiratoire pour un meilleur repos.",
    imageUrl: "/lovable-uploads/09828cf6-98cd-4248-959b-2afb82d3781f.png",
    expectedResults: "Détente physique, amélioration de la respiration 💨",
    recommendationReason: "Soutien respiratoire et relaxation",
    dietaryInfo: "100% Naturel",
    productUrl: "https://maisonjacynthe.ca/fr/respire-bien-vapo",
    categories: ["relaxation", "seasonal"],
    scores: [
      { condition: "Améliorer le sommeil", score: 2 },
      { condition: "Problèmes respiratoires", score: 3 }
    ],
    therapeuticClaims: ["Congestion", "Respiration difficile"]
  },
  {
    id: "jus-aloes",
    name: "Jus d'Aloès",
    description: "Boisson naturelle pour soutenir la santé digestive.",
    imageUrl: "/lovable-uploads/8fe4ae95-85e6-4127-a217-447d2915f2f0.png",
    expectedResults: "Amélioration de la digestion, soulagement des maux d'estomac 🍃",
    recommendationReason: "Soutien digestif naturel",
    dietaryInfo: "100% Naturel, Vegan",
    productUrl: "https://maisonjacynthe.ca/fr/jus-d-aloes",
    categories: ["digestive"],
    scores: [
      { condition: "Améliorer la digestion", score: 3 },
      { condition: "Problèmes digestifs", score: 3 }
    ],
    therapeuticClaims: ["Troubles digestifs", "Inflammation intestinale"]
  },
  {
    id: "fibres-ami",
    name: "Fibres & l'Ami",
    description: "Mélange riche en fibres pour soutenir la santé intestinale.",
    imageUrl: "/lovable-uploads/20a35551-6b6b-4876-8c89-8bc7c88782cc.png",
    expectedResults: "Amélioration du transit intestinal, soutien digestif 🥗",
    recommendationReason: "Santé digestive optimale",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/duo-de-base-pour-un-ventre-plat",
    categories: ["digestive"],
    scores: [
      { condition: "Problèmes digestifs", score: 3 },
      { condition: "Améliorer la digestion", score: 3 }
    ],
    therapeuticClaims: ["Transit intestinal", "Santé digestive"]
  },
  {
    id: "focus",
    name: "Focus",
    description: "Aide à la concentration et à la clarté mentale.",
    imageUrl: "/lovable-uploads/75ff84e8-c303-4908-9110-609c7e765eec.png",
    expectedResults: "Amélioration de la concentration et de la mémoire 💡",
    recommendationReason: "Soutien cognitif et mental",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/focus",
    categories: ["brain", "concentration"],
    scores: [
      { condition: "Soutenir la santé cérébrale", score: 3 },
      { condition: "Améliorer l'énergie", score: 2 }
    ],
    therapeuticClaims: ["Concentration", "Mémoire", "Clarté mentale"]
  },
  {
    id: "zinc",
    name: "Zinc",
    description: "Soutient le système immunitaire et la santé de la peau.",
    imageUrl: "/lovable-uploads/69fac7c4-db16-461e-bdbe-8322e037ddcb.png",
    expectedResults: "Renforcement immunitaire, réduction des inflammations cutanées 🛡️",
    recommendationReason: "Soutien immunitaire et cutané",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/zinc-cuivre",
    categories: ["immune", "skin"],
    scores: [
      { condition: "Problèmes de peau", score: 3 },
      { condition: "Renforcer l'immunité", score: 3 }
    ],
    therapeuticClaims: ["Immunité", "Santé de la peau"]
  },
  {
    id: "omega-3",
    name: "Oméga-3",
    description: "Soutient la santé cardiovasculaire et cérébrale.",
    imageUrl: "/lovable-uploads/9b2bbab2-451b-4cae-993b-bbe8ddd50663.png",
    expectedResults: "Soutien cognitif et cardiovasculaire 🧠",
    recommendationReason: "Santé cognitive et cardiaque",
    dietaryInfo: "Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/omega-astaxanthine",
    categories: ["brain", "heart_health"],
    scores: [
      { condition: "Soutenir la santé cérébrale", score: 3 },
      { condition: "Préoccupations cardiovasculaires", score: 3 }
    ],
    therapeuticClaims: ["Santé cardiovasculaire", "Fonction cognitive"]
  },
  {
    id: "cocktail-cheveux",
    name: "Cocktail Cheveux",
    description: "Soutien pour des cheveux plus épais et plus forts.",
    imageUrl: "/lovable-uploads/cf2a70e5-72c3-43e4-b261-cd5d17373860.png",
    expectedResults: "Amélioration de la santé capillaire 💇‍♀️",
    recommendationReason: "Santé et beauté des cheveux",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/cocktail-cheveux",
    categories: ["hair_health"],
    scores: [
      { condition: "Problèmes de peau", score: 2 }
    ],
    therapeuticClaims: ["Santé des cheveux", "Force capillaire"]
  },
  {
    id: "formule-menopause",
    name: "Formule Ménopause",
    description: "Soutien naturel pour les symptômes de la ménopause.",
    imageUrl: "/lovable-uploads/placeholder.svg",
    expectedResults: "Réduction des symptômes de la ménopause 🌸",
    recommendationReason: "Équilibre hormonal naturel",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/formule-menopause",
    categories: ["hormonal_health"],
    scores: [
      { condition: "Gestion des symptômes de la ménopause ou du SPM", score: 3 }
    ],
    therapeuticClaims: ["Symptômes de la ménopause", "Équilibre hormonal"]
  },
  {
    id: "coenzyme-q10",
    name: "Coenzyme Q10",
    description: "Soutien pour la santé cardiovasculaire et la gestion des migraines.",
    imageUrl: "/lovable-uploads/placeholder.svg",
    expectedResults: "Réduction des migraines, soutien énergétique ⚡",
    recommendationReason: "Gestion des migraines et énergie cellulaire",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/coenzyme-q10",
    categories: ["migraine", "heart_health"],
    scores: [
      { condition: "Migraines", score: 3 },
      { condition: "Préoccupations cardiovasculaires", score: 2 }
    ],
    therapeuticClaims: ["Migraines", "Énergie cellulaire"]
  },
  {
    id: "selenium",
    name: "Sélénium",
    description: "Soutien pour la fonction thyroïdienne et le système immunitaire.",
    imageUrl: "/lovable-uploads/placeholder.svg",
    expectedResults: "Amélioration de la fonction thyroïdienne 🛡️",
    recommendationReason: "Santé thyroïdienne et immunité",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/selenium",
    categories: ["thyroid", "immune"],
    scores: [
      { condition: "Soutien de la fonction thyroïdienne", score: 3 },
      { condition: "Renforcer l'immunité", score: 2 }
    ],
    therapeuticClaims: ["Fonction thyroïdienne", "Système immunitaire"]
  },
  {
    id: "metabzen",
    name: "Metabzen",
    description: "Soutien pour le métabolisme et la gestion du poids.",
    imageUrl: "/lovable-uploads/placeholder.svg",
    expectedResults: "Optimisation du métabolisme 🔄",
    recommendationReason: "Équilibre métabolique",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/metabzen",
    categories: ["metabolism"],
    scores: [
      { condition: "Métabolisme", score: 3 }
    ],
    therapeuticClaims: ["Métabolisme", "Gestion du poids"]
  },
  {
    id: "gluconig",
    name: "Gluconig",
    description: "Soutien pour l'équilibre glycémique.",
    imageUrl: "/lovable-uploads/placeholder.svg",
    expectedResults: "Meilleur équilibre glycémique 🍯",
    recommendationReason: "Équilibre du sucre sanguin",
    dietaryInfo: "Vegan, Sans gluten",
    productUrl: "https://maisonjacynthe.ca/fr/gluconig",
    categories: ["metabolism"],
    scores: [
      { condition: "Métabolisme", score: 3 }
    ],
    therapeuticClaims: ["Équilibre glycémique"]
  },
  {
    id: "les-apothicaires",
    name: "Les Apothicaires",
    description: "Soutien immunitaire saisonnier.",
    imageUrl: "/lovable-uploads/placeholder.svg",
    expectedResults: "Renforcement du système immunitaire 🌿",
    recommendationReason: "Protection immunitaire naturelle",
    dietaryInfo: "100% Naturel",
    productUrl: "https://maisonjacynthe.ca/fr/les-apothicaires",
    categories: ["immune", "seasonal"],
    scores: [
      { condition: "Renforcer l'immunité", score: 3 }
    ],
    therapeuticClaims: ["Défense immunitaire", "Santé saisonnière"]
  },
  {
    id: "miel-protecteur",
    name: "Miel Protecteur",
    description: "Protection naturelle pour la gorge et l'immunité.",
    imageUrl: "/lovable-uploads/placeholder.svg",
    expectedResults: "Soulagement de la gorge 🍯",
    recommendationReason: "Protection de la gorge",
    dietaryInfo: "100% Naturel",
    productUrl: "https://maisonjacynthe.ca/fr/miel-protecteur",
    categories: ["immune", "throat_health"],
    scores: [
      { condition: "Renforcer l'immunité", score: 2 }
    ],
    therapeuticClaims: ["Santé de la gorge", "Protection immunitaire"]
  },
  {
    id: "defense-topic",
    name: "Défense Topic",
    description: "Solution topique pour le soulagement de la douleur.",
    imageUrl: "/lovable-uploads/placeholder.svg",
    expectedResults: "Soulagement local de la douleur 🌿",
    recommendationReason: "Soulagement naturel",
    dietaryInfo: "Usage externe",
    productUrl: "https://maisonjacynthe.ca/fr/defense-topic",
    categories: ["topical", "pain"],
    scores: [
      { condition: "Douleur", score: 3 }
    ],
    therapeuticClaims: ["Douleur musculaire", "Inflammation locale"]
  },
  {
    id: "formule-apaisante",
    name: "Formule Apaisante",
    description: "Solution apaisante pour la peau.",
    imageUrl: "/lovable-uploads/placeholder.svg",
    expectedResults: "Apaisement cutané 🌸",
    recommendationReason: "Soin apaisant naturel",
    dietaryInfo: "Usage externe",
    productUrl: "https://maisonjacynthe.ca/fr/formule-apaisante",
    categories: ["topical", "healing"],
    scores: [
      { condition: "Problèmes de peau", score: 3 }
    ],
    therapeuticClaims: ["Irritation cutanée", "Apaisement"]
  },
  {
    id: "bobome",
    name: "Bobôme",
    description: "Solution naturelle pour les petits bobos.",
    imageUrl: "/lovable-uploads/placeholder.svg",
    expectedResults: "Soin des petites blessures 🩹",
    recommendationReason: "Premiers soins naturels",
    dietaryInfo: "Usage externe",
    productUrl: "https://maisonjacynthe.ca/fr/bobome",
    categories: ["topical", "healing"],
    scores: [
      { condition: "Premiers soins", score: 3 }
    ],
    therapeuticClaims: ["Petites blessures", "Cicatrisation"]
  }
];