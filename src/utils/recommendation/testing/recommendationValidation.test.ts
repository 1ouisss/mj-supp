
import { getRecommendations } from "../../recommendationLogic";
import { Answer } from "@/components/quiz/types";
import { Product } from "@/components/results/ProductCard";
import { ProductCategory } from "../../products/productTypes";

describe('Recommendation Validation Tests', () => {
  describe('New Categories Tests', () => {
    it('should provide recommendations for migraine concerns', async () => {
      const answers: Answer[] = [
        { questionId: 1, answers: ["Femme"] },
        { questionId: 2, answers: ["Soulager les migraines"] },
        { questionId: 3, answers: ["Migraines fréquentes"] }
      ];
      
      const recommendations = await getRecommendations(answers);
      
      // Verify we get migraine-related products
      expect(recommendations.length).toBeGreaterThan(0);
      expect(recommendations.some(p => 
        p.categories.includes('migraine')
      )).toBe(true);
      
      // Check specific products
      const productNames = recommendations.map(p => p.name);
      expect(productNames).toContain('Coenzyme Q10');
      expect(productNames).toContain('Magnésium');
    });

    it('should provide recommendations for thyroid concerns', async () => {
      const answers: Answer[] = [
        { questionId: 1, answers: ["Femme"] },
        { questionId: 2, answers: ["Soutenir la thyroïde"] },
        { questionId: 3, answers: ["Problèmes de thyroïde"] }
      ];
      
      const recommendations = await getRecommendations(answers);
      
      // Verify we get thyroid-related products
      expect(recommendations.length).toBeGreaterThan(0);
      expect(recommendations.some(p => 
        p.categories.includes('thyroïde')
      )).toBe(true);
      
      // Check specific products
      const productNames = recommendations.map(p => p.name);
      expect(productNames).toContain('Sélénium');
    });

    // Test confidence levels
    it('should maintain high confidence for primary goal matches', async () => {
      const answers: Answer[] = [
        { questionId: 1, answers: ["Femme"] },
        { questionId: 2, answers: ["Soulager les migraines"] }
      ];
      
      const recommendations = await getRecommendations(answers);
      
      recommendations.forEach(product => {
        expect(product.confidenceLevel).toBeGreaterThanOrEqual(80);
      });
    });
  });
});
