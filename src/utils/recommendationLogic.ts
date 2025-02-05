import { Answer } from "@/components/quiz/types";
import { Product } from "@/components/results/ProductCard";
import { PRODUCTS } from "./products/productDatabase";
import { WEIGHTS } from "./recommendation/constants";
import { calculateCategoryScore, calculateTherapeuticScore, normalizeAnswer } from "./recommendation/scoring";
import { isAgeAppropriate, isProductGenderAppropriate } from "./recommendation/filters";
import { getFallbackProducts } from "./recommendation/fallback";
import { ensureCategoryDiversity } from "./recommendation/diversity";
import { applySynergyBoosts } from "./recommendation/synergy";
import { adjustProductScores } from "./feedback/feedbackAdjustment";
import { toast } from "sonner";

function calculateSeverityMultiplier(answers: Answer[]): { [key: string]: number } {
  const severityMultipliers: { [key: string]: number } = {};
  
  answers.forEach(answer => {
    if (answer.followUpAnswers) {
      answer.followUpAnswers.forEach(followUp => {
        if (followUp.questionId === 402) {
          const severity = Number(followUp.answers[0]);
          severityMultipliers["Stress"] = Math.max(1, severity / 3);
        }
      });
    }
  });

  return severityMultipliers;
}

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

    const gender = genderAnswer.answers[0];
    const age = ageAnswer.answers[0];
    
    const primaryGoal = answers.find(a => a.questionId === 3)?.answers[0];
    const healthConcerns = answers.find(a => a.questionId === 4)?.answers || [];
    const severityMultipliers = calculateSeverityMultiplier(answers);

    console.log("Primary goal:", primaryGoal);
    console.log("Health concerns:", healthConcerns);
    console.log("Severity multipliers:", severityMultipliers);
    
    let scoredProducts = PRODUCTS.map(productDef => {
      if (!isProductGenderAppropriate(productDef, normalizeAnswer(gender)) ||
          !isAgeAppropriate(productDef, normalizeAnswer(age))) {
        return null;
      }

      let totalScore = 0;
      let matchCount = 0;
      
      // Base score pour tous les produits
      totalScore += 1;
      
      // Score pour l'objectif principal
      if (primaryGoal) {
        const goalScore = productDef.scores.find(s => 
          s.condition === normalizeAnswer(primaryGoal))?.score || 0;
        totalScore += goalScore * WEIGHTS.PRIMARY_GOAL;
        if (goalScore > 0) matchCount++;
      }
      
      // Score pour les préoccupations de santé
      const normalizedHealthConcerns = healthConcerns.map(normalizeAnswer);
      normalizedHealthConcerns.forEach(concern => {
        const concernScore = productDef.scores.find(s => s.condition === concern)?.score || 0;
        const severityMultiplier = severityMultipliers[concern] || 1;
        totalScore += concernScore * WEIGHTS.HEALTH_CONCERN * severityMultiplier;
        if (concernScore > 0) matchCount++;
      });
      
      // Score pour les catégories
      const categoryScore = calculateCategoryScore(productDef.categories, [
        ...(primaryGoal ? [normalizeAnswer(primaryGoal)] : []), 
        ...normalizedHealthConcerns
      ]);
      totalScore += categoryScore;
      if (categoryScore > 0) matchCount++;

      // Score pour les allégations thérapeutiques
      const therapeuticScore = calculateTherapeuticScore(productDef.therapeuticClaims, normalizedHealthConcerns);
      totalScore += therapeuticScore;
      if (therapeuticScore > 0) matchCount++;
      
      // Boost de synergie
      totalScore = applySynergyBoosts(productDef.id, normalizedHealthConcerns, totalScore);

      console.log(`Product ${productDef.name} - Total Score: ${totalScore}, Match Count: ${matchCount}`);

      const confidenceLevel = Math.min(
        WEIGHTS.MAX_CONFIDENCE,
        Math.max(
          WEIGHTS.MIN_CONFIDENCE,
          WEIGHTS.MIN_CONFIDENCE + (matchCount * 5)
        )
      );

      const product: Product = {
        id: productDef.id,
        name: productDef.name,
        description: productDef.description,
        imageUrl: productDef.imageUrl,
        expectedResults: productDef.expectedResults,
        recommendationReason: productDef.recommendationReason,
        dietaryInfo: productDef.dietaryInfo,
        productUrl: productDef.productUrl,
        categories: productDef.categories,
        therapeuticClaims: productDef.therapeuticClaims,
        confidenceLevel,
        score: totalScore
      };

      return product;
    }).filter((product): product is Product => 
      product !== null
    );

    console.log("Scored products before filtering:", scoredProducts);

    // Trier par score décroissant et prendre les meilleurs produits
    let recommendations = scoredProducts
      .sort((a, b) => (b.score || 0) - (a.score || 0))
      .slice(0, 6);

    recommendations = ensureCategoryDiversity(recommendations);

    if (recommendations.length < WEIGHTS.MIN_RECOMMENDATIONS) {
      const fallbackProducts = getFallbackProducts(
        normalizeAnswer(gender),
        normalizeAnswer(age)
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