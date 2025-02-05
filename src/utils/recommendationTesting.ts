import { getRecommendations } from "./recommendationLogic";
import { CORE_TEST_SCENARIOS, GENDER_TEST_SCENARIOS } from "./recommendation/testing/scenarios";
import { testDiversityRequirements } from "./recommendation/testing/diversityTests";
import { testPerformance } from "./recommendation/testing/performanceTests";
import { ProductCategory } from "./products/productTypes";

export function runRecommendationTests() {
  console.group("Running Recommendation System Tests");
  let allTestsPassed = true;

  // Test core scenarios
  CORE_TEST_SCENARIOS.forEach(scenario => {
    console.group(`Test: ${scenario.name}`);
    try {
      const recommendations = getRecommendations(scenario.answers);
      
      if (recommendations.length < scenario.minimumProducts) {
        console.error(`❌ Not enough recommendations. Expected at least ${scenario.minimumProducts}, got ${recommendations.length}`);
        allTestsPassed = false;
      }

      const recommendedIds = recommendations.map(r => r.id);
      const missingProducts = scenario.expectedProducts.filter(id => !recommendedIds.includes(id));
      if (missingProducts.length > 0) {
        console.error("❌ Missing expected products:", missingProducts);
        allTestsPassed = false;
      }

      const recommendedCategories = new Set(recommendations.flatMap(r => r.categories));
      const missingCategories = scenario.expectedCategories.filter(
        (cat: ProductCategory) => !recommendedCategories.has(cat)
      );
      if (missingCategories.length > 0) {
        console.error("❌ Missing expected categories:", missingCategories);
        allTestsPassed = false;
      }

      const lowConfidenceProducts = recommendations.filter(r => r.confidenceLevel < 80);
      if (lowConfidenceProducts.length > 0) {
        console.error("❌ Products with low confidence found:", 
          lowConfidenceProducts.map(p => `${p.name}: ${p.confidenceLevel}%`)
        );
        allTestsPassed = false;
      }

      if (!testDiversityRequirements(recommendations)) {
        allTestsPassed = false;
      }

    } catch (error) {
      console.error("❌ Test failed with error:", error);
      allTestsPassed = false;
    }
    console.groupEnd();
  });

  // Test gender-specific scenarios
  GENDER_TEST_SCENARIOS.forEach(scenario => {
    console.group(`Test: ${scenario.name}`);
    try {
      const recommendations = getRecommendations(scenario.answers);
      if (scenario.validateFn && !scenario.validateFn(recommendations)) {
        allTestsPassed = false;
      }
    } catch (error) {
      console.error("❌ Test failed with error:", error);
      allTestsPassed = false;
    }
    console.groupEnd();
  });

  // Performance testing
  if (!testPerformance()) {
    allTestsPassed = false;
  }

  if (allTestsPassed) {
    console.log("✅ All recommendation system tests passed successfully");
  } else {
    console.error("❌ Some tests failed");
  }

  console.groupEnd();
  return allTestsPassed;
}