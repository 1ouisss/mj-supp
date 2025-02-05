import { getRecommendations } from "../../recommendationLogic";
import { Answer } from "@/components/quiz/types";
import { Product } from "@/components/results/ProductCard";
import { ProductCategory } from "../../products/productTypes";

const createTestAnswer = (primaryGoal: string, additionalAnswers: Answer[] = []): Answer[] => {
  return [
    { questionId: 1, answers: ["Femme"] },
    { questionId: 2, answers: ["30-45"] },
    { questionId: 3, answers: [primaryGoal] },
    ...additionalAnswers
  ];
};

describe('Recommendation Validation Tests', () => {
  describe('Primary Goal Recommendations', () => {
    const testCases = [
      {
        goal: 'Améliorer le sommeil',
        expectedProducts: ['Mélatonine', 'Magnésium', 'Poudre Dodo', 'Respire Bien'],
        expectedCategories: ['sommeil', 'relaxation']
      },
      {
        goal: 'Renforcer l\'immunité',
        expectedProducts: ['Les Apothicaires', 'Miel Protecteur', 'Vitamine C', 'Vitamine D & K', 'Défense Super Poudre'],
        expectedCategories: ['immunité', 'santé_générale']
      },
      {
        goal: 'Améliorer la digestion',
        expectedProducts: ['Jus d\'Aloès', 'Probiotiques', 'Fibres & l\'Ami', 'Fontaine de Jouvence Complet', 'Détox Foie'],
        expectedCategories: ['digestif']
      }
    ];

    testCases.forEach(({ goal, expectedProducts, expectedCategories }) => {
      it(`should provide accurate recommendations for ${goal}`, async () => {
        const answers = createTestAnswer(goal);
        const recommendations = await getRecommendations(answers);

        // Verify product names
        const recommendedNames = recommendations.map(p => p.name);
        expectedProducts.forEach(product => {
          expect(recommendedNames).toContain(product);
        });

        // Verify categories
        const allCategories = recommendations.flatMap(p => p.categories);
        expectedCategories.forEach(category => {
          expect(allCategories).toContain(category);
        });

        // Verify confidence scores
        recommendations.forEach(product => {
          expect(product.confidenceLevel).toBeGreaterThanOrEqual(80);
        });

        // Verify category diversity
        const uniqueCategories = new Set(allCategories);
        expect(uniqueCategories.size).toBeGreaterThanOrEqual(2);
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle multiple health concerns appropriately', async () => {
      const answers: Answer[] = [
        ...createTestAnswer('Améliorer le sommeil'),
        { questionId: 4, answers: ['Stress ou anxiété', 'Troubles du sommeil'] }
      ];

      const recommendations = await getRecommendations(answers);
      
      // Verify we get products addressing both concerns
      const categories = recommendations.flatMap(p => p.categories);
      expect(categories).toContain('sommeil');
      expect(categories).toContain('stress');
      
      // Verify confidence levels
      recommendations.forEach(product => {
        expect(product.confidenceLevel).toBeGreaterThanOrEqual(80);
      });
    });

    it('should handle contradictory goals appropriately', async () => {
      const answers: Answer[] = [
        ...createTestAnswer('Améliorer le sommeil'),
        { questionId: 4, answers: ['Fatigue chronique'] }
      ];

      const recommendations = await getRecommendations(answers);
      
      // Verify balanced recommendations
      const categories = recommendations.flatMap(p => p.categories);
      const sleepProducts = recommendations.filter(p => 
        p.categories.includes('sommeil')
      ).length;
      const energyProducts = recommendations.filter(p => 
        p.categories.includes('énergie')
      ).length;

      // Ensure we don't have too many conflicting products
      expect(Math.abs(sleepProducts - energyProducts)).toBeLessThanOrEqual(1);
    });
  });

  describe('Data Validation', () => {
    it('should verify all products have required fields', async () => {
      const answers = createTestAnswer('Améliorer le sommeil');
      const recommendations = await getRecommendations(answers);

      recommendations.forEach(product => {
        // Required fields validation
        expect(product.name).toBeDefined();
        expect(product.categories).toBeDefined();
        expect(product.categories.length).toBeGreaterThan(0);
        expect(product.description).toBeDefined();
        expect(product.confidenceLevel).toBeDefined();
        expect(product.imageUrl).toBeDefined();
        expect(product.productUrl).toBeDefined();
        
        // URL validation
        expect(product.productUrl).toMatch(/^https?:\/\//);
        expect(product.productUrl).toContain('maisonjacynthe.ca');
      });
    });
  });

  describe('Recommendation Diversity', () => {
    it('should ensure category diversity across recommendations', async () => {
      const testGoals = [
        'Améliorer le sommeil',
        'Renforcer l\'immunité',
        'Améliorer la digestion'
      ];

      for (const goal of testGoals) {
        const answers = createTestAnswer(goal);
        const recommendations = await getRecommendations(answers);
        
        const categories = recommendations.flatMap(p => p.categories);
        const uniqueCategories = new Set(categories);
        
        expect(uniqueCategories.size).toBeGreaterThanOrEqual(2);
        expect(recommendations.length).toBeGreaterThanOrEqual(3);
      }
    });

    it('should not over-represent any single category', async () => {
      const answers = createTestAnswer('Améliorer le sommeil');
      const recommendations = await getRecommendations(answers);
      
      const categoryCount: Record<string, number> = {};
      recommendations.flatMap(p => p.categories).forEach(category => {
        categoryCount[category] = (categoryCount[category] || 0) + 1;
      });

      // No category should represent more than 50% of recommendations
      Object.values(categoryCount).forEach(count => {
        expect(count / recommendations.length).toBeLessThanOrEqual(0.5);
      });
    });
  });
});