import { Answer } from "@/components/quiz/types";
import { ProductDefinition } from "../products/productTypes";

export function shouldExcludeProduct(product: ProductDefinition, answers: Answer[]): boolean {
  const healthConcerns = answers
    .find(a => a.questionId === 4)?.answers
    .map(String) || [];
  
  const primaryGoal = answers.find(a => a.questionId === 3)?.answers[0];

  // Exclude sleep products if no sleep-related concerns or goals
  if (product.categories.includes('sommeil') && 
      !healthConcerns.some(concern => 
        concern.toLowerCase().includes('sommeil') || 
        concern.toLowerCase().includes('dormir')) &&
      primaryGoal !== "Améliorer le sommeil") {
    console.log(`Excluding ${product.name} - no sleep concerns or goals`);
    return true;
  }

  // Exclude brain/focus products if no concentration/brain concerns or goals
  if (product.categories.includes('cerveau') && 
      !healthConcerns.some(concern => 
        concern.toLowerCase().includes('concentration')) &&
      primaryGoal !== "Soutenir la santé cérébrale") {
    console.log(`Excluding ${product.name} - no brain/concentration concerns or goals`);
    return true;
  }

  // Exclude stress products if no stress-related concerns or goals
  if (product.categories.includes('stress') && 
      !healthConcerns.some(concern => 
        concern.toLowerCase().includes('stress') || 
        concern.toLowerCase().includes('anxiété')) &&
      primaryGoal !== "Gérer le stress") {
    console.log(`Excluding ${product.name} - no stress concerns or goals`);
    return true;
  }

  return false;
}