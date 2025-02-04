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
  | "heart_health"
  | "hormonal_health"
  | "throat_health"
  | "muscle"
  | "joint_health"
  | "metabolism"
  | "seasonal"
  | "topical"
  | "pain"
  | "healing"
  | "essential"
  | "bone_health"
  | "children"
  | "nails"
  | "migraine"
  | "thyroid"
  | "women_specific"
  | "men_specific";

export interface ProductScore {
  condition: string;
  score: number;
  incompatibleWith?: string[];
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