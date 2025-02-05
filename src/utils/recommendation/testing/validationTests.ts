import { Answer } from "@/components/quiz/types";
import { Product } from "@/components/results/ProductCard";
import { getRecommendations } from "../../recommendationLogic";
import PerformanceMonitor from "../../performanceMonitor";

export function validateRecommendationSystem() {
  console.group("🧪 Running Validation Tests");
  let allTestsPassed = true;

  // Test edge cases
  const edgeCases = [
    { name: "Empty answers", answers: [] },
    { name: "Invalid gender", answers: [{ questionId: 1, answers: ["InvalidGender"] }] },
    { name: "Missing age", answers: [{ questionId: 1, answers: ["Homme"] }] },
    { name: "Invalid health concerns", answers: [
      { questionId: 1, answers: ["Homme"] },
      { questionId: 2, answers: ["30-40"] },
      { questionId: 4, answers: ["InvalidConcern"] }
    ]},
  ];

  edgeCases.forEach(testCase => {
    try {
      console.group(`Testing edge case: ${testCase.name}`);
      const recommendations = getRecommendations(testCase.answers as Answer[]);
      
      // Validate recommendation structure
      recommendations.forEach(validateRecommendation);
      
      console.log(`✅ Edge case handled successfully: ${testCase.name}`);
    } catch (error) {
      console.error(`❌ Edge case failed: ${testCase.name}`, error);
      allTestsPassed = false;
    }
    console.groupEnd();
  });

  // Performance stress test
  try {
    console.group("Running Performance Stress Test");
    const ITERATIONS = 1000;
    const validAnswers: Answer[] = [
      { questionId: 1, answers: ["Homme"] },
      { questionId: 2, answers: ["30-40"] },
      { questionId: 3, answers: ["Stress"] },
      { questionId: 4, answers: ["Sommeil difficile"] }
    ];

    PerformanceMonitor.startMeasure("stress-test");
    
    for (let i = 0; i < ITERATIONS; i++) {
      getRecommendations(validAnswers);
    }
    
    PerformanceMonitor.endMeasure("stress-test");
    
    const metrics = PerformanceMonitor.getMetrics();
    const stressTest = metrics.find(m => m.name === "stress-test");
    
    if (stressTest?.duration && stressTest.duration / ITERATIONS > 0.1) {
      console.error(`❌ Performance test failed: Average response time exceeded 0.1ms per recommendation`);
      allTestsPassed = false;
    } else {
      console.log("✅ Performance test passed");
    }
  } catch (error) {
    console.error("❌ Performance test failed with error:", error);
    allTestsPassed = false;
  }
  console.groupEnd();

  // Generate final report
  console.log("\n📋 Test Summary:");
  console.log(PerformanceMonitor.generateReport());
  
  if (allTestsPassed) {
    console.log("✅ All validation tests passed successfully");
  } else {
    console.error("❌ Some validation tests failed");
  }
  
  console.groupEnd();
  return allTestsPassed;
}

function validateRecommendation(product: Product) {
  // Validate required fields
  const requiredFields = [
    'id', 'name', 'description', 'imageUrl', 'expectedResults',
    'recommendationReason', 'dietaryInfo', 'productUrl', 'categories',
    'confidenceLevel'
  ];

  requiredFields.forEach(field => {
    if (!product[field as keyof Product]) {
      throw new Error(`Missing required field: ${field}`);
    }
  });

  // Validate types
  if (typeof product.confidenceLevel !== 'number' || 
      product.confidenceLevel < 0 || 
      product.confidenceLevel > 100) {
    throw new Error(`Invalid confidence level: ${product.confidenceLevel}`);
  }

  if (!Array.isArray(product.categories) || product.categories.length === 0) {
    throw new Error('Categories must be a non-empty array');
  }

  // Validate image URL
  const img = new Image();
  img.src = product.imageUrl;
  img.onerror = () => {
    console.warn(`⚠️ Invalid image URL for product ${product.id}: ${product.imageUrl}`);
  };
}