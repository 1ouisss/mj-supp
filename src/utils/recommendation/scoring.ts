import { ProductCategory } from "../products/productTypes";
import { WEIGHTS, CATEGORY_RELATIONSHIPS } from "./constants";

export function normalizeAnswer(answer: string | number): string {
  return String(answer).toLowerCase().trim();
}

export function calculateCategoryScore(productCategories: ProductCategory[], targetCategories: string[]): number {
  let score = 0;
  const normalizedTargets = targetCategories.map(cat => normalizeAnswer(cat));
  
  productCategories.forEach(category => {
    const normalizedCategory = normalizeAnswer(category);
    // Direct category match
    if (normalizedTargets.includes(normalizedCategory)) {
      score += WEIGHTS.CATEGORY_MATCH;
      console.log(`Category match for ${category}: +${WEIGHTS.CATEGORY_MATCH}`);
    }
    // Related category bonus
    else if (isRelatedCategory(normalizedCategory, normalizedTargets)) {
      score += WEIGHTS.RELATED_CATEGORY;
      console.log(`Related category match for ${category}: +${WEIGHTS.RELATED_CATEGORY}`);
    }
  });
  
  return score;
}

export function calculateTherapeuticScore(claims: string[] | undefined, concerns: string[]): number {
  if (!claims) return 0;
  
  let score = 0;
  const normalizedConcerns = concerns.map(c => normalizeAnswer(c));
  
  claims.forEach(claim => {
    const normalizedClaim = normalizeAnswer(claim);
    const matchingConcerns = normalizedConcerns.filter(concern => 
      normalizedClaim.includes(concern) || 
      concern.includes(normalizedClaim)
    );
    
    if (matchingConcerns.length > 0) {
      const claimScore = WEIGHTS.THERAPEUTIC_CLAIM * matchingConcerns.length;
      score += claimScore;
      console.log(`Therapeutic claim match: +${claimScore}`);
    }
  });
  
  return score;
}

function isRelatedCategory(category: string, targetCategories: string[]): boolean {
  return targetCategories.some(target => 
    CATEGORY_RELATIONSHIPS[category]?.includes(target) || 
    CATEGORY_RELATIONSHIPS[target]?.includes(category)
  );
}