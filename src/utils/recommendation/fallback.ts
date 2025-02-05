import { Product } from "@/components/results/ProductCard";
import { PRODUCTS } from "../products/productDatabase";
import { WEIGHTS } from "./constants";
import { isAgeAppropriate, isProductGenderAppropriate } from "./filters";

export function getFallbackProducts(gender: string, age: string): Product[] {
  return PRODUCTS
    .filter(product => 
      product.categories.includes("santé_générale") &&
      isProductGenderAppropriate(product, gender) &&
      isAgeAppropriate(product, age)
    )
    .map(product => ({
      ...product,
      confidenceLevel: WEIGHTS.MIN_CONFIDENCE
    }))
    .slice(0, 2);
}