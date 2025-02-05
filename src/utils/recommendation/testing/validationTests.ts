import { Answer } from "@/components/quiz/types";
import { Product } from "@/components/results/ProductCard";
import { getRecommendations } from "../../recommendationLogic";
import { supabase } from "@/integrations/supabase/client";
import { CORE_TEST_SCENARIOS } from "./scenarios";
import { testDiversityRequirements } from "./diversityTests";

export async function validateRecommendationSystem() {
  console.group("🧪 Running Validation Tests");
  let allTestsPassed = true;

  for (const scenario of CORE_TEST_SCENARIOS) {
    try {
      console.group(`Testing scenario: ${scenario.name}`);
      const recommendations = getRecommendations(scenario.answers);
      
      // Validate recommendations
      const validationResult = await validateScenario(scenario.name, recommendations, scenario);
      
      if (!validationResult) {
        allTestsPassed = false;
      }
    } catch (error) {
      console.error(`❌ Scenario failed: ${scenario.name}`, error);
      allTestsPassed = false;
    }
    console.groupEnd();
  }

  if (allTestsPassed) {
    console.log("✅ All validation tests passed successfully");
  } else {
    console.error("❌ Some validation tests failed");
  }
  
  console.groupEnd();
  return allTestsPassed;
}

async function validateScenario(
  testCase: string,
  recommendations: Product[],
  scenario: {
    minimumProducts: number;
    expectedProducts: string[];
    expectedCategories: string[];
  }
) {
  let isValid = true;
  const validationDetails: any = {};

  // Check minimum products
  if (recommendations.length < scenario.minimumProducts) {
    console.error(`❌ Not enough recommendations. Expected ${scenario.minimumProducts}, got ${recommendations.length}`);
    isValid = false;
    validationDetails.productCount = {
      expected: scenario.minimumProducts,
      actual: recommendations.length
    };
  }

  // Check expected products
  const recommendedIds = recommendations.map(r => r.id);
  const missingProducts = scenario.expectedProducts.filter(id => !recommendedIds.includes(id));
  if (missingProducts.length > 0) {
    console.error("❌ Missing expected products:", missingProducts);
    isValid = false;
    validationDetails.missingProducts = missingProducts;
  }

  // Check category diversity
  if (!testDiversityRequirements(recommendations)) {
    isValid = false;
    validationDetails.diversityFailed = true;
  }

  // Calculate scores
  const accuracyScore = calculateAccuracyScore(recommendations, scenario);
  const diversityScore = calculateDiversityScore(recommendations);
  const personalizationScore = calculatePersonalizationScore(recommendations, scenario);

  // Save validation results
  try {
    const { error } = await supabase
      .from('recommendation_validations')
      .insert({
        test_case: testCase,
        accuracy_score: accuracyScore,
        diversity_score: diversityScore,
        personalization_score: personalizationScore,
        validation_details: validationDetails
      });

    if (error) throw error;
  } catch (error) {
    console.error("Failed to save validation results:", error);
  }

  return isValid;
}

function calculateAccuracyScore(recommendations: Product[], scenario: any): number {
  const expectedProductsFound = scenario.expectedProducts.filter(id => 
    recommendations.some(r => r.id === id)
  ).length;
  
  return (expectedProductsFound / scenario.expectedProducts.length) * 100;
}

function calculateDiversityScore(recommendations: Product[]): number {
  const uniqueCategories = new Set(recommendations.flatMap(r => r.categories));
  return Math.min((uniqueCategories.size / 3) * 100, 100);
}

function calculatePersonalizationScore(recommendations: Product[], scenario: any): number {
  const relevantCategories = new Set(scenario.expectedCategories);
  const matchingCategories = recommendations.filter(r => 
    r.categories.some(c => relevantCategories.has(c))
  ).length;
  
  return (matchingCategories / recommendations.length) * 100;
}