import { Product } from "@/components/results/ProductCard";

export interface ProductFeedbackData {
  productId: string;
  rating: number;
  isHelpful: boolean | null;
  additionalFeedback?: string;
  timestamp: number;
}

export interface FeedbackStats {
  averageRating: number;
  helpfulCount: number;
  unhelpfulCount: number;
  totalFeedback: number;
}

export interface ProductWithFeedback extends Product {
  feedbackStats?: FeedbackStats;
}