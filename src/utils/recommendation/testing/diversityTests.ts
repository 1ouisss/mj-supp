import { Product } from "@/components/results/ProductCard";
import { ProductCategory } from "../../products/productTypes";

export function testDiversityRequirements(recommendations: Product[]): boolean {
  console.group("Testing Diversity Requirements");
  
  const uniqueCategories = new Set<ProductCategory>();
  recommendations.forEach(product => {
    product.categories.forEach(category => uniqueCategories.add(category));
  });
  
  if (uniqueCategories.size < 2) {
    console.error("❌ Not enough category diversity. Found:", Array.from(uniqueCategories));
    console.groupEnd();
    return false;
  }
  
  const productIds = recommendations.map(p => p.id);
  const uniqueProductIds = new Set(productIds);
  if (uniqueProductIds.size !== productIds.length) {
    console.error("❌ Duplicate products found in recommendations");
    console.groupEnd();
    return false;
  }
  
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