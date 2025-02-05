import { Answer } from "@/components/quiz/types";
import { ProductCategory } from "../../products/productTypes";

export const CORE_TEST_SCENARIOS = [
  {
    name: "Scénario 1: Énergie & Adaptogène + Stress",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["25-34"] },
      { questionId: 3, answers: ["Renforcer l'énergie"] },
      { questionId: 4, answers: ["Gérer le stress"] },
      {
        questionId: 401,
        answers: ["Oui"],
        followUpAnswers: [
          { questionId: 402, answers: [3] }
        ]
      }
    ],
    expectedProducts: ["energie-adaptogene", "omega-3", "focus"],
    expectedCategories: ["energy" as ProductCategory, "brain" as ProductCategory],
    minimumProducts: 3
  },
  {
    name: "Scénario 2: Digestion et Santé hormonale",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["35-44"] },
      { questionId: 3, answers: ["Améliorer la digestion"] },
      { questionId: 4, answers: ["Équilibre hormonal"] }
    ],
    expectedProducts: ["jus-aloes", "fibres-ami", "formule-menopause"],
    expectedCategories: ["digestive" as ProductCategory, "hormones" as ProductCategory],
    minimumProducts: 3
  },
  {
    name: "Scénario 3: Immunité et Fatigue",
    answers: [
      { questionId: 1, answers: ["Homme"] },
      { questionId: 2, answers: ["45-54"] },
      { questionId: 3, answers: ["Renforcer l'immunité"] },
      { questionId: 4, answers: ["Fatigue générale"] }
    ],
    expectedProducts: ["les-apothicaires", "vitamine-c", "metabzen"],
    expectedCategories: ["immune" as ProductCategory, "energy" as ProductCategory],
    minimumProducts: 3
  }
];

export const GENDER_TEST_SCENARIOS = [
  {
    name: "Test Homme - Exclusion produits féminins",
    answers: [
      { questionId: 1, answers: ["Homme"] },
      { questionId: 2, answers: ["35-44"] },
      { questionId: 3, answers: ["Renforcer l'immunité"] }
    ],
    validateFn: (recommendations: any[]) => {
      const hasWomenSpecific = recommendations.some(r => 
        r.categories.includes("women_specific")
      );
      if (hasWomenSpecific) {
        console.error("❌ Found women-specific products in recommendations for male user");
        return false;
      }
      return true;
    }
  },
  {
    name: "Test Neutre - Produits neutres uniquement",
    answers: [
      { questionId: 1, answers: ["Je préfère ne pas répondre"] },
      { questionId: 2, answers: ["25-34"] },
      { questionId: 3, answers: ["Renforcer l'immunité"] }
    ],
    validateFn: (recommendations: any[]) => {
      const hasGenderSpecific = recommendations.some(r => 
        r.categories.includes("women_specific") || r.categories.includes("men_specific")
      );
      if (hasGenderSpecific) {
        console.error("❌ Found gender-specific products in recommendations for neutral user");
        return false;
      }
      return true;
    }
  }
];