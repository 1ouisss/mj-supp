import { Product } from "@/components/results/ProductCard";
import { WEIGHTS } from "./constants";

export function ensureCategoryDiversity(recommendations: Product[]): Product[] {
  const categoryCount: { [key: string]: number } = {};
  const diverseRecommendations: Product[] = [];

  recommendations.forEach(product => {
    const canAdd = product.categories.every(category => 
      (categoryCount[category] || 0) < WEIGHTS.MAX_PRODUCTS_PER_CATEGORY
    );

    if (canAdd) {
      product.categories.forEach(category => {
        categoryCount[category] = (categoryCount[category] || 0) + 1;
      });
      diverseRecommendations.push(product);
    }
  });

  return diverseRecommendations;
}