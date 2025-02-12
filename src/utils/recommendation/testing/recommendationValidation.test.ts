
import { getRecommendations } from "../../recommendationLogic";
import { Answer } from "@/components/quiz/types";
import { Product } from "@/components/results/ProductCard";
import { PRODUCTS } from "../../products/productDatabase";
import { ProductCategory } from "@/utils/products/productTypes";

describe('Système de Recommandations - Tests Complets', () => {
  describe('Test des Recommandations', () => {
    const testScenarios = [
      {
        name: 'Migraines',
        answers: [
          { questionId: 1, answers: ["Femme"] },
          { questionId: 2, answers: ["Soulager les migraines"] },
          { questionId: 3, answers: ["Migraines fréquentes"] }
        ],
        expectedProducts: ['Coenzyme Q10', 'Magnésium'],
        expectedCategories: ['migraine'] as ProductCategory[]
      },
      {
        name: 'Thyroïde',
        answers: [
          { questionId: 1, answers: ["Femme"] },
          { questionId: 2, answers: ["Soutenir la thyroïde"] },
          { questionId: 3, answers: ["Problèmes de thyroïde"] }
        ],
        expectedProducts: ['Sélénium'],
        expectedCategories: ['thyroïde'] as ProductCategory[]
      }
    ];

    testScenarios.forEach(scenario => {
      it(`devrait fournir des recommandations cohérentes pour ${scenario.name}`, async () => {
        const recommendations = await getRecommendations(scenario.answers);
        
        // Vérifier que nous avons des recommandations
        expect(recommendations.length).toBeGreaterThan(0);
        
        // Vérifier les produits attendus
        scenario.expectedProducts.forEach(productName => {
          const product = recommendations.find(p => p.name === productName);
          expect(product).toBeDefined();
          
          // Vérifier l'URL du produit
          expect(product?.productUrl).toMatch(/^https:\/\/maisonjacynthe\.ca\/fr\//);
          
          // Vérifier l'image du produit
          expect(product?.imageUrl).toBeTruthy();
        });
        
        // Vérifier les catégories
        scenario.expectedCategories.forEach(category => {
          expect(recommendations.some(p => p.categories.includes(category))).toBe(true);
        });
        
        // Vérifier les niveaux de confiance
        recommendations.forEach(product => {
          expect(product.confidenceLevel).toBeGreaterThanOrEqual(80);
        });
      });
    });
  });

  describe('Validation des Données des Produits', () => {
    it('devrait avoir des URLs valides pour tous les produits', () => {
      PRODUCTS.forEach(product => {
        expect(product.productUrl).toMatch(/^https:\/\/maisonjacynthe\.ca\/fr\//);
      });
    });

    it('devrait avoir des images valides pour tous les produits', () => {
      PRODUCTS.forEach(product => {
        expect(product.imageUrl).toBeTruthy();
        expect(product.imageUrl).toMatch(/^(\/lovable-uploads\/|\/placeholder\.svg)/);
      });
    });

    it('devrait avoir des catégories valides pour tous les produits', () => {
      PRODUCTS.forEach(product => {
        expect(product.categories.length).toBeGreaterThan(0);
        product.categories.forEach(category => {
          expect(typeof category).toBe('string');
          expect(category.length).toBeGreaterThan(0);
        });
      });
    });

    it('devrait avoir des scores cohérents pour tous les produits', () => {
      PRODUCTS.forEach(product => {
        expect(product.scores.length).toBeGreaterThan(0);
        product.scores.forEach(score => {
          expect(score.score).toBeGreaterThanOrEqual(0);
          expect(score.score).toBeLessThanOrEqual(10);
        });
      });
    });
  });

  describe('Test des Cas Spéciaux', () => {
    it('devrait gérer correctement les réponses multiples', async () => {
      const answers: Answer[] = [
        { questionId: 1, answers: ["Femme"] },
        { questionId: 2, answers: ["Soulager les migraines"] },
        { questionId: 3, answers: ["Migraines fréquentes", "Stress ou anxiété"] }
      ];
      
      const recommendations = await getRecommendations(answers);
      
      // Vérifier que les recommandations incluent des produits pour les deux conditions
      const categories: ProductCategory[] = ['migraine', 'stress'];
      categories.forEach(category => {
        expect(recommendations.some(p => p.categories.includes(category))).toBe(true);
      });
    });

    it('devrait maintenir la diversité des recommandations', async () => {
      const answers: Answer[] = [
        { questionId: 1, answers: ["Femme"] },
        { questionId: 2, answers: ["Soutenir la thyroïde"] },
        { questionId: 3, answers: ["Problèmes de thyroïde", "Fatigue chronique"] }
      ];
      
      const recommendations = await getRecommendations(answers);
      
      // Vérifier la diversité des catégories
      const allCategories = recommendations.flatMap(p => p.categories);
      const uniqueCategories = new Set(allCategories);
      expect(uniqueCategories.size).toBeGreaterThan(2);
    });
  });
});
