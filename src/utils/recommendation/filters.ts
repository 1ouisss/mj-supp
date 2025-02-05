import { ProductDefinition } from "../products/productTypes";

export function isProductGenderAppropriate(product: ProductDefinition, gender: string): boolean {
  if (gender === "Homme" && product.categories.includes("women_specific")) {
    return false;
  }
  if (gender === "Femme" && product.categories.includes("men_specific")) {
    return false;
  }
  if (gender === "Je préfère ne pas répondre" && 
      (product.categories.includes("women_specific") || product.categories.includes("men_specific"))) {
    return false;
  }
  return true;
}

export function isAgeAppropriate(product: ProductDefinition, age: string): boolean {
  if (age === "<18" && !product.categories.includes("children")) {
    return false;
  }
  if (age !== "<18" && product.categories.includes("children")) {
    return false;
  }
  return true;
}