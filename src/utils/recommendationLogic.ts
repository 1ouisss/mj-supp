import { Answer } from "@/components/quiz/types";
import { Product } from "@/components/results/ProductCard";
import { PRODUCTS } from "./products/productDatabase";
import { WEIGHTS } from "./recommendation/constants";
import { shouldExcludeProduct } from "./recommendation/productFiltering";
import { calculateProductScore } from "./recommendation/scoreCalculation";
import { toast } from "sonner";
import { ProductCategory } from "./products/productTypes";

const RECOMMENDATION_MAPPING: Record<string, string[]> = {
  "Améliorer le sommeil": [
    "Mélatonine",
    "Poudre Dodo",
    "Magnésium",
    "Respire Bien",
    "Complexe B",
    "Huile TCM",
    "Soutien Santé"
  ],
  "Renforcer l'immunité": [
    "Immunitaire",
    "Vitamine D & K",
    "Vitamine C",
    "Les Apothicaires",
    "Miel Protecteur",
    "Défense Super Poudre",
    "Soutien Santé",
    "D3",
    "Zinc",
    "Minéraux"
  ],
  "Améliorer la digestion": [
    "Probiotiques",
    "Jus d'Aloès",
    "Fibres & l'Ami",
    "Fontaine de Jouvence Complet",
    "Détox",
    "Soutien Santé",
    "Magnésium",
    "Minéraux"
  ],
  "Gérer le stress": [
    "Magnésium",
    "Énergie & Adaptogène",
    "Champignons & Adaptogènes",
    "Focus",
    "Force",
    "Complexe B",
    "Oméga-3",
    "Soutien Santé"
  ],
  "Soutenir la santé cérébrale": [
    "Focus",
    "Oméga-3",
    "Complexe B",
    "Champignons & Adaptogènes",
    "Énergie & Adaptogène",
    "Magnésium",
    "Minéraux",
    "La Totale"
  ],
  "Améliorer l'énergie": [
    "Énergie & Adaptogène",
    "Complexe B",
    "Huile TCM",
    "Champignons & Adaptogènes",
    "Focus",
    "Minéraux",
    "Créatine",
    "Mineral Drop",
    "La Totale",
    "Soutien Santé"
  ]
};

const MIN_RECOMMENDATIONS = 4;
const MIN_CONFIDENCE_THRESHOLD = 80;

export async function getRecommendations(answers: Answer[]): Promise<Product[]> {
  console.group("Generating Recommendations");
  console.log("Input answers:", answers);
  
  try {
    if (!Array.isArray(answers) || answers.length === 0) {
      console.warn("No answers provided");
      toast.error("Veuillez compléter le questionnaire");
      return [];
    }

    const primaryGoalAnswer = answers.find(a => a.questionId === 3)?.answers[0] as string;
    console.log("Primary goal:", primaryGoalAnswer);

    if (!primaryGoalAnswer) {
      console.warn("Missing primary goal answer");
      toast.error("Veuillez indiquer votre objectif principal");
      return [];
    }

    // Get recommended product names for the primary goal
    const recommendedProductNames = RECOMMENDATION_MAPPING[primaryGoalAnswer] || [];
    console.log("Recommended product names:", recommendedProductNames);

    // Filter and sort products based on the recommendation order
    let recommendations = PRODUCTS
      .filter(product => recommendedProductNames.includes(product.name))
      .map(product => ({
        ...product,
        score: recommendedProductNames.indexOf(product.name),
        confidenceLevel: MIN_CONFIDENCE_THRESHOLD + 
          (recommendedProductNames.length - recommendedProductNames.indexOf(product.name)) * 2
      }))
      .sort((a, b) => (a.score || 0) - (b.score || 0));

    // Ensure minimum number of recommendations
    if (recommendations.length < MIN_RECOMMENDATIONS) {
      console.warn(`Not enough recommendations found (${recommendations.length}), adding fallback products`);
      
      // Add other products from the same category as fallbacks
      const additionalProducts = PRODUCTS
        .filter(product => 
          !recommendedProductNames.includes(product.name) &&
          !recommendations.some(r => r.name === product.name) &&
          product.categories.some(cat => 
            recommendations[0]?.categories.includes(cat)
          )
        )
        .map(product => ({
          ...product,
          score: 1000 + recommendations.length,
          confidenceLevel: MIN_CONFIDENCE_THRESHOLD
        }));

      recommendations = [...recommendations, ...additionalProducts]
        .slice(0, MIN_RECOMMENDATIONS);
    }

    console.log("Final recommendations:", recommendations);
    console.groupEnd();

    return recommendations;
  } catch (error) {
    console.error("Error generating recommendations:", error);
    console.groupEnd();
    toast.error("Une erreur est survenue lors de la génération des recommandations");
    throw error;
  }
}
