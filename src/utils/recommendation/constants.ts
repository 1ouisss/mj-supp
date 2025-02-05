export const WEIGHTS = {
  BASE_SCORE: 1,
  PRIMARY_GOAL: 3,
  HEALTH_CONCERN: 2.5,
  CATEGORY_MATCH: 2,
  RELATED_CATEGORY: 0.5,
  THERAPEUTIC_CLAIM: 1.5,
  SYNERGY_BOOST: 1.5,
  MISMATCH_PENALTY: 0.3,
  MIN_CONFIDENCE: 80,
  MAX_CONFIDENCE: 100,
  MIN_CATEGORIES: 3,
  MAX_PRODUCTS_PER_CATEGORY: 2,
  MIN_RECOMMENDATIONS: 6
};

export const PRODUCT_SYNERGIES = {
  BRAIN_HEALTH: ['focus', 'omega-3'],
  SLEEP_STRESS: ['magnesium', 'melatonine'],
  IMMUNITY_HEALTH: ['vitamin_c', 'immunity_blend'],
  DIGESTIVE_HEALTH: ['probiotics', 'fiber'],
  HORMONAL_HEALTH: ['menopause', 'thyroid']
};

export const CATEGORY_RELATIONSHIPS = {
  sleep: ['stress', 'relaxation'],
  stress: ['sleep', 'relaxation', 'brain'],
  digestive: ['immune', 'general_health'],
  immune: ['digestive', 'general_health', 'skin'],
  relaxation: ['sleep', 'stress'],
  energy: ['immune', 'general_health', 'brain'],
  brain: ['stress', 'energy', 'focus'],
  general_health: ['immune', 'digestive', 'energy'],
  skin: ['immune', 'essential'],
  essential: ['skin', 'immune']
};