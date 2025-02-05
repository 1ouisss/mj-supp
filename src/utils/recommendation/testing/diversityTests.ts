import { Product } from "@/components/results/ProductCard";
import { ProductCategory } from "../../products/productTypes";
import { WEIGHTS } from "../constants";

export function testDiversityRequirements(recommendations: Product[]): boolean {
  console.group("Testing Diversity Requirements");
  
  // Check category diversity
  const uniqueCategories = new Set<ProductCategory>();
  recommendations.forEach(product => {
    product.categories.forEach(category => uniqueCategories.add(category));
  });
  
  if (uniqueCategories.size < WEIGHTS.MIN_CATEGORIES) {
    console.error(`❌ Not enough category diversity. Found: ${uniqueCategories.size}, Required: ${WEIGHTS.MIN_CATEGORIES}`);
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
  
  const overrepresentedCategories = Object.entries(categoryCount)
    .filter(([_, count]) => count > WEIGHTS.MAX_PRODUCTS_PER_CATEGORY);
  
  if (overrepresentedCategories.length > 0) {
    console.error("❌ Some categories are overrepresented:", overrepresentedCategories);
    console.groupEnd();
    return false;
  }

  console.log("✅ All diversity requirements met");
  console.log("Category distribution:", categoryCount);
  console.groupEnd();
  return true;
}