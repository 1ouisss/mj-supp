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
    name: "Basic Health Profile",
    answers: [
      { questionId: 1, answers: ["female"] },
      { questionId: 2, answers: ["25-34"] },
      { questionId: 3, answers: ["general_health"] },
      { questionId: 4, answers: ["stress", "sleep"] }
    ],
    minimumProducts: 3,
    expectedProducts: ["product1", "product2"],
    expectedCategories: ["general_health", "stress", "sleep"] as ProductCategory[]
  },
  {
    name: "Stress Management Focus",
    answers: [
      { questionId: 1, answers: ["male"] },
      { questionId: 2, answers: ["35-44"] },
      { questionId: 3, answers: ["stress"] },
      { questionId: 4, answers: ["sleep", "concentration"] }
    ],
    minimumProducts: 2,
    expectedProducts: ["product3", "product4"],
    expectedCategories: ["stress", "sleep", "concentration"] as ProductCategory[]
  }
];

export const GENDER_TEST_SCENARIOS: GenderTestScenario[] = [
  {
    name: "Female-Specific Products",
    answers: [
      { questionId: 1, answers: ["female"] },
      { questionId: 2, answers: ["25-34"] },
      { questionId: 3, answers: ["women_specific"] }
    ],
    validateFn: (products) => products.some(p => p.categories.includes("women_specific"))
  },
  {
    name: "Male-Specific Products",
    answers: [
      { questionId: 1, answers: ["male"] },
      { questionId: 2, answers: ["25-34"] },
      { questionId: 3, answers: ["men_specific"] }
    ],
    validateFn: (products) => products.some(p => p.categories.includes("men_specific"))
  }
];