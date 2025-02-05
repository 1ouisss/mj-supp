import { ProductCategory, ProductDefinition } from "../products/productTypes";
import { WEIGHTS } from "./constants";

export function calculateCategoryScore(productCategories: ProductCategory[], targetCategories: string[]): number {
  return productCategories.reduce((score, category) => {
    const isRelevant = targetCategories.includes(category);
    return score + (isRelevant ? WEIGHTS.CATEGORY_MATCH : -WEIGHTS.MISMATCH_PENALTY);
  }, 0);
}

export function calculateTherapeuticScore(claims: string[] | undefined, concerns: string[]): number {
  if (!claims) return 0;
  return claims.reduce((score, claim) => {
    const matchingConcerns = concerns.filter(concern => 
      claim.toLowerCase().includes(normalizeAnswer(concern).toLowerCase())
    );
    return score + (matchingConcerns.length * WEIGHTS.THERAPEUTIC_CLAIM);
  }, 0);
}

export function normalizeAnswer(answer: string | number): string {
  return String(answer);
}