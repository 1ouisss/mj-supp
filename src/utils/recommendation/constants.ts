export const WEIGHTS = {
  PRIMARY_GOAL: 4,
  PRIMARY_GOAL_BOOST: 1.5,
  HEALTH_CONCERN: 3,
  CATEGORY_MATCH: 2,
  THERAPEUTIC_CLAIM: 1.5,
  RELATED_CATEGORY: 1,
  MIN_CONFIDENCE: 80,
  MAX_CONFIDENCE: 95,
  MIN_RECOMMENDATIONS: 3
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