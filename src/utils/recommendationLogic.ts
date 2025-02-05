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

function shouldExcludeProduct(productDef: any, healthConcerns: string[]): boolean {
  // Exclure la mélatonine si pas de problème de sommeil
  if (productDef.name.toLowerCase().includes('mélatonine') && 
      !healthConcerns.some(concern => 
        concern.toLowerCase().includes('sommeil') || 
        concern.toLowerCase().includes('dormir'))) {
    return true;
  }
  return false;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
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

    const gender = String(genderAnswer.answers[0]);
    const age = String(ageAnswer.answers[0]);
    
    const primaryGoal = answers.find(a => a.questionId === 3)?.answers[0];
    const healthConcerns = (answers.find(a => a.questionId === 4)?.answers || []).map(String);
    const severityMultipliers = calculateSeverityMultiplier(answers);

    console.log("Primary goal:", primaryGoal);
    console.log("Health concerns:", healthConcerns);
    console.log("Severity multipliers:", severityMultipliers);
    
    // Mélanger les produits pour la rotation
    let shuffledProducts = shuffleArray(PRODUCTS);
    
    let scoredProducts = shuffledProducts.map(productDef => {
      // Vérifier les exclusions spécifiques
      if (shouldExcludeProduct(productDef, healthConcerns)) {
        return null;
      }

      if (!isProductGenderAppropriate(productDef, gender) ||
          !isAgeAppropriate(productDef, age)) {
        return null;
      }

      let totalScore = 0;
      let matchCount = 0;
      
      // Score de base pour tous les produits
      totalScore += WEIGHTS.BASE_SCORE;
      
      // Score pour l'objectif principal
      if (primaryGoal) {
        const goalScore = productDef.scores.find(s => 
          s.condition === normalizeAnswer(String(primaryGoal)))?.score || 0;
        totalScore += goalScore * WEIGHTS.PRIMARY_GOAL;
        if (goalScore > 0) matchCount++;
      }
      
      // Score pour les préoccupations de santé
      healthConcerns.forEach(concern => {
        const concernScore = productDef.scores.find(s => s.condition === normalizeAnswer(concern))?.score || 0;
        const severityMultiplier = severityMultipliers[concern] || 1;
        totalScore += concernScore * WEIGHTS.HEALTH_CONCERN * severityMultiplier;
        if (concernScore > 0) matchCount++;
      });
      
      // Score pour les catégories
      const categoryScore = calculateCategoryScore(productDef.categories, [
        ...(primaryGoal ? [String(primaryGoal)] : []), 
        ...healthConcerns
      ]);
      totalScore += categoryScore;
      if (categoryScore > 0) matchCount++;

      // Score pour les allégations thérapeutiques
      const therapeuticScore = calculateTherapeuticScore(productDef.therapeuticClaims, healthConcerns);
      totalScore += therapeuticScore;
      if (therapeuticScore > 0) matchCount++;
      
      // Boost de synergie
      totalScore = applySynergyBoosts(productDef.id, healthConcerns, totalScore);

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

    // Trier par score décroissant
    scoredProducts.sort((a, b) => (b.score || 0) - (a.score || 0));

    // Assurer la diversité des catégories
    let recommendations = ensureCategoryDiversity(scoredProducts);

    // Limiter à 6 produits
    recommendations = recommendations.slice(0, 6);

    // Si pas assez de recommandations, ajouter des produits de fallback
    if (recommendations.length < WEIGHTS.MIN_RECOMMENDATIONS) {
      const fallbackProducts = getFallbackProducts(gender, age);
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