import { SLEEP_RELAXATION_PRODUCTS } from './categories/sleepRelaxation';
import { DIGESTIVE_HEALTH_PRODUCTS } from './categories/digestiveHealth';
import { MENTAL_HEALTH_PRODUCTS } from './categories/mentalHealth';
import { SPECIALIZED_HEALTH_PRODUCTS } from './categories/specializedHealth';
import { GENERAL_HEALTH_PRODUCTS } from './categories/generalHealth';
import { IMMUNITY_HEALTH_PRODUCTS } from './categories/immunityHealth';
import { BRAIN_HEALTH_PRODUCTS } from './categories/brainHealth';
import { ENERGY_HEALTH_PRODUCTS } from './categories/energyHealth';
import { ProductDefinition } from './productTypes';

export const PRODUCTS: ProductDefinition[] = [
  ...SLEEP_RELAXATION_PRODUCTS,
  ...DIGESTIVE_HEALTH_PRODUCTS,
  ...MENTAL_HEALTH_PRODUCTS,
  ...SPECIALIZED_HEALTH_PRODUCTS,
  ...GENERAL_HEALTH_PRODUCTS,
  ...IMMUNITY_HEALTH_PRODUCTS,
  ...BRAIN_HEALTH_PRODUCTS,
  ...ENERGY_HEALTH_PRODUCTS
];