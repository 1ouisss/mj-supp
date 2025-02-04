import { Answer } from "@/components/quiz/types";
import { getRecommendations } from "@/utils/recommendationLogic";
import { ProductCategory } from "./products/productTypes";
import { Product } from "@/components/results/ProductCard";
import { PRODUCTS } from "./products/productDatabase";
import PerformanceMonitor from "./performanceMonitor";

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

function testDiversityRequirements(recommendations: Product[]): boolean {
  // Vérifier qu'il y a au moins 2 catégories différentes
  const uniqueCategories = new Set(recommendations.flatMap(r => r.categories));
  if (uniqueCategories.size < 2) {
    console.error("❌ Not enough diversity in recommendations categories");
    console.log("Found categories:", Array.from(uniqueCategories));
    return false;
  }

  // Vérifier qu'il n'y a pas trop de produits similaires
  const categoryCount: { [key: string]: number } = {};
  recommendations.forEach(product => {
    product.categories.forEach(category => {
      categoryCount[category] = (categoryCount[category] || 0) + 1;
    });
  });

  const maxProductsPerCategory = Math.ceil(recommendations.length / 2);
  const overrepresentedCategories = Object.entries(categoryCount)
    .filter(([_, count]) => count > maxProductsPerCategory);

  if (overrepresentedCategories.length > 0) {
    console.error("❌ Some categories are overrepresented in recommendations");
    console.log("Category distribution:", categoryCount);
    return false;
  }

  console.log("✅ Recommendations meet diversity requirements");
  return true;
}

const PRECISION_TEST_SCENARIOS: TestScenario[] = [
  {
    name: "Test de précision 1: Santé cérébrale et digestive",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["Soutenir la santé cérébrale"] },
      { questionId: 3, answers: ["Problèmes digestifs"] }
    ],
    expectedCategories: ["brain", "digestive"],
    minimumProducts: 3,
    expectedTopProducts: ["focus", "omega-3", "jus-aloes"],
    validateFn: (recommendations: Product[]) => {
      const expectedIds = new Set(["focus", "omega-3", "jus-aloes"]);
      const recommendedIds = new Set(recommendations.map(r => r.id));
      const missingProducts = Array.from(expectedIds).filter(id => !recommendedIds.has(id));
      
      if (missingProducts.length > 0) {
        console.error("❌ Missing expected products:", missingProducts);
        return false;
      }
      return true;
    }
  }
];

function testProductCoverage(): boolean {
  console.group("Testing Product Coverage");
  
  const allTestScenarios = [
    ...TEST_SCENARIOS,
    ...DIVERSITY_TEST_SCENARIOS,
    ...GENDER_SPECIFIC_TEST_SCENARIOS,
    ...PRECISION_TEST_SCENARIOS
  ];
  
  const coveredProducts = new Set<string>();
  
  allTestScenarios.forEach(scenario => {
    const recommendations = getRecommendations(scenario.answers);
    recommendations.forEach(product => coveredProducts.add(product.id));
  });
  
  const uncoveredProducts = PRODUCTS.filter(p => !coveredProducts.has(p.id));
  
  if (uncoveredProducts.length > 0) {
    console.error("❌ Some products are never recommended:", 
      uncoveredProducts.map(p => p.name)
    );
    console.groupEnd();
    return false;
  }
  
  console.log("✅ All products are covered in test scenarios");
  console.groupEnd();
  return true;
}

function testPerformance(): boolean {
  console.group("Testing Performance");
  
  const TEST_ITERATIONS = 100;
  const MAX_ALLOWED_TIME = 50; // 50ms
  
  const testScenario = TEST_SCENARIOS[0]; // Use first scenario for performance testing
  const times: number[] = [];
  
  for (let i = 0; i < TEST_ITERATIONS; i++) {
    PerformanceMonitor.startMeasure(`recommendation-${i}`);
    getRecommendations(testScenario.answers);
    PerformanceMonitor.endMeasure(`recommendation-${i}`);
    
    const metric = PerformanceMonitor.getMetric(`recommendation-${i}`);
    if (metric?.duration) {
      times.push(metric.duration);
    }
  }
  
  const averageTime = times.reduce((a, b) => a + b, 0) / times.length;
  const maxTime = Math.max(...times);
  
  console.log(`Average recommendation time: ${averageTime.toFixed(2)}ms`);
  console.log(`Maximum recommendation time: ${maxTime.toFixed(2)}ms`);
  
  if (maxTime > MAX_ALLOWED_TIME) {
    console.error(`❌ Performance test failed. Max time (${maxTime.toFixed(2)}ms) exceeds limit (${MAX_ALLOWED_TIME}ms)`);
    console.groupEnd();
    return false;
  }
  
  console.log("✅ Performance requirements met");
  console.groupEnd();
  return true;
}

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
  
  // Tests spécifiques au genre
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
  
  // Nouveaux tests de précision
  console.group("Running Precision Tests");
  PRECISION_TEST_SCENARIOS.forEach(scenario => {
    console.group(`Test: ${scenario.name}`);
    
    try {
      const recommendations = getRecommendations(scenario.answers);
      
      if (scenario.validateFn && !scenario.validateFn(recommendations)) {
        allTestsPassed = false;
      } else {
        console.log("✅ Precision validation passed");
      }
      
    } catch (error) {
      console.error("❌ Test failed with error:", error);
      allTestsPassed = false;
    }
    
    console.groupEnd();
  });
  console.groupEnd();
  
  // Test de couverture des produits
  if (!testProductCoverage()) {
    allTestsPassed = false;
  }
  
  // Test de performance
  if (!testPerformance()) {
    allTestsPassed = false;
  }
  
  if (allTestsPassed) {
    console.log("✅ All tests passed successfully");
  } else {
    console.error("❌ Some tests failed");
  }
  
  console.groupEnd();
}
