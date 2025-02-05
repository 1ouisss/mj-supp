import { SLEEP_RELAXATION_PRODUCTS } from './categories/sleepRelaxation';
import { DIGESTIVE_HEALTH_PRODUCTS } from './categories/digestiveHealth';
import { MENTAL_HEALTH_PRODUCTS } from './categories/mentalHealth';
import { SPECIALIZED_HEALTH_PRODUCTS } from './categories/specializedHealth';
import { GENERAL_HEALTH_PRODUCTS } from './categories/generalHealth';
import { METABOLIC_HEALTH_PRODUCTS } from './categories/metabolicHealth';
import { MUSCLE_HEALTH_PRODUCTS } from './categories/muscleHealth';
import { ProductDefinition } from './productTypes';

export const PRODUCTS: ProductDefinition[] = [
  ...SLEEP_RELAXATION_PRODUCTS,
  ...DIGESTIVE_HEALTH_PRODUCTS,
  ...MENTAL_HEALTH_PRODUCTS,
  ...SPECIALIZED_HEALTH_PRODUCTS,
  ...GENERAL_HEALTH_PRODUCTS,
  ...METABOLIC_HEALTH_PRODUCTS,
  ...MUSCLE_HEALTH_PRODUCTS
];