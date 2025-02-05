import { ProductDefinition } from "../products/productTypes";
import { Answer } from "@/components/quiz/types";

export function isProductGenderAppropriate(product: ProductDefinition, gender: string): boolean {
  // Exclude menopause products for men
  if (gender === "Homme" && 
      (product.categories.includes("santé_femme") || 
       product.name.toLowerCase().includes('ménopause'))) {
    console.log(`Excluding ${product.name} - women-specific product for male user`);
    return false;
  }
  
  // For women, exclude men-specific products
  if (gender === "Femme" && product.categories.includes("santé_homme")) {
    console.log(`Excluding ${product.name} - men-specific product for female user`);
    return false;
  }
  
  // For non-binary/prefer not to say, exclude gender-specific products
  if (gender === "Autre" || gender === "Je préfère ne pas répondre") {
    if (product.categories.includes("santé_femme") || 
        product.categories.includes("santé_homme")) {
      console.log(`Excluding ${product.name} - gender-specific product for non-binary/undisclosed user`);
      return false;
    }
  }
  
  return true;
}

export function isAgeAppropriate(product: ProductDefinition, age: string): boolean {
  // For children, only recommend children-specific products
  if (age === "<18") {
    const isAppropriate = product.categories.includes("enfants");
    if (!isAppropriate) {
      console.log(`Excluding ${product.name} - not suitable for children`);
    }
    return isAppropriate;
  }
  
  // For adults, exclude children-specific products
  if (age !== "<18" && product.categories.includes("enfants")) {
    console.log(`Excluding ${product.name} - children-specific product for adult user`);
    return false;
  }
  
  return true;
}