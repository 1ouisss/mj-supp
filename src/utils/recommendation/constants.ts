export const WEIGHTS = {
  PRIMARY_GOAL: 4,
  PRIMARY_GOAL_BOOST: 1.5,
  HEALTH_CONCERN: 3,
  CATEGORY_MATCH: 2,
  THERAPEUTIC_CLAIM: 1.5,
  RELATED_CATEGORY: 1,
  MIN_CONFIDENCE: 80,
  MAX_CONFIDENCE: 95,
  MIN_RECOMMENDATIONS: 4,
  MAX_PRODUCTS_PER_CATEGORY: 2,
  MIN_CATEGORIES: 2,
  SYNERGY_BOOST: 1.2
};

export const PRODUCT_SYNERGIES = {
  BRAIN_HEALTH: ['focus', 'omega-3', 'complexe-b'],
  SLEEP_STRESS: ['melatonine', 'magnesium', 'poudre-dodo'],
  IMMUNITY: ['immunitaire', 'vitamine-d', 'vitamine-c'],
  DIGESTION: ['probiotiques', 'jus-aloes', 'fibres-ami'],
  ENERGY: ['energie-adaptogene', 'mineral-drop', 'la-totale']
};

export const CATEGORY_RELATIONSHIPS = {
  'sommeil': ['relaxation', 'stress'],
  'relaxation': ['sommeil', 'stress'],
  'stress': ['relaxation', 'sommeil'],
  'immunité': ['santé_générale', 'vitalité'],
  'digestif': ['santé_générale'],
  'cerveau': ['concentration', 'énergie'],
  'énergie': ['vitalité', 'concentration'],
  'vitalité': ['énergie', 'santé_générale']
};