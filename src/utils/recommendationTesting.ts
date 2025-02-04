import { Answer } from "@/components/quiz/types";
import { getRecommendations } from "@/utils/recommendationLogic";
import { ProductCategory } from "./products/productTypes";
import { Product } from "@/components/results/ProductCard";

interface TestScenario {
  name: string;
  answers: Answer[];
  expectedCategories: ProductCategory[];
  minimumProducts: number;
  expectedTopProducts?: string[];
  validateFn?: (recommendations: Product[]) => boolean;
}

const TEST_SCENARIOS: TestScenario[] = [
  {
    name: "Scénario 1: Santé cérébrale et stress",
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
    minimumProducts: 2,
    expectedTopProducts: ["focus", "omega-3"]
  },
  {
    name: "Scénario 2: Problèmes digestifs",
    answers: [
      {
        questionId: 1,
        answers: ["Femme"]
      },
      {
        questionId: 2,
        answers: ["Améliorer la digestion"]
      },
      {
        questionId: 3,
        answers: ["Problèmes digestifs"]
      }
    ],
    expectedCategories: ["digestive"],
    minimumProducts: 2,
    expectedTopProducts: ["jus-aloes", "fibres-ami"]
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

const DIVERSITY_TEST_SCENARIOS: TestScenario[] = [
  {
    name: "Test de diversité 1: Santé cérébrale et digestive",
    answers: [
      {
        questionId: 1,
        answers: ["Femme"]
      },
      {
        questionId: 2,
        answers: ["Soutenir la santé cérébrale"]
      },
      {
        questionId: 3,
        answers: ["Problèmes digestifs"]
      }
    ],
    expectedCategories: ["brain", "digestive"],
    minimumProducts: 2,
    expectedTopProducts: ["focus", "jus-aloes"]
  },
  {
    name: "Test de diversité 2: Stress et sommeil",
    answers: [
      {
        questionId: 1,
        answers: ["Homme"]
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
    expectedCategories: ["sleep", "stress", "relaxation"],
    minimumProducts: 2
  }
];

const GENDER_SPECIFIC_TEST_SCENARIOS: TestScenario[] = [
  {
    name: "Test Homme - Exclusion produits féminins",
    answers: [
      {
        questionId: 1,
        answers: ["Homme"]
      },
      {
        questionId: 2,
        answers: ["Renforcer l'immunité"]
      }
    ],
    expectedCategories: ["immune"],
    minimumProducts: 1,
    validateFn: (recommendations: Product[]) => {
      const hasWomenSpecific = recommendations.some(r => 
        r.categories.includes("women_specific")
      );
      if (hasWomenSpecific) {
        console.error("❌ Found women-specific products in recommendations for male user");
        return false;
      }
      return true;
    }
  },
  {
    name: "Test Femme - Exclusion produits masculins",
    answers: [
      {
        questionId: 1,
        answers: ["Femme"]
      },
      {
        questionId: 2,
        answers: ["Renforcer l'immunité"]
      }
    ],
    expectedCategories: ["immune"],
    minimumProducts: 1,
    validateFn: (recommendations: Product[]) => {
      const hasMenSpecific = recommendations.some(r => 
        r.categories.includes("men_specific")
      );
      if (hasMenSpecific) {
        console.error("❌ Found men-specific products in recommendations for female user");
        return false;
      }
      return true;
    }
  },
  {
    name: "Test Préférence non spécifiée - Produits neutres uniquement",
    answers: [
      {
        questionId: 1,
        answers: ["Je préfère ne pas répondre"]
      },
      {
        questionId: 2,
        answers: ["Renforcer l'immunité"]
      }
    ],
    expectedCategories: ["immune"],
    minimumProducts: 1,
    validateFn: (recommendations: Product[]) => {
      const hasGenderSpecific = recommendations.some(r => 
        r.categories.includes("women_specific") || r.categories.includes("men_specific")
      );
      if (hasGenderSpecific) {
        console.error("❌ Found gender-specific products in recommendations for neutral user");
        return false;
      }
      return true;
    }
  }
];

export function runRecommendationTests() {
  console.group("Running Recommendation Algorithm Tests");
  
  let allTestsPassed = true;
  
  // Tests existants
  TEST_SCENARIOS.forEach(scenario => {
    console.group(`Test: ${scenario.name}`);
    
    try {
      const recommendations = getRecommendations(scenario.answers);
      
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
      
      // Nouveau test pour vérifier les produits attendus en tête
      if (scenario.expectedTopProducts) {
        const topProductIds = recommendations.slice(0, 2).map(r => r.id);
        const hasExpectedTopProducts = scenario.expectedTopProducts.every(
          expectedId => topProductIds.includes(expectedId)
        );
        
        if (!hasExpectedTopProducts) {
          console.error("❌ Error: Top products do not match expected products");
          console.log("Expected:", scenario.expectedTopProducts);
          console.log("Got:", topProductIds);
          allTestsPassed = false;
        } else {
          console.log("✅ Top products match expected products");
        }
      }
      
    } catch (error) {
      console.error("❌ Test failed with error:", error);
      allTestsPassed = false;
    }
    
    console.groupEnd();
  });

  // Tests de diversité
  console.group("Running Diversity Tests");
  
  DIVERSITY_TEST_SCENARIOS.forEach(scenario => {
    console.group(`Test: ${scenario.name}`);
    
    try {
      const recommendations = getRecommendations(scenario.answers);
      
      // Test de diversité
      const diversityPassed = testDiversityRequirements(recommendations);
      if (!diversityPassed) {
        allTestsPassed = false;
      } else {
        console.log("✅ Diversité des recommandations validée");
      }
      
    } catch (error) {
      console.error("❌ Test failed with error:", error);
      allTestsPassed = false;
    }
    
    console.groupEnd();
  });
  
  // Nouveaux tests spécifiques au genre
  console.group("Running Gender-Specific Tests");
  
  GENDER_SPECIFIC_TEST_SCENARIOS.forEach(scenario => {
    console.group(`Test: ${scenario.name}`);
    
    try {
      const recommendations = getRecommendations(scenario.answers);
      
      // Validation spécifique au genre
      if (scenario.validateFn && !scenario.validateFn(recommendations)) {
        allTestsPassed = false;
      } else {
        console.log("✅ Gender-specific validation passed");
      }
      
    } catch (error) {
      console.error("❌ Test failed with error:", error);
      allTestsPassed = false;
    }
    
    console.groupEnd();
  });
  
  console.groupEnd();
  
  if (allTestsPassed) {
    console.log("✅ All tests passed successfully");
  } else {
    console.error("❌ Some tests failed");
  }
  
  console.groupEnd();
}
