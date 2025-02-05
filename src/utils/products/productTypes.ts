export type ProductCategory = 
  | "relaxation" 
  | "sommeil" 
  | "stress" 
  | "digestif" 
  | "santé_générale" 
  | "cerveau" 
  | "concentration" 
  | "énergie" 
  | "santé_cheveux" 
  | "peau" 
  | "immunité" 
  | "muscles" 
  | "articulations" 
  | "ongles" 
  | "hormones"
  | "thyroïde" 
  | "santé_femme" 
  | "santé_homme" 
  | "migraine"
  | "douleur" 
  | "guérison" 
  | "topique" 
  | "saisonnier" 
  | "gorge" 
  | "essentiel" 
  | "santé_osseuse" 
  | "enfants" 
  | "métabolisme" 
  | "santé_cardiaque" 
  | "court_terme" 
  | "long_terme"
  | "vitalité";

export type TimeFrame = "court_terme" | "long_terme";
export type Season = "hiver" | "printemps" | "été" | "automne" | "toute_année";

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