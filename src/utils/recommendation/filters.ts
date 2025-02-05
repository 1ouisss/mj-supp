import { ProductDefinition } from "../products/productTypes";

export function isProductGenderAppropriate(product: ProductDefinition, gender: string): boolean {
  // Exclude menopause products for men
  if (gender === "Homme" && 
      (product.categories.includes("women_specific") || 
       product.name.toLowerCase().includes('ménopause'))) {
    return false;
  }
  
  // For women, allow women-specific products
  if (gender === "Femme" && product.categories.includes("men_specific")) {
    return false;
  }
  
  // For non-binary/prefer not to say, exclude gender-specific products
  if (gender === "Autre" || gender === "Je préfère ne pas répondre") {
    if (product.categories.includes("women_specific") || 
        product.categories.includes("men_specific")) {
      return false;
    }
  }
  
  return true;
}

export function isAgeAppropriate(product: ProductDefinition, age: string): boolean {
  // For children, only recommend children-specific products
  if (age === "<18") {
    return product.categories.includes("children");
  }
  
  // For adults, exclude children-specific products
  if (age !== "<18" && product.categories.includes("children")) {
    return false;
  }
  
  return true;
}

export function shouldExcludeProduct(product: ProductDefinition, healthConcerns: string[]): boolean {
  // Exclude melatonin if no sleep-related concerns
  if (product.name.toLowerCase().includes('mélatonine') && 
      !healthConcerns.some(concern => 
        concern.toLowerCase().includes('sommeil') || 
        concern.toLowerCase().includes('dormir'))) {
    return true;
  }
  
  // Add other specific exclusion rules here
  return false;
}