import { Answer } from "@/components/quiz/types";
import { getRecommendations } from "./recommendationLogic";

interface TestScenario {
  name: string;
  answers: Answer[];
  expectedCategories: string[];
}

const TEST_SCENARIOS: TestScenario[] = [
  {
    name: "Scenario 1: Single Goal, Single Concern",
    answers: [
      {
        questionId: 1,
        answers: ["Améliorer l'énergie"]
      },
      {
        questionId: 2,
        answers: ["Problèmes digestifs"]
      }
    ],
    expectedCategories: ["energy", "digestive"]
  },
  {
    name: "Scenario 2: Multiple Concerns, Same Goal",
    answers: [
      {
        questionId: 1,
        answers: ["Renforcer l'immunité"]
      },
      {
        questionId: 2,
        answers: ["Stress, anxiété ou sautes d'humeur", "Problèmes digestifs"]
      }
    ],
    expectedCategories: ["stress", "digestive", "general_health"]
  },
  {
    name: "Scenario 3: No Concerns Selected",
    answers: [
      {
        questionId: 1,
        answers: ["Améliorer le sommeil"]
      },
      {
        questionId: 2,
        answers: []
      }
    ],
    expectedCategories: ["sleep", "relaxation"]
  }
];

export function runRecommendationTests() {
  console.group("Running Recommendation Algorithm Tests");
  
  TEST_SCENARIOS.forEach(scenario => {
    console.group(`Test: ${scenario.name}`);
    
    // Get recommendations for the scenario
    const recommendations = getRecommendations(scenario.answers);
    
    // Log the test inputs
    console.log("Test Inputs:", {
      primaryGoal: scenario.answers[0]?.answers[0],
      healthConcerns: scenario.answers[1]?.answers
    });
    
    // Log recommendations
    console.log("Recommendations:", recommendations.map(r => ({
      name: r.name,
      confidenceLevel: r.confidenceLevel,
      recommendationReason: r.recommendationReason
    })));
    
    // Validate number of recommendations
    console.log("Number of recommendations:", recommendations.length);
    if (recommendations.length < 2 || recommendations.length > 3) {
      console.warn("❌ Warning: Number of recommendations should be between 2 and 3");
    } else {
      console.log("✅ Correct number of recommendations");
    }
    
    // Validate diversity
    const categories = new Set(recommendations.map(r => r.recommendationReason));
    console.log("Unique categories:", categories.size);
    if (categories.size < 2) {
      console.warn("❌ Warning: Recommendations should span at least 2 categories");
    } else {
      console.log("✅ Good category diversity");
    }
    
    // Validate confidence levels
    const confidenceLevels = recommendations.map(r => r.confidenceLevel);
    console.log("Confidence levels:", confidenceLevels);
    if (Math.min(...confidenceLevels) < 70) {
      console.warn("❌ Warning: Some recommendations have low confidence");
    } else {
      console.log("✅ Good confidence levels");
    }
    
    console.groupEnd();
  });
  
  console.groupEnd();
}