import { Answer } from "@/components/quiz/types";
import { ProductDefinition } from "../products/productTypes";

export function shouldExcludeProduct(product: ProductDefinition, answers: Answer[]): boolean {
  const healthConcerns = answers
    .find(a => a.questionId === 4)?.answers
    .map(String) || [];
  
  const primaryGoal = answers.find(a => a.questionId === 3)?.answers[0];

  // Exclude melatonin if no sleep-related concerns
  if (product.name.toLowerCase().includes('mélatonine') && 
      !healthConcerns.some(concern => 
        concern.toLowerCase().includes('sommeil') || 
        concern.toLowerCase().includes('dormir')) &&
      primaryGoal !== "Améliorer le sommeil") {
    console.log('Excluding melatonin - no sleep concerns');
    return true;
  }

  // Exclude focus products if no concentration/brain concerns
  if (product.name.toLowerCase().includes('focus') && 
      !healthConcerns.some(concern => 
        concern.toLowerCase().includes('concentration')) &&
      primaryGoal !== "Soutenir la santé cérébrale") {
    console.log('Excluding focus product - no concentration concerns');
    return true;
  }

  return false;
}