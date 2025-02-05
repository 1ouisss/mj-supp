import { Product } from "@/components/results/ProductCard";
import { WEIGHTS } from "./constants";

export function ensureCategoryDiversity(recommendations: Product[]): Product[] {
  const result: Product[] = [];
  const categoryCount: { [key: string]: number } = {};
  const seenCategories = new Set<string>();
  
  // Premier passage : ajouter les produits qui introduisent de nouvelles catégories
  for (const product of recommendations) {
    const newCategories = product.categories.filter(cat => !seenCategories.has(cat));
    
    if (newCategories.length > 0) {
      // Vérifier si l'ajout ne dépasserait pas la limite par catégorie
      const wouldExceedLimit = product.categories.some(cat => 
        (categoryCount[cat] || 0) >= WEIGHTS.MAX_PRODUCTS_PER_CATEGORY
      );
      
      if (!wouldExceedLimit) {
        result.push(product);
        product.categories.forEach(cat => {
          categoryCount[cat] = (categoryCount[cat] || 0) + 1;
          seenCategories.add(cat);
        });
      }
    }
  }
  
  // Deuxième passage : compléter avec les produits restants si nécessaire
  if (result.length < WEIGHTS.MIN_RECOMMENDATIONS) {
    for (const product of recommendations) {
      if (!result.includes(product)) {
        const wouldExceedLimit = product.categories.some(cat => 
          (categoryCount[cat] || 0) >= WEIGHTS.MAX_PRODUCTS_PER_CATEGORY
        );
        
        if (!wouldExceedLimit) {
          result.push(product);
          product.categories.forEach(cat => {
            categoryCount[cat] = (categoryCount[cat] || 0) + 1;
          });
        }
      }
      
      if (result.length >= WEIGHTS.MIN_RECOMMENDATIONS) break;
    }
  }

  // Vérifier la diversité minimale
  const uniqueCategories = new Set(result.flatMap(p => p.categories));
  console.log("Nombre de catégories uniques:", uniqueCategories.size);
  
  return result;
}