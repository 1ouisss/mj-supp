import { SLEEP_RELAXATION_PRODUCTS } from './categories/sleepRelaxation';
import { DIGESTIVE_HEALTH_PRODUCTS } from './categories/digestiveHealth';
import { MENTAL_HEALTH_PRODUCTS } from './categories/mentalHealth';
import { SPECIALIZED_HEALTH_PRODUCTS } from './categories/specializedHealth';
import { GENERAL_HEALTH_PRODUCTS } from './categories/generalHealth';
import { IMMUNITY_HEALTH_PRODUCTS } from './categories/immunityHealth';
import { BRAIN_HEALTH_PRODUCTS } from './categories/brainHealth';
import { ENERGY_HEALTH_PRODUCTS } from './categories/energyHealth';
import { ProductDefinition } from './productTypes';

// Update product images in their respective category files
const LOCAL_PRODUCT_IMAGES = {
  "Focus": "/lovable-uploads/08b3afe7-d173-4bc6-b68b-575f171df2ff.png",
  "La Totale": "/lovable-uploads/81fe24a0-70fe-4718-b8e3-db356eb4cd93.png",
  "Complexe B": "/lovable-uploads/9e2a27a2-80a8-45c6-a120-57d6f9250958.png"
};

// Update the image URLs in the products array
export const PRODUCTS: ProductDefinition[] = [
  ...SLEEP_RELAXATION_PRODUCTS,
  ...DIGESTIVE_HEALTH_PRODUCTS,
  ...MENTAL_HEALTH_PRODUCTS,
  ...SPECIALIZED_HEALTH_PRODUCTS,
  ...GENERAL_HEALTH_PRODUCTS,
  ...IMMUNITY_HEALTH_PRODUCTS,
  ...BRAIN_HEALTH_PRODUCTS,
  ...ENERGY_HEALTH_PRODUCTS
].map(product => ({
  ...product,
  imageUrl: LOCAL_PRODUCT_IMAGES[product.name] || product.imageUrl
}));