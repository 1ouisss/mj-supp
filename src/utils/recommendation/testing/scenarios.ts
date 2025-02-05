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
      { questionId: 4, answers: ["Troubles du sommeil", "Stress"] }
    ],
    minimumProducts: 3,
    expectedProducts: ["Mélatonine", "Magnésium", "Poudre Dodo", "Respire Bien"],
    expectedCategories: ["sommeil", "relaxation"]
  },
  {
    name: "Immunity Focus",
    answers: [
      { questionId: 1, answers: ["Homme"] },
      { questionId: 2, answers: ["35-44"] },
      { questionId: 3, answers: ["Renforcer l'immunité"] },
      { questionId: 4, answers: ["Système immunitaire affaibli"] }
    ],
    minimumProducts: 3,
    expectedProducts: ["Les Apothicaires", "Miel Protecteur", "Vitamine D & K", "Multivitamines La Totale"],
    expectedCategories: ["immunité", "santé_générale"]
  },
  {
    name: "Digestive Health Focus",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["45-54"] },
      { questionId: 3, answers: ["Améliorer la digestion"] },
      { questionId: 4, answers: ["Problèmes digestifs"] }
    ],
    minimumProducts: 3,
    expectedProducts: ["Jus d'Aloès", "Probiotiques", "Fibres & l'Ami", "Fontaine de Jouvence Complet"],
    expectedCategories: ["digestif"]
  },
  {
    name: "Stress Management",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["25-34"] },
      { questionId: 3, answers: ["Gérer le stress"] },
      { questionId: 4, answers: ["Stress ou anxiété"] }
    ],
    minimumProducts: 3,
    expectedProducts: ["Énergie & Adaptogènes", "Champignons & Adaptogènes", "Magnésium", "Force Botanique"],
    expectedCategories: ["stress", "relaxation"]
  },
  {
    name: "Brain Health Focus",
    answers: [
      { questionId: 1, answers: ["Homme"] },
      { questionId: 2, answers: ["25-34"] },
      { questionId: 3, answers: ["Soutenir la santé cérébrale"] },
      { questionId: 4, answers: ["Concentration"] }
    ],
    minimumProducts: 3,
    expectedProducts: ["Focus", "Oméga-3", "Énergie & Adaptogènes", "Champignons & Adaptogènes"],
    expectedCategories: ["cerveau", "concentration"]
  },
  {
    name: "Energy Boost",
    answers: [
      { questionId: 1, answers: ["Femme"] },
      { questionId: 2, answers: ["25-34"] },
      { questionId: 3, answers: ["Améliorer l'énergie"] },
      { questionId: 4, answers: ["Fatigue chronique"] }
    ],
    minimumProducts: 3,
    expectedProducts: ["Énergie & Adaptogènes", "Champignons & Adaptogènes", "Minéraux", "Multivitamines La Totale"],
    expectedCategories: ["énergie", "vitalité"]
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