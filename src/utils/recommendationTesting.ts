import { Answer } from "@/components/quiz/types";
import { getRecommendations } from "@/utils/recommendationLogic";
import { ProductCategory } from "./products/productTypes";

interface TestScenario {
  name: string;
  answers: Answer[];
  expectedCategories: ProductCategory[];
  minimumProducts: number;
}

const TEST_SCENARIOS: TestScenario[] = [
  {
    name: "Scénario 1: Homme - Santé cérébrale et stress",
    answers: [
      {
        questionId: 1,
        answers: ["Homme"]
      },
      {
        questionId: 2,
        answers: ["Soutenir la santé cérébrale"]
      },
      {
        questionId: 3,
        answers: ["Stress, anxiété ou sautes d'humeur"]
      }
    ],
    expectedCategories: ["brain", "stress"],
    minimumProducts: 2
  },
  {
    name: "Scénario 2: Femme - Santé hormonale",
    answers: [
      {
        questionId: 1,
        answers: ["Femme"]
      },
      {
        questionId: 2,
        answers: ["Améliorer l'énergie"]
      },
      {
        questionId: 3,
        answers: ["Déséquilibres hormonaux"]
      }
    ],
    expectedCategories: ["women_specific", "hormonal_health", "energy"],
    minimumProducts: 2
  },
  {
    name: "Scénario 3: Autre - Bien-être général",
    answers: [
      {
        questionId: 1,
        answers: ["Autre"]
      },
      {
        questionId: 2,
        answers: ["Renforcer l'immunité"]
      },
      {
        questionId: 3,
        answers: ["Aucune"]
      }
    ],
    expectedCategories: ["immune"],
    minimumProducts: 1
  },
  {
    name: "Scénario 4: Ne pas répondre - Stress et sommeil",
    answers: [
      {
        questionId: 1,
        answers: ["Je préfère ne pas répondre"]
      },
      {
        questionId: 2,
        answers: ["Améliorer le sommeil"]
      },
      {
        questionId: 3,
        answers: ["Stress, anxiété ou sautes d'humeur"]
      }
    ],
    expectedCategories: ["sleep", "stress"],
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
        gender: scenario.answers[0]?.answers[0],
        primaryGoal: scenario.answers[1]?.answers[0],
        healthConcerns: scenario.answers[2]?.answers
      });
      
      console.log("Recommendations:", recommendations.map(r => ({
        name: r.name,
        categories: r.categories,
        confidenceLevel: r.confidenceLevel,
        recommendationReason: r.recommendationReason
      })));
      
      // Vérifier le nombre minimum de recommandations
      if (recommendations.length < scenario.minimumProducts) {
        console.error(`❌ Error: Not enough recommendations. Expected at least ${scenario.minimumProducts}, got ${recommendations.length}`);
        allTestsPassed = false;
      } else {
        console.log("✅ Correct number of recommendations");
      }
      
      // Vérifier la couverture des catégories attendues
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
      
      // Vérifier les niveaux de confiance
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
