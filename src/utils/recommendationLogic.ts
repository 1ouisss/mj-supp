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

export function getRecommendations(answers: Answer[]): Product[] {
  console.group("Generating Recommendations");
  console.log("Input answers:", answers);
  
  try {
    if (!Array.isArray(answers) || answers.length === 0) {
      console.warn("No answers provided");
      toast.error("Veuillez compléter le questionnaire");
      return [];
    }

    const genderAnswer = answers.find(a => a.questionId === 1);
    const ageAnswer = answers.find(a => a.questionId === 2);
    
    console.log("Gender answer:", genderAnswer);
    console.log("Age answer:", ageAnswer);

    if (!genderAnswer?.answers[0] || !ageAnswer?.answers[0]) {
      console.warn("Missing required answers for gender or age");
      toast.error("Veuillez indiquer votre genre et votre âge");
      return [];
    }

    // Filter and score products
    let scoredProducts = PRODUCTS
      .filter(productDef => !shouldExcludeProduct(productDef, answers))
      .map(productDef => calculateProductScore(productDef, answers))
      .filter(product => product.score > 0)
      .sort((a, b) => (b.score || 0) - (a.score || 0));

    console.log("Scored products before filtering:", scoredProducts);

    // Ensure category diversity
    let recommendations = ensureCategoryDiversity(scoredProducts);

    // Limit to maximum recommendations
    recommendations = recommendations.slice(0, WEIGHTS.MIN_RECOMMENDATIONS);

    // Add fallback products if needed
    if (recommendations.length < WEIGHTS.MIN_RECOMMENDATIONS) {
      const fallbackProducts = getFallbackProducts(
        String(genderAnswer.answers[0]), 
        String(ageAnswer.answers[0])
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