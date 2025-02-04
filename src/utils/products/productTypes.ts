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
  | "throat_health";

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
}