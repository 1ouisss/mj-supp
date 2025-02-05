export const WEIGHTS = {
  PRIMARY_GOAL: 4,
  PRIMARY_GOAL_BOOST: 1.5,
  HEALTH_CONCERN: 3,
  CATEGORY_MATCH: 2,
  THERAPEUTIC_CLAIM: 1.5,
  RELATED_CATEGORY: 1,
  MIN_CONFIDENCE: 80,
  MAX_CONFIDENCE: 95,
  MIN_RECOMMENDATIONS: 3,
  MAX_PRODUCTS_PER_CATEGORY: 2,
  MIN_CATEGORIES: 2,
  SYNERGY_BOOST: 1.2
};

export const PRODUCT_SYNERGIES = {
  BRAIN_HEALTH: ['focus-plus', 'omega-3', 'b-complex'],
  SLEEP_STRESS: ['melatonin', 'magnesium', 'relaxation-blend']
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