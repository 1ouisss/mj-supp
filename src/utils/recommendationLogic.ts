import { Answer } from "@/components/quiz/types";
import { Product } from "@/components/results/ProductCard";
import { PRODUCTS } from "./products/productDatabase";
import { calculateProductScores, diversifyRecommendations } from "./recommendation/scoringLogic";

export function getRecommendations(answers: Answer[]): Product[] {
  console.group("Generating Recommendations");
  
  try {
    // Get gender answer
    const genderAnswer = answers.find(a => a.questionId === 1)?.answers[0];
    
    // Filter products based on gender
    let filteredProducts = PRODUCTS.filter(product => {
      if (genderAnswer === "Homme" && product.categories.includes("women_specific")) {
        return false;
      }
      if ((genderAnswer === "Autre" || genderAnswer === "Je préfère ne pas répondre") 
          && (product.categories.includes("women_specific") || product.categories.includes("men_specific"))) {
        return false;
      }
      return true;
    });

    // Calculate scores for filtered products
    const scoredProducts = filteredProducts.map(product => ({
      ...product,
      totalScore: calculateProductScores(product, answers.slice(1)) // Skip gender answer for scoring
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
      confidenceLevel: Math.min(95, Math.round((product.totalScore / 15) * 100)),
      productUrl: product.productUrl,
      categories: product.categories
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