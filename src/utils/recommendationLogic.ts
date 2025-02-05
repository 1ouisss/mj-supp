import { Answer } from "@/components/quiz/types";
import { Product } from "@/components/results/ProductCard";
import { PRODUCTS } from "./products/productDatabase";
import { WEIGHTS } from "./recommendation/constants";
import { shouldExcludeProduct } from "./recommendation/productFiltering";
import { calculateProductScore } from "./recommendation/scoreCalculation";
import { ensureCategoryDiversity } from "./recommendation/diversity";
import { getFallbackProducts } from "./recommendation/fallback";
import { adjustProductScores } from "./feedback/feedbackAdjustment";
import { toast } from "sonner";

const PRIMARY_GOAL_CATEGORY_MAP = {
  "Améliorer le sommeil": ["sommeil", "relaxation"],
  "Renforcer l'immunité": ["immunité", "santé_générale"],
  "Améliorer la digestion": ["digestif"],
  "Gérer le stress": ["stress", "relaxation"],
  "Soutenir la santé cérébrale": ["cerveau", "concentration"],
  "Améliorer l'énergie": ["énergie", "vitalité"]
} as const;

export function getRecommendations(answers: Answer[]): Product[] {
  console.group("Generating Recommendations");
  console.log("Input answers:", answers);
  
  try {
    if (!Array.isArray(answers) || answers.length === 0) {
      console.warn("No answers provided");
      toast.error("Veuillez compléter le questionnaire");
      return [];
    }

    const primaryGoalAnswer = answers.find(a => a.questionId === 3)?.answers[0];
    console.log("Primary goal:", primaryGoalAnswer);

    if (!primaryGoalAnswer) {
      console.warn("Missing primary goal answer");
      toast.error("Veuillez indiquer votre objectif principal");
      return [];
    }

    // Get relevant categories based on primary goal
    const targetCategories = PRIMARY_GOAL_CATEGORY_MAP[primaryGoalAnswer as keyof typeof PRIMARY_GOAL_CATEGORY_MAP] || [];
    console.log("Target categories based on primary goal:", targetCategories);

    // Filter and score products
    let scoredProducts = PRODUCTS
      .filter(productDef => {
        // Check if product categories match the primary goal
        const hasRelevantCategory = productDef.categories.some(cat => 
          targetCategories.includes(cat as any)
        );
        
        // Only include products that match the primary goal or aren't excluded
        return hasRelevantCategory && !shouldExcludeProduct(productDef, answers);
      })
      .map(productDef => {
        const product = calculateProductScore(productDef, answers);
        // Boost score for products that directly match the primary goal
        if (product.categories.some(cat => targetCategories.includes(cat as any))) {
          product.score = (product.score || 0) * WEIGHTS.PRIMARY_GOAL_BOOST;
          product.confidenceLevel = Math.min(95, (product.confidenceLevel || 0) + 10);
        }
        return product;
      })
      .filter(product => product.score > 0)
      .sort((a, b) => (b.score || 0) - (a.score || 0));

    console.log("Scored products before filtering:", scoredProducts);

    // Ensure category diversity while maintaining primary goal focus
    let recommendations = ensureCategoryDiversity(scoredProducts);

    // Ensure we have enough recommendations
    if (recommendations.length < WEIGHTS.MIN_RECOMMENDATIONS) {
      const fallbackProducts = getFallbackProducts(
        String(answers.find(a => a.questionId === 1)?.answers[0]), // gender
        String(answers.find(a => a.questionId === 2)?.answers[0])  // age
      );
      recommendations = [...recommendations, ...fallbackProducts]
        .slice(0, WEIGHTS.MIN_RECOMMENDATIONS);
    }

    // Adjust final scores based on feedback
    recommendations = adjustProductScores(recommendations);

    console.log("Final recommendations:", recommendations);
    console.groupEnd();

    if (recommendations.length === 0) {
      toast.error("Aucune recommandation trouvée pour vos critères");
    }

    return recommendations;
  } catch (error) {
    console.error("Error generating recommendations:", error);
    console.groupEnd();
    toast.error("Une erreur est survenue lors de la génération des recommandations");
    throw error;
  }
}