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
      // Si l'utilisateur est un homme, exclure les produits spécifiques aux femmes
      if (genderAnswer === "Homme" && product.categories.includes("women_specific")) {
        console.log(`Excluding women-specific product for male user: ${product.name}`);
        return false;
      }
      
      // Si l'utilisateur est une femme, exclure les produits spécifiques aux hommes
      if (genderAnswer === "Femme" && product.categories.includes("men_specific")) {
        console.log(`Excluding men-specific product for female user: ${product.name}`);
        return false;
      }
      
      // Pour "Autre" ou "Je préfère ne pas répondre", exclure tous les produits spécifiques au genre
      if ((genderAnswer === "Autre" || genderAnswer === "Je préfère ne pas répondre") 
          && (product.categories.includes("women_specific") || product.categories.includes("men_specific"))) {
        console.log(`Excluding gender-specific product for neutral user: ${product.name}`);
        return false;
      }
      
      return true;
    });

    console.log(`Filtered ${PRODUCTS.length - filteredProducts.length} gender-specific products`);

    // Calculate scores for filtered products
    const scoredProducts = filteredProducts.map(product => ({
      ...product,
      totalScore: calculateProductScores(product, answers.slice(1)) // Skip gender answer for scoring
    }));

    // Get diversified recommendations
    const recommendations = diversifyRecommendations(scoredProducts);

    console.log("Final recommendations:", recommendations);
    console.groupEnd();

    return recommendations;
  } catch (error) {
    console.error("Error generating recommendations:", error);
    console.groupEnd();
    throw error;
  }
}