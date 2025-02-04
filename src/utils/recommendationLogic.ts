import { Answer } from "@/components/quiz/types";
import { Product } from "@/components/results/ProductCard";
import { PRODUCTS } from "./products/productDatabase";

const WEIGHTS = {
  PRIMARY_GOAL: 3,
  HEALTH_CONCERN: 2,
  FALLBACK_THRESHOLD: 5
};

export function getRecommendations(answers: Answer[]): Product[] {
  console.group("Generating Recommendations");
  
  try {
    // Calculate scores for all products
    const scoredProducts = PRODUCTS.map(product => {
      let totalScore = 0;
      
      // Score based on primary goal (Question 2)
      const primaryGoal = answers.find(a => a.questionId === 2)?.answers[0];
      if (primaryGoal) {
        const goalScore = product.scores.find(s => s.condition === primaryGoal)?.score || 0;
        totalScore += goalScore * WEIGHTS.PRIMARY_GOAL;
      }
      
      // Score based on health concerns (Question 3)
      const healthConcerns = answers.find(a => a.questionId === 3)?.answers || [];
      healthConcerns.forEach(concern => {
        const concernScore = product.scores.find(s => s.condition === concern)?.score || 0;
        totalScore += concernScore * WEIGHTS.HEALTH_CONCERN;
      });

      return {
        ...product,
        totalScore,
        confidenceLevel: Math.min(95, Math.round((totalScore / 15) * 100))
      };
    });

    // Sort by score and get top recommendations
    let recommendations = scoredProducts
      .sort((a, b) => b.totalScore - a.totalScore)
      .slice(0, 3);

    // If we don't have enough strong recommendations, add fallback products
    if (recommendations.some(p => p.totalScore < WEIGHTS.FALLBACK_THRESHOLD)) {
      const fallbackProducts = scoredProducts.filter(p => 
        p.categories.includes("general_health") && 
        !recommendations.find(r => r.id === p.id)
      );
      
      while (recommendations.length < 3 && fallbackProducts.length > 0) {
        recommendations.push(fallbackProducts.shift()!);
      }
    }

    // Ensure category diversity
    const categories = new Set(recommendations.flatMap(p => p.categories));
    if (categories.size < 2) {
      // Try to replace the lowest scoring product with one from a different category
      const differentCategoryProduct = scoredProducts.find(p => 
        !recommendations.find(r => r.id === p.id) && 
        !p.categories.some(c => categories.has(c))
      );
      
      if (differentCategoryProduct) {
        recommendations.pop();
        recommendations.push(differentCategoryProduct);
      }
    }

    console.log("Final recommendations:", recommendations);
    console.groupEnd();

    return recommendations;
  } catch (error) {
    console.error("Error generating recommendations:", error);
    console.groupEnd();
    throw error;
  }
}