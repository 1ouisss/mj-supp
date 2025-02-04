import { Answer } from "@/components/quiz/types";
import { getRecommendations } from "./recommendationLogic";
import { ProductCategory } from "./products/productTypes";

interface TestScenario {
  name: string;
  answers: Answer[];
  expectedCategories: ProductCategory[];
  minimumProducts: number;
}

const TEST_SCENARIOS: TestScenario[] = [
  {
    name: "Scénario 1: Santé cérébrale et stress",
    answers: [
      {
        questionId: 1,
        answers: ["Soutenir la santé cérébrale"]
      },
      {
        questionId: 2,
        answers: ["Stress, anxiété ou sautes d'humeur", "Préoccupations cardiovasculaires"]
      }
    ],
    expectedCategories: ["brain", "heart_health", "stress"],
    minimumProducts: 2
  },
  {
    name: "Scénario 2: Digestion et stress",
    answers: [
      {
        questionId: 1,
        answers: ["Améliorer la digestion"]
      },
      {
        questionId: 2,
        answers: ["Stress, anxiété ou sautes d'humeur", "Problèmes digestifs"]
      }
    ],
    expectedCategories: ["digestive", "stress"],
    minimumProducts: 2
  },
  {
    name: "Scénario 3: Sommeil et relaxation",
    answers: [
      {
        questionId: 1,
        answers: ["Améliorer le sommeil"]
      },
      {
        questionId: 2,
        answers: ["Stress, anxiété ou sautes d'humeur"]
      }
    ],
    expectedCategories: ["sleep", "relaxation"],
    minimumProducts: 2
  }
];

export function runRecommendationTests() {
  console.group("Running Recommendation Algorithm Tests");
  
  let allTestsPassed = true;
  
  TEST_SCENARIOS.forEach(scenario => {
    console.group(`Test: ${scenario.name}`);
    
    try {
      const recommendations = getRecommendations(scenario.answers);
      
      console.log("Test Inputs:", {
        primaryGoal: scenario.answers[0]?.answers[0],
        healthConcerns: scenario.answers[1]?.answers
      });
      
      console.log("Recommendations:", recommendations.map(r => ({
        name: r.name,
        categories: r.categories,
        confidenceLevel: r.confidenceLevel,
        recommendationReason: r.recommendationReason
      })));
      
      if (recommendations.length < scenario.minimumProducts) {
        console.error(`❌ Error: Not enough recommendations. Expected at least ${scenario.minimumProducts}, got ${recommendations.length}`);
        allTestsPassed = false;
      } else {
        console.log("✅ Correct number of recommendations");
      }
      
      const recommendedCategories = new Set(
        recommendations.flatMap(r => r.categories)
      );
      
      const missingCategories = scenario.expectedCategories.filter(
        cat => !recommendedCategories.has(cat)
      );
      
      if (missingCategories.length > 0) {
        console.error("❌ Error: Missing expected categories:", missingCategories);
        allTestsPassed = false;
      } else {
        console.log("✅ All expected categories covered");
      }
      
      const lowConfidenceProducts = recommendations.filter(
        r => r.confidenceLevel < 70
      );
      
      if (lowConfidenceProducts.length > 0) {
        console.warn("⚠️ Warning: Some products have low confidence levels:", 
          lowConfidenceProducts.map(p => `${p.name}: ${p.confidenceLevel}%`)
        );
      } else {
        console.log("✅ All recommendations have good confidence levels");
      }
      
    } catch (error) {
      console.error("❌ Test failed with error:", error);
      allTestsPassed = false;
    }
    
    console.groupEnd();
  });
  
  if (allTestsPassed) {
    console.log("✅ All tests passed successfully");
  } else {
    console.error("❌ Some tests failed");
  }
  
  console.groupEnd();
}
