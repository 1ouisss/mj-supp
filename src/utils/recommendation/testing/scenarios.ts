import { Answer } from "@/components/quiz/types";

export const CORE_TEST_SCENARIOS = [
  {
    name: "Cognitive Health Focus",
    answers: [
      { questionId: 1, answers: ["Homme"] },
      { questionId: 2, answers: ["30-40"] },
      { questionId: 3, answers: ["Soutenir la santé cérébrale"] },
      { questionId: 4, answers: ["Concentration"] }
    ],
    minimumProducts: 3,
    expectedProducts: ["focus", "omega-3"],
    expectedCategories: ["brain", "focus", "energy"]
  },
  {
    name: "Sleep & Stress Management",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["18-35"] },
      { questionId: 3, answers: ["Améliorer le sommeil"] },
      { questionId: 4, answers: ["Stress ou anxiété", "Troubles du sommeil"] }
    ],
    minimumProducts: 4,
    expectedProducts: ["melatonine", "magnesium"],
    expectedCategories: ["sleep", "relaxation", "stress"]
  },
  {
    name: "General Wellness",
    answers: [
      { questionId: 1, answers: ["Autre"] },
      { questionId: 2, answers: ["51+"] },
      { questionId: 3, answers: ["Renforcer l'immunité"] },
      { questionId: 4, answers: ["Aucune"] }
    ],
    minimumProducts: 3,
    expectedProducts: [],
    expectedCategories: ["general_health", "immune", "essential"]
  }
];

export const GENDER_TEST_SCENARIOS = [
  {
    name: "Women-Specific Products",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["36-50"] }
    ],
    validateFn: (recommendations) => {
      const hasWomenProducts = recommendations.some(r => 
        r.categories.includes("women_specific")
      );
      const hasMenProducts = recommendations.some(r => 
        r.categories.includes("men_specific")
      );
      
      if (hasMenProducts) {
        console.error("❌ Men-specific products recommended for women");
        return false;
      }
      console.log("✅ Gender-appropriate products recommended");
      return true;
    }
  }
];