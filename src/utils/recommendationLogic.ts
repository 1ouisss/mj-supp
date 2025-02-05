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
  "Améliorer le sommeil": [
    "Mélatonine",
    "Magnésium", 
    "Poudre Dodo",
    "Respire Bien"
  ],
  "Renforcer l'immunité": [
    "Immunitaire",
    "Les Apothicaires",
    "Miel Protecteur",
    "Multivitamines La Totale"
  ],
  "Améliorer la digestion": [
    "Jus d'Aloès",
    "Probiotiques",
    "Fibres & l'Ami",
    "Fontaine de Jouvence Complet"
  ],
  "Gérer le stress": [
    "Énergie & Adaptogènes",
    "Force Botanique",
    "Champignons & Adaptogènes",
    "Magnésium"
  ],
  "Soutenir la santé cérébrale": [
    "Focus",
    "Oméga-3",
    "Complexe B",
    "Champignons & Adaptogènes"
  ],
  "Améliorer l'énergie": [
    "Énergie & Adaptogènes",
    "Force Botanique",
    "Huile TCM",
    "Multivitamines La Totale"
  ]
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
const MIN_RECOMMENDATIONS = 4;

export async function getRecommendations(answers: Answer[]): Promise<Product[]> {
  console.group("Generating Recommendations");
  console.log("Input answers:", answers);
  
  try {
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
        
        // Boost scores for specifically recommended products
        if (recommendedProductNames.includes(product.name)) {
          product.score = (product.score || 0) * WEIGHTS.PRIMARY_GOAL_BOOST * 1.5;
          product.confidenceLevel = Math.min(95, (product.confidenceLevel || 0) + 20);
        }
        // Smaller boost for products in target categories
        else if (product.categories.some(cat => targetCategories.includes(cat as ProductCategory))) {
          product.score = (product.score || 0) * WEIGHTS.PRIMARY_GOAL_BOOST;
          product.confidenceLevel = Math.min(95, (product.confidenceLevel || 0) + 10);
        }
        return product;
      })
      .filter(product => (product.score || 0) > 0 && (product.confidenceLevel || 0) >= MIN_CONFIDENCE_THRESHOLD)
      .sort((a, b) => (b.score || 0) - (a.score || 0));

    console.log("Scored products before filtering:", scoredProducts);

    // Ensure we have the minimum required recommendations
    let recommendations = scoredProducts.slice(0, Math.max(MIN_RECOMMENDATIONS, recommendedProductNames.length));

    // If we don't have enough recommendations, add fallback products
    if (recommendations.length < MIN_RECOMMENDATIONS) {
      const fallbackProducts = getFallbackProducts(
        String(answers.find(a => a.questionId === 1)?.answers[0]),
        String(answers.find(a => a.questionId === 2)?.answers[0])
      );
      recommendations = [...recommendations, ...fallbackProducts]
        .slice(0, MIN_RECOMMENDATIONS);
    }

    // Apply feedback adjustments
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