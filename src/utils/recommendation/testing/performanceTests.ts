import { getRecommendations } from "../../recommendationLogic";
import PerformanceMonitor from "../../performanceMonitor";
import { CORE_TEST_SCENARIOS } from "./scenarios";

export function testPerformance(): boolean {
  console.group("Testing Performance");
  
  const TEST_ITERATIONS = 100;
  const MAX_ALLOWED_TIME = 50;
  
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