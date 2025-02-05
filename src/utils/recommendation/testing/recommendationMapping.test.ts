import { getRecommendations } from "../../recommendationLogic";
import { Product } from "@/components/results/ProductCard";
import { Answer } from "@/components/quiz/types";

describe('Recommendation Mapping', () => {
  const createTestAnswer = (primaryGoal: string): Answer[] => {
    return [
      { questionId: 1, answers: ["30"] }, // Age
      { questionId: 2, answers: ["Femme"] }, // Gender
      { questionId: 3, answers: [primaryGoal] } // Primary goal
    ];
  };

  const testCases = [
    {
      primaryGoal: 'Améliorer le sommeil',
      expected: ['Mélatonine', 'Magnésium', 'Poudre Dodo', 'Respire Bien']
    },
    {
      primaryGoal: 'Renforcer l\'immunité',
      expected: ['Les Apothicaires', 'Miel Protecteur', 'Vitamine C', 'Vitamine D & K', 'Défense Super Poudre']
    },
    {
      primaryGoal: 'Améliorer la digestion',
      expected: ['Jus d\'Aloès', 'Probiotiques', 'Fibres & l\'Ami', 'Fontaine de Jouvence Complet', 'Détox Foie']
    },
    {
      primaryGoal: 'Gérer le stress',
      expected: ['Magnésium', 'Énergie & Adaptogènes', 'Champignons & Adaptogènes', 'Force Botanique']
    },
    {
      primaryGoal: 'Soutenir la santé cérébrale',
      expected: ['Focus', 'Oméga-3', 'Énergie & Adaptogènes', 'Extrait de Thé Vert']
    },
    {
      primaryGoal: 'Améliorer l\'énergie',
      expected: ['Énergie & Adaptogènes', 'Force Botanique', 'Champignons & Adaptogènes', 'Extrait de Thé Vert']
    }
  ];

  testCases.forEach(({ primaryGoal, expected }) => {
    it(`should recommend correct products for ${primaryGoal}`, async () => {
      const answers = createTestAnswer(primaryGoal);
      const recommendations = await getRecommendations(answers);
      
      const recommendedNames = recommendations.map(p => p.name);
      console.log(`Testing ${primaryGoal}:`);
      console.log('Expected:', expected);
      console.log('Received:', recommendedNames);
      
      expected.forEach(productName => {
        expect(recommendedNames).toContain(productName);
      });
      
      recommendations.forEach(product => {
        expect(product.confidenceLevel).toBeGreaterThanOrEqual(80);
      });
    });
  });

  it('should handle invalid primary goals gracefully', async () => {
    const answers = createTestAnswer('Invalid Goal');
    const recommendations = await getRecommendations(answers);
    expect(recommendations).toHaveLength(0);
  });

  it('should ensure all recommended products have valid URLs', async () => {
    const answers = createTestAnswer('Améliorer le sommeil');
    const recommendations = await getRecommendations(answers);
    
    recommendations.forEach(product => {
      expect(product.productUrl).toMatch(/^https?:\/\//);
    });
  });

  it('should ensure category diversity in recommendations', async () => {
    for (const { primaryGoal } of testCases) {
      const answers = createTestAnswer(primaryGoal);
      const recommendations = await getRecommendations(answers);
      
      const categories = new Set(
        recommendations.flatMap(product => product.categories)
      );
      
      expect(categories.size).toBeGreaterThanOrEqual(2);
    }
  });
});