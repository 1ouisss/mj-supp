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

function shouldExcludeProduct(product: Product, answers: Answer[]): boolean {
  const healthConcerns = answers
    .find(a => a.questionId === 4)?.answers
    .map(String) || [];
  
  const primaryGoal = answers.find(a => a.questionId === 3)?.answers[0];

  // Exclude melatonin if no sleep-related concerns
  if (product.name.toLowerCase().includes('mélatonine') && 
      !healthConcerns.some(concern => 
        concern.toLowerCase().includes('sommeil') || 
        concern.toLowerCase().includes('dormir')) &&
      primaryGoal !== "Améliorer le sommeil") {
    console.log('Excluding melatonin - no sleep concerns');
    return true;
  }

  // Exclude focus products if no concentration/brain concerns
  if (product.name.toLowerCase().includes('focus') && 
      !healthConcerns.some(concern => 
        concern.toLowerCase().includes('concentration')) &&
      primaryGoal !== "Soutenir la santé cérébrale") {
    console.log('Excluding focus product - no concentration concerns');
    return true;
  }

  return false;
}

function calculateSeverityMultiplier(answers: Answer[]): { [key: string]: number } {
  const severityMultipliers: { [key: string]: number } = {};
  
  answers.forEach(answer => {
    if (answer.followUpAnswers) {
      answer.followUpAnswers.forEach(followUp => {
        if (followUp.questionId === 402) { // Stress severity question
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

    const gender = String(genderAnswer.answers[0]);
    const age = String(ageAnswer.answers[0]);
    
    const primaryGoal = answers.find(a => a.questionId === 3)?.answers[0];
    const healthConcerns = (answers.find(a => a.questionId === 4)?.answers || []).map(String);
    const severityMultipliers = calculateSeverityMultiplier(answers);

    console.log("Primary goal:", primaryGoal);
    console.log("Health concerns:", healthConcerns);
    console.log("Severity multipliers:", severityMultipliers);
    
    let scoredProducts = PRODUCTS
      .filter(productDef => {
        // Check basic eligibility
        if (shouldExcludeProduct(productDef, answers)) {
          return false;
        }

        return isProductGenderAppropriate(productDef, gender) &&
               isAgeAppropriate(productDef, age);
      })
      .map(productDef => {
        let totalScore = 0;
        let matchCount = 0;
        
        // Score for primary goal
        if (primaryGoal) {
          const goalScore = productDef.scores.find(s => 
            s.condition === normalizeAnswer(String(primaryGoal)))?.score || 0;
          totalScore += goalScore * WEIGHTS.PRIMARY_GOAL;
          if (goalScore > 0) {
            matchCount++;
            console.log(`${productDef.name} matches primary goal: +${goalScore * WEIGHTS.PRIMARY_GOAL}`);
          }
        }
        
        // Score for health concerns
        healthConcerns.forEach(concern => {
          const concernScore = productDef.scores.find(s => 
            s.condition === normalizeAnswer(concern))?.score || 0;
          const severityMultiplier = severityMultipliers[concern] || 1;
          const weightedScore = concernScore * WEIGHTS.HEALTH_CONCERN * severityMultiplier;
          totalScore += weightedScore;
          if (concernScore > 0) {
            matchCount++;
            console.log(`${productDef.name} matches health concern ${concern}: +${weightedScore}`);
          }
        });
        
        // Category score
        const categoryScore = calculateCategoryScore(productDef.categories, [
          ...(primaryGoal ? [String(primaryGoal)] : []), 
          ...healthConcerns
        ]);
        totalScore += categoryScore;
        if (categoryScore > 0) {
          matchCount++;
          console.log(`${productDef.name} category score: +${categoryScore}`);
        }

        // Therapeutic claims score
        const therapeuticScore = calculateTherapeuticScore(productDef.therapeuticClaims, healthConcerns);
        totalScore += therapeuticScore;
        if (therapeuticScore > 0) {
          matchCount++;
          console.log(`${productDef.name} therapeutic score: +${therapeuticScore}`);
        }
        
        // Apply synergy boosts
        totalScore = applySynergyBoosts(productDef.id, healthConcerns, totalScore);

        console.log(`Product ${productDef.name} - Final Score: ${totalScore}, Match Count: ${matchCount}`);

        const confidenceLevel = Math.min(
          WEIGHTS.MAX_CONFIDENCE,
          Math.max(
            WEIGHTS.MIN_CONFIDENCE,
            WEIGHTS.MIN_CONFIDENCE + (matchCount * 5)
          )
        );

        return {
          ...productDef,
          confidenceLevel,
          score: totalScore
        };
      })
      .filter(product => product.score > 0)
      .sort((a, b) => (b.score || 0) - (a.score || 0));

    console.log("Scored products before filtering:", scoredProducts);

    // Ensure category diversity
    let recommendations = ensureCategoryDiversity(scoredProducts);

    // Limit to maximum recommendations
    recommendations = recommendations.slice(0, WEIGHTS.MIN_RECOMMENDATIONS);

    // Add fallback products if needed
    if (recommendations.length < WEIGHTS.MIN_RECOMMENDATIONS) {
      const fallbackProducts = getFallbackProducts(gender, age);
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