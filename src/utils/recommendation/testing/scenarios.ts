import { Answer } from "@/components/quiz/types";
import { ProductCategory } from "../../products/productTypes";

export const CORE_TEST_SCENARIOS = [
  {
    name: "Scénario 1: Santé cérébrale et problèmes digestifs",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["25-34"] },
      { questionId: 3, answers: ["Soutenir la santé cérébrale"] },
      { questionId: 4, answers: ["Problèmes digestifs"] }
    ],
    expectedProducts: ["focus", "omega-3", "jus-aloes"],
    expectedCategories: ["brain" as ProductCategory, "digestive" as ProductCategory],
    minimumProducts: 3
  },
  {
    name: "Scénario 2: Sommeil et stress",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["35-44"] },
      { questionId: 3, answers: ["Améliorer le sommeil"] },
      { questionId: 4, answers: ["Gérer le stress"] },
      {
        questionId: 401,
        answers: ["Oui"],
        followUpAnswers: [
          { questionId: 402, answers: [4] }
        ]
      }
    ],
    expectedProducts: ["melatonine", "magnesium", "poudre-dodo"],
    expectedCategories: ["sleep" as ProductCategory, "relaxation" as ProductCategory],
    minimumProducts: 3
  },
  {
    name: "Scénario 3: Équilibre hormonal féminin",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["45-54"] },
      { questionId: 3, answers: ["Équilibre hormonal"] },
      { questionId: 4, answers: ["Symptômes de la ménopause"] }
    ],
    expectedProducts: ["formule-menopause", "selenium"],
    expectedCategories: ["hormones" as ProductCategory, "women_specific" as ProductCategory],
    minimumProducts: 2
  }
];

export const GENDER_TEST_SCENARIOS = [
  {
    name: "Test Homme - Exclusion produits féminins",
    answers: [
      { questionId: 1, answers: ["Homme"] },
      { questionId: 2, answers: ["Renforcer l'immunité"] }
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
      { questionId: 2, answers: ["Renforcer l'immunité"] }
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