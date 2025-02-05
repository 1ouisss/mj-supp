import { Answer } from "@/components/quiz/types";
import { ProductCategory } from "@/utils/products/productTypes";

interface TestScenario {
  name: string;
  answers: Answer[];
  minimumProducts: number;
  expectedProducts: string[];
  expectedCategories: ProductCategory[];
}

interface GenderTestScenario {
  name: string;
  answers: Answer[];
  validateFn?: (products: any[]) => boolean;
}

export const CORE_TEST_SCENARIOS: TestScenario[] = [
  {
    name: "Sleep Improvement Focus",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["25-34"] },
      { questionId: 3, answers: ["Améliorer le sommeil"] },
      { questionId: 4, answers: ["Difficulté à dormir", "Stress"] }
    ],
    minimumProducts: 3,
    expectedProducts: ["melatonine", "magnesium", "poudre-dodo"],
    expectedCategories: ["sommeil", "relaxation", "stress"]
  },
  {
    name: "Brain Health Focus",
    answers: [
      { questionId: 1, answers: ["Homme"] },
      { questionId: 2, answers: ["35-44"] },
      { questionId: 3, answers: ["Soutenir la santé cérébrale"] },
      { questionId: 4, answers: ["Concentration", "Mémoire"] }
    ],
    minimumProducts: 2,
    expectedProducts: ["focus", "omega-3"],
    expectedCategories: ["cerveau", "concentration"]
  },
  {
    name: "Stress Management",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["45-54"] },
      { questionId: 3, answers: ["Gérer le stress"] },
      { questionId: 4, answers: ["Stress", "Anxiété"] }
    ],
    minimumProducts: 3,
    expectedProducts: ["magnesium", "energie-adaptogene"],
    expectedCategories: ["stress", "relaxation"]
  },
  {
    name: "General Health Maintenance",
    answers: [
      { questionId: 1, answers: ["Homme"] },
      { questionId: 2, answers: ["25-34"] },
      { questionId: 3, answers: ["Améliorer la santé générale"] },
      { questionId: 4, answers: ["Aucune"] }
    ],
    minimumProducts: 2,
    expectedProducts: ["multivitamines-la-totale", "soutien-sante"],
    expectedCategories: ["santé_générale", "essentiel"]
  },
  {
    name: "Energy Boost",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["25-34"] },
      { questionId: 3, answers: ["Améliorer l'énergie"] },
      { questionId: 4, answers: ["Fatigue", "Concentration"] }
    ],
    minimumProducts: 3,
    expectedProducts: ["energie-adaptogene", "force-botanique"],
    expectedCategories: ["énergie", "cerveau", "concentration"]
  }
];

export const GENDER_TEST_SCENARIOS: GenderTestScenario[] = [
  {
    name: "Female-Specific Products",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["25-34"] },
      { questionId: 3, answers: ["Améliorer la santé hormonale"] }
    ],
    validateFn: (products) => products.some(p => p.categories.includes("santé_femme"))
  },
  {
    name: "Male-Specific Products",
    answers: [
      { questionId: 1, answers: ["Homme"] },
      { questionId: 2, answers: ["25-34"] },
      { questionId: 3, answers: ["Améliorer la santé hormonale"] }
    ],
    validateFn: (products) => products.some(p => p.categories.includes("santé_homme"))
  }
];