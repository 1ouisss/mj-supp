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
  | "joints"
  | "nails"
  | "hormones"
  | "thyroid"
  | "women_specific"
  | "men_specific"
  | "migraine"
  | "pain"
  | "healing"
  | "topical"
  | "immunity"
  | "seasonal"
  | "throat"
  | "essential"
  | "bone_health"
  | "children"
  | "metabolism"
  | "heart_health"
  | "short_term"
  | "long_term";

export type TimeFrame = "short_term" | "long_term";
export type Season = "winter" | "spring" | "summer" | "fall" | "all_year";

export interface ProductScore {
  condition: string;
  score: number;
}

export interface ProductRelationship {
  complementaryProducts: string[];
  contraindications?: string[];
}

export interface UsageGuidelines {
  timing?: string;
  duration?: string;
  dosage?: string;
  seasonality?: Season[];
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
  therapeuticClaims: string[];
  relationships: ProductRelationship;
  usage: UsageGuidelines;
  timeFrame: TimeFrame;
}