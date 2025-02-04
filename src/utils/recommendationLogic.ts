import type { Answer } from "@/components/quiz/types";
import type { Product } from "@/components/results/ProductCard";

const PRODUCTS: Product[] = [
  {
    id: "energie-adaptogenes",
    name: "Énergie & Adaptogènes",
    description: "Mélange d'herbes adaptogènes pour soutenir l'énergie et la résistance au stress",
    imageUrl: "/placeholder.svg",
    expectedResults: "Augmentation de l'énergie, meilleure adaptation au stress ⚡",
    recommendationReason: "Booste l'énergie. Aide à gérer le stress.",
    dietaryInfo: "Vegan, Gluten-free, Lactose-free",
    confidenceLevel: 100,
    productUrl: "#"
  },
  {
    id: "champignons-adaptogenes",
    name: "Champignons & Adaptogènes",
    description: "Complexe de champignons médicinaux et d'herbes adaptogènes",
    imageUrl: "/placeholder.svg",
    expectedResults: "Renforcement immunitaire, équilibre du stress, vitalité accrue 🍄",
    recommendationReason: "Soutient le système immunitaire. Booste l'énergie. Aide à gérer le stress.",
    dietaryInfo: "Vegan, Gluten-free, Lactose-free",
    confidenceLevel: 100,
    productUrl: "#"
  },
  {
    id: "vitamine-c",
    name: "Vitamine C",
    description: "Antioxydant puissant pour le système immunitaire et la peau",
    imageUrl: "/placeholder.svg",
    expectedResults: "Renforcement immunitaire, éclat de la peau, protection cellulaire 🍊",
    recommendationReason: "Soutient le système immunitaire. Bénéfique pour la santé de la peau.",
    dietaryInfo: "Vegan, Gluten-free, Lactose-free",
    confidenceLevel: 80,
    productUrl: "#"
  }
];

export function getRecommendations(answers: Answer[]): Product[] {
  // Filter answers to only use questions 1 and 2
  const relevantAnswers = answers.filter(a => a.questionId <= 2);
  
  // For now, return all products
  // In a real implementation, you would score products based on answers
  return PRODUCTS;
}