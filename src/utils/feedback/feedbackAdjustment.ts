import { Product } from "@/components/results/ProductCard";
import { feedbackStorage } from "./feedbackStorage";
import { ProductWithFeedback } from "./types";

const FEEDBACK_WEIGHT = 0.2; // 20% influence from feedback

export function adjustProductScores(products: Product[]): ProductWithFeedback[] {
  return products.map(product => {
    const stats = feedbackStorage.getProductStats(product.id);
    
    // Only adjust if there's feedback
    if (stats.totalFeedback === 0) {
      return product;
    }

    // Calculate feedback adjustment
    const ratingInfluence = ((stats.averageRating / 5) - 0.5) * 2; // -1 to 1
    const helpfulnessInfluence = 
      (stats.helpfulCount - stats.unhelpfulCount) / 
      Math.max(1, stats.totalFeedback); // -1 to 1

    const feedbackAdjustment = 
      (ratingInfluence + helpfulnessInfluence) / 2 * FEEDBACK_WEIGHT;

    // Adjust confidence level based on feedback
    const adjustedConfidence = Math.min(
      100,
      Math.max(
        0,
        product.confidenceLevel * (1 + feedbackAdjustment)
      )
    );

    return {
      ...product,
      confidenceLevel: Math.round(adjustedConfidence),
      feedbackStats: stats
    };
  });
}