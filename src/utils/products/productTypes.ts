export type ProductCategory = 
  | "relaxation" 
  | "sleep" 
  | "stress" 
  | "digestive" 
  | "general_health" 
  | "brain" 
  | "concentration" 
  | "energy" 
  | "hair_health" 
  | "skin"
  | "immune"
  | "muscle"
  | "seasonal"
  | "hormonal_health"
  | "migraine"
  | "heart_health"
  | "thyroid"
  | "metabolism"
  | "throat_health"
  | "topical"
  | "pain"
  | "healing"
  | "women_specific"
  | "men_specific";

export interface ProductScore {
  condition: string;
  score: number;
}

export interface ProductDefinition {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  expectedResults: string;
  recommendationReason: string;
  dietaryInfo: string;
  productUrl: string;
  categories: ProductCategory[];
  scores: ProductScore[];
  therapeuticClaims?: string[];
}