import { Answer } from "@/components/quiz/types";
import { Product } from "@/components/results/ProductCard";
import { PRODUCTS } from "./products/productDatabase";
import { calculateProductScores, diversifyRecommendations } from "./recommendation/scoringLogic";

export function getRecommendations(answers: Answer[]): Product[] {
  console.group("Generating Recommendations");
  
  try {
    // Calculate scores for all products
    const scoredProducts = PRODUCTS.map(product => ({
      ...product,
      totalScore: calculateProductScores(product, answers)
    }));

    // Get diversified recommendations
    const recommendations = diversifyRecommendations(scoredProducts);

    // Convert back to Product type and add confidence levels
    const finalRecommendations = recommendations.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.imageUrl,
      expectedResults: product.expectedResults,
      recommendationReason: product.recommendationReason,
      dietaryInfo: product.dietaryInfo,
      confidenceLevel: Math.min(95, Math.round((product.totalScore / 15) * 100)), // Normalize to percentage
      productUrl: product.productUrl,
      categories: product.categories // Ajout de la propriété manquante
    }));

    console.log("Final recommendations:", finalRecommendations);
    console.groupEnd();

    return finalRecommendations;
  } catch (error) {
    console.error("Error generating recommendations:", error);
    console.groupEnd();
    throw error;
  }
}