import { supabase } from "@/integrations/supabase/client";
import { PRODUCTS } from "./productDatabase";
import { ProductDefinition, ProductCategory } from "./productTypes";
import { toast } from "sonner";

interface ValidationResult {
  missingInLocal: string[];
  missingInSupabase: string[];
  categoryMismatches: Array<{
    name: string;
    supabaseCategories: string[];
    localCategories: string[];
  }>;
  urlMismatches: Array<{
    name: string;
    supabaseUrl: string;
    localUrl: string;
  }>;
}

export async function validateProductSync(): Promise<ValidationResult> {
  console.group("🔄 Validating Product Synchronization");
  
  const { data: supabaseProducts, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    console.error("Error fetching products from Supabase:", error);
    toast.error("Erreur lors de la vérification de la synchronisation");
    throw error;
  }

  const result: ValidationResult = {
    missingInLocal: [],
    missingInSupabase: [],
    categoryMismatches: [],
    urlMismatches: []
  };

  // Check for products in Supabase but not in local
  supabaseProducts.forEach(supabaseProduct => {
    const localProduct = PRODUCTS.find(p => p.name === supabaseProduct.name);
    if (!localProduct) {
      result.missingInLocal.push(supabaseProduct.name);
    } else {
      // Check for category mismatches
      const supabaseCategories = new Set(supabaseProduct.categories);
      const localCategories = new Set(localProduct.categories);
      
      if (supabaseCategories.size !== localCategories.size || 
          ![...supabaseCategories].every(cat => 
            localCategories.has(cat as ProductCategory)
          )) {
        result.categoryMismatches.push({
          name: supabaseProduct.name,
          supabaseCategories: Array.from(supabaseCategories),
          localCategories: Array.from(localCategories)
        });
      }

      // Check for URL mismatches
      if (supabaseProduct.product_url !== localProduct.productUrl) {
        result.urlMismatches.push({
          name: supabaseProduct.name,
          supabaseUrl: supabaseProduct.product_url,
          localUrl: localProduct.productUrl
        });
      }
    }
  });

  // Check for products in local but not in Supabase
  PRODUCTS.forEach(localProduct => {
    const supabaseProduct = supabaseProducts.find(p => p.name === localProduct.name);
    if (!supabaseProduct) {
      result.missingInSupabase.push(localProduct.name);
    }
  });

  console.log("Validation Results:", result);
  console.groupEnd();
  return result;
}

export async function syncValidationCheck() {
  try {
    const result = await validateProductSync();
    const hasIssues = Object.values(result).some(arr => arr.length > 0);
    
    if (hasIssues) {
      console.error("⚠️ Synchronization issues detected");
      toast.error("Des problèmes de synchronisation ont été détectés");
      return false;
    } else {
      console.log("✅ Products are properly synchronized");
      toast.success("La synchronisation est correcte");
      return true;
    }
  } catch (error) {
    console.error("Error during sync validation:", error);
    toast.error("Erreur lors de la validation de la synchronisation");
    return false;
  }
}

// Run validation in development
if (process.env.NODE_ENV === 'development') {
  syncValidationCheck().then(isValid => {
    console.log(`Sync validation ${isValid ? 'passed' : 'failed'}`);
  });
}