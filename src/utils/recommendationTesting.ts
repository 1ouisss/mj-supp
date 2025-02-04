import { Answer } from "@/components/quiz/types";
import { getRecommendations } from "./recommendationLogic";

interface TestScenario {
  name: string;
  answers: Answer[];
  expectedCategories: string[];
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
    expectedCategories: ["brain", "heart_health", "stress"]
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
    expectedCategories: ["digestive", "stress"]
  }
];

export function runRecommendationTests() {
  console.group("Running Recommendation Algorithm Tests");
  
  TEST_SCENARIOS.forEach(scenario => {
    console.group(`Test: ${scenario.name}`);
    
    const recommendations = getRecommendations(scenario.answers);
    
    console.log("Test Inputs:", {
      primaryGoal: scenario.answers[0]?.answers[0],
      healthConcerns: scenario.answers[1]?.answers
    });
    
    console.log("Recommendations:", recommendations.map(r => ({
      name: r.name,
      confidenceLevel: r.confidenceLevel,
      recommendationReason: r.recommendationReason
    })));
    
    // Validate recommendations
    if (recommendations.length < 2 || recommendations.length > 3) {
      console.warn("❌ Warning: Number of recommendations should be between 2 and 3");
    } else {
      console.log("✅ Correct number of recommendations");
    }
    
    console.groupEnd();
  });
  
  console.groupEnd();
}