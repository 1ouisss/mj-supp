import { Answer } from "@/components/quiz/types";
import { getRecommendations } from "@/utils/recommendationLogic";
import { ProductCategory } from "./products/productTypes";
import { Product } from "@/components/results/ProductCard";
import { PRODUCTS } from "./products/productDatabase";
import PerformanceMonitor from "./performanceMonitor";

// Core test scenarios covering main use cases
const CORE_TEST_SCENARIOS = [
  {
    name: "Scénario 1: Santé cérébrale et problèmes digestifs",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["25-34"] },
      { questionId: 3, answers: ["Soutenir la santé cérébrale"] },
      { questionId: 4, answers: ["Problèmes digestifs"] }
    ],
    expectedProducts: ["focus", "omega-3", "jus-aloes"],
    expectedCategories: ["brain" as ProductCategory, "digestive" as ProductCategory],
    minimumProducts: 3
  },
  {
    name: "Scénario 2: Sommeil et stress",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["35-44"] },
      { questionId: 3, answers: ["Améliorer le sommeil"] },
      { questionId: 4, answers: ["Gérer le stress"] },
      {
        questionId: 401,
        answers: ["Oui"],
        followUpAnswers: [
          { questionId: 402, answers: [4] } // Stress severity
        ]
      }
    ],
    expectedProducts: ["melatonine", "magnesium", "poudre-dodo"],
    expectedCategories: ["sleep" as ProductCategory, "relaxation" as ProductCategory],
    minimumProducts: 3
  },
  {
    name: "Scénario 3: Équilibre hormonal féminin",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["45-54"] },
      { questionId: 3, answers: ["Équilibre hormonal"] },
      { questionId: 4, answers: ["Symptômes de la ménopause"] }
    ],
    expectedProducts: ["formule-menopause", "selenium"],
    expectedCategories: ["hormones" as ProductCategory, "women_specific" as ProductCategory],
    minimumProducts: 2
  }
];

const GENDER_TEST_SCENARIOS = [
  {
    name: "Test Homme - Exclusion produits féminins",
    answers: [
      { questionId: 1, answers: ["Homme"] },
      { questionId: 2, answers: ["Renforcer l'immunité"] }
    ],
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
    name: "Test Neutre - Produits neutres uniquement",
    answers: [
      { questionId: 1, answers: ["Je préfère ne pas répondre"] },
      { questionId: 2, answers: ["Renforcer l'immunité"] }
    ],
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
  console.group("Testing Diversity Requirements");
  
  // Check minimum number of categories
  const uniqueCategories = new Set<ProductCategory>();
  recommendations.forEach(product => {
    product.categories.forEach(category => uniqueCategories.add(category));
  });
  
  if (uniqueCategories.size < 2) {
    console.error("❌ Not enough category diversity. Found:", Array.from(uniqueCategories));
    console.groupEnd();
    return false;
  }
  
  // Check for duplicates
  const productIds = recommendations.map(p => p.id);
  const uniqueProductIds = new Set(productIds);
  if (uniqueProductIds.size !== productIds.length) {
    console.error("❌ Duplicate products found in recommendations");
    console.groupEnd();
    return false;
  }
  
  // Check category distribution
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
    console.error("❌ Some categories are overrepresented:", overrepresentedCategories);
    console.groupEnd();
    return false;
  }

  console.log("✅ Diversity requirements met");
  console.groupEnd();
  return true;
}

function testPerformance(): boolean {
  console.group("Testing Performance");
  
  const TEST_ITERATIONS = 100;
  const MAX_ALLOWED_TIME = 50; // 50ms
  
  const testScenario = CORE_TEST_SCENARIOS[0];
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
  console.group("Running Recommendation System Tests");
  let allTestsPassed = true;

  // Test core scenarios
  CORE_TEST_SCENARIOS.forEach(scenario => {
    console.group(`Test: ${scenario.name}`);
    try {
      const recommendations = getRecommendations(scenario.answers);
      
      // Check minimum recommendations
      if (recommendations.length < scenario.minimumProducts) {
        console.error(`❌ Not enough recommendations. Expected at least ${scenario.minimumProducts}, got ${recommendations.length}`);
        allTestsPassed = false;
      }

      // Check expected products
      const recommendedIds = recommendations.map(r => r.id);
      const missingProducts = scenario.expectedProducts.filter(id => !recommendedIds.includes(id));
      if (missingProducts.length > 0) {
        console.error("❌ Missing expected products:", missingProducts);
        allTestsPassed = false;
      }

      // Check categories
      const recommendedCategories = new Set(recommendations.flatMap(r => r.categories));
      const missingCategories = scenario.expectedCategories.filter(cat => !recommendedCategories.has(cat));
      if (missingCategories.length > 0) {
        console.error("❌ Missing expected categories:", missingCategories);
        allTestsPassed = false;
      }

      // Check confidence levels
      const lowConfidenceProducts = recommendations.filter(r => r.confidenceLevel < 80);
      if (lowConfidenceProducts.length > 0) {
        console.error("❌ Products with low confidence found:", 
          lowConfidenceProducts.map(p => `${p.name}: ${p.confidenceLevel}%`)
        );
        allTestsPassed = false;
      }

      // Test diversity
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
