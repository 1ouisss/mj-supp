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
import { ProductCategory } from "./products/productTypes";
import { syncValidationCheck } from "./products/syncValidation";

const RECOMMENDATION_MAPPING: Record<string, string[]> = {
  "Améliorer le sommeil": ["Mélatonine", "Magnésium", "Poudre Dodo", "Respire Bien"],
  "Renforcer l'immunité": ["Les Apothicaires", "Miel Protecteur", "Vitamine C", "Vitamine D & K", "Défense Super Poudre"],
  "Améliorer la digestion": ["Jus d'Aloès", "Probiotiques", "Fibres & l'Ami", "Fontaine de Jouvence Complet", "Détox Foie"],
  "Gérer le stress": ["Magnésium", "Énergie & Adaptogènes", "Champignons & Adaptogènes", "Force Botanique"],
  "Soutenir la santé cérébrale": ["Focus", "Oméga-3", "Énergie & Adaptogènes", "Extrait de Thé Vert"],
  "Améliorer l'énergie": ["Énergie & Adaptogènes", "Force Botanique", "Champignons & Adaptogènes", "Extrait de Thé Vert"]
};

const PRIMARY_GOAL_CATEGORY_MAP: Record<string, ProductCategory[]> = {
  "Améliorer le sommeil": ["sommeil", "relaxation"],
  "Renforcer l'immunité": ["immunité", "santé_générale"],
  "Améliorer la digestion": ["digestif"],
  "Gérer le stress": ["stress", "relaxation"],
  "Soutenir la santé cérébrale": ["cerveau", "concentration"],
  "Améliorer l'énergie": ["énergie", "vitalité"]
};

const MIN_CONFIDENCE_THRESHOLD = 80;

export async function getRecommendations(answers: Answer[]): Promise<Product[]> {
  console.group("Generating Recommendations");
  console.log("Input answers:", answers);
  
  try {
    // Validate sync in development
    if (process.env.NODE_ENV === 'development') {
      const isSynced = await syncValidationCheck();
      if (!isSynced) {
        console.warn("Product sync validation failed");
      }
    }

    if (!Array.isArray(answers) || answers.length === 0) {
      console.warn("No answers provided");
      toast.error("Veuillez compléter le questionnaire");
      return [];
    }

    const primaryGoalAnswer = answers.find(a => a.questionId === 3)?.answers[0] as string;
    console.log("Primary goal:", primaryGoalAnswer);

    if (!primaryGoalAnswer) {
      console.warn("Missing primary goal answer");
      toast.error("Veuillez indiquer votre objectif principal");
      return [];
    }

    // Get recommended product names for the primary goal
    const recommendedProductNames = RECOMMENDATION_MAPPING[primaryGoalAnswer] || [];
    console.log("Recommended product names:", recommendedProductNames);

    const targetCategories = PRIMARY_GOAL_CATEGORY_MAP[primaryGoalAnswer] || [];
    console.log("Target categories based on primary goal:", targetCategories);

    let scoredProducts = PRODUCTS
      .filter(productDef => {
        const isRecommended = recommendedProductNames.includes(productDef.name);
        const hasRelevantCategory = productDef.categories.some(cat => 
          targetCategories.includes(cat as ProductCategory)
        );
        
        return (isRecommended || hasRelevantCategory) && !shouldExcludeProduct(productDef, answers);
      })
      .map(productDef => {
        const product = calculateProductScore(productDef, answers);
        
        if (recommendedProductNames.includes(product.name)) {
          product.score = (product.score || 0) * WEIGHTS.PRIMARY_GOAL_BOOST * 1.2;
          product.confidenceLevel = Math.min(95, (product.confidenceLevel || 0) + 15);
        }
        else if (product.categories.some(cat => targetCategories.includes(cat as ProductCategory))) {
          product.score = (product.score || 0) * WEIGHTS.PRIMARY_GOAL_BOOST;
          product.confidenceLevel = Math.min(95, (product.confidenceLevel || 0) + 10);
        }
        return product;
      })
      .filter(product => (product.score || 0) > 0 && (product.confidenceLevel || 0) >= MIN_CONFIDENCE_THRESHOLD)
      .sort((a, b) => (b.score || 0) - (a.score || 0));

    console.log("Scored products before filtering:", scoredProducts);

    let recommendations = ensureCategoryDiversity(scoredProducts);

    if (recommendations.length < WEIGHTS.MIN_RECOMMENDATIONS) {
      const fallbackProducts = getFallbackProducts(
        String(answers.find(a => a.questionId === 1)?.answers[0]),
        String(answers.find(a => a.questionId === 2)?.answers[0])
      );
      recommendations = [...recommendations, ...fallbackProducts]
        .slice(0, WEIGHTS.MIN_RECOMMENDATIONS);
    }

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