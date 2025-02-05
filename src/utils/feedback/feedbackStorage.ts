import { ProductFeedbackData, FeedbackStats } from "./types";

const FEEDBACK_STORAGE_KEY = "product_feedback";

export const feedbackStorage = {
  getAllFeedback(): ProductFeedbackData[] {
    try {
      const stored = localStorage.getItem(FEEDBACK_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error reading feedback from storage:", error);
      return [];
    }
  },

  saveFeedback(feedback: ProductFeedbackData): void {
    try {
      const existing = this.getAllFeedback();
      existing.push(feedback);
      localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(existing));
    } catch (error) {
      console.error("Error saving feedback to storage:", error);
    }
  },

  getProductStats(productId: string): FeedbackStats {
    const allFeedback = this.getAllFeedback();
    const productFeedback = allFeedback.filter(f => f.productId === productId);
    
    if (productFeedback.length === 0) {
      return {
        averageRating: 0,
        helpfulCount: 0,
        unhelpfulCount: 0,
        totalFeedback: 0
      };
    }

    const totalRating = productFeedback.reduce((sum, f) => sum + f.rating, 0);
    const helpfulCount = productFeedback.filter(f => f.isHelpful === true).length;
    const unhelpfulCount = productFeedback.filter(f => f.isHelpful === false).length;

    return {
      averageRating: totalRating / productFeedback.length,
      helpfulCount,
      unhelpfulCount,
      totalFeedback: productFeedback.length
    };
  },

  clearAllFeedback(): void {
    localStorage.removeItem(FEEDBACK_STORAGE_KEY);
  }
};