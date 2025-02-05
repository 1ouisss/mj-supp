import { supabase } from "@/integrations/supabase/client";
import { Answer } from "@/components/quiz/types";
import { Product } from "@/components/results/ProductCard";
import { ProductFeedback } from "@/components/results/FeedbackForm";

interface TestResult {
  success: boolean;
  message: string;
  error?: any;
}

export async function testSupabaseIntegration() {
  console.group("🧪 Running Supabase Integration Tests");
  const results: TestResult[] = [];

  // Test 1: Save user quiz responses
  const testAnswers: Answer[] = [
    { questionId: 1, answers: ["Femme"] },
    { questionId: 2, answers: ["18-35"] },
    { questionId: 3, answers: ["Améliorer l'énergie"] }
  ];

  try {
    const { data: userResponse, error } = await supabase
      .from('user_responses')
      .insert([{ responses: testAnswers }])
      .select()
      .single();

    if (error) throw error;

    results.push({
      success: true,
      message: "✅ User responses saved successfully",
    });

    // Test 2: Query products
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('*');

    if (productsError) throw productsError;

    results.push({
      success: true,
      message: `✅ Products retrieved successfully (${products.length} products found)`,
    });

    // Test 3: Save recommendations
    if (userResponse && products.length > 0) {
      const testRecommendation = {
        user_response_id: userResponse.id,
        product_ids: [products[0].id],
        confidence_scores: [85]
      };

      const { data: recommendation, error: recError } = await supabase
        .from('recommendations')
        .insert([testRecommendation])
        .select()
        .single();

      if (recError) throw recError;

      results.push({
        success: true,
        message: "✅ Recommendation saved successfully",
      });

      // Test 4: Save feedback
      const testFeedback: ProductFeedback = {
        productId: products[0].id,
        rating: 5,
        isHelpful: true,
        additionalFeedback: "Test feedback"
      };

      const { error: feedbackError } = await supabase
        .from('feedback')
        .insert([{
          product_id: testFeedback.productId,
          recommendation_id: recommendation.id,
          rating: testFeedback.rating,
          is_helpful: testFeedback.isHelpful,
          suggestion: testFeedback.additionalFeedback
        }]);

      if (feedbackError) throw feedbackError;

      results.push({
        success: true,
        message: "✅ Feedback saved successfully",
      });

      // Test 5: Verify analytics update
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for trigger
      const { data: analytics, error: analyticsError } = await supabase
        .from('analytics')
        .select('*')
        .eq('product_id', products[0].id)
        .single();

      if (analyticsError) throw analyticsError;

      if (analytics.recommendation_count > 0 && analytics.average_rating > 0) {
        results.push({
          success: true,
          message: "✅ Analytics updated successfully",
        });
      } else {
        throw new Error("Analytics not updated as expected");
      }
    }
  } catch (error) {
    console.error("Test failed:", error);
    results.push({
      success: false,
      message: "❌ Test failed",
      error
    });
  }

  // Log results
  console.log("\n📋 Test Results:");
  results.forEach(result => {
    console.log(result.message);
    if (!result.success && result.error) {
      console.error("Error details:", result.error);
    }
  });

  console.groupEnd();

  return results;
}

// Run tests in development
if (process.env.NODE_ENV === 'development') {
  testSupabaseIntegration().then(results => {
    const allPassed = results.every(r => r.success);
    console.log(`\n${allPassed ? '✅ All tests passed!' : '❌ Some tests failed!'}`);
  });
}