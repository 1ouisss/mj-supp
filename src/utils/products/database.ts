
import { SLEEP_RELAXATION_PRODUCTS } from './categories/sleepRelaxation';
import { DIGESTIVE_HEALTH_PRODUCTS } from './categories/digestiveHealth';
import { MENTAL_HEALTH_PRODUCTS } from './categories/mentalHealth';
import { SPECIALIZED_HEALTH_PRODUCTS } from './categories/specializedHealth';
import { GENERAL_HEALTH_PRODUCTS } from './categories/generalHealth';
import { IMMUNITY_HEALTH_PRODUCTS } from './categories/immunityHealth';
import { BRAIN_HEALTH_PRODUCTS } from './categories/brainHealth';
import { ENERGY_HEALTH_PRODUCTS } from './categories/energyHealth';
import { METABOLIC_HEALTH_PRODUCTS } from './categories/metabolicHealth';
import { HORMONE_HEALTH_PRODUCTS } from './categories/hormoneHealth';
import { ANTIOXIDANT_PRODUCTS } from './categories/antioxidantProducts';
import { JOINT_HEALTH_PRODUCTS } from './categories/jointHealth';
import { ANTISEPTIC_HEALTH_PRODUCTS } from './categories/antisepticHealth';
import { RESPIRATORY_HEALTH_PRODUCTS } from './categories/respiratoryHealth';
import { SKIN_HEALTH_PRODUCTS } from './categories/skinHealth';
import { ProductDefinition } from './productTypes';

// Local product database
const LOCAL_PRODUCT_IMAGES = {
  "Focus": "/lovable-uploads/08b3afe7-d173-4bc6-b68b-575f171df2ff.png",
  "La Totale": "/lovable-uploads/81fe24a0-70fe-4718-b8e3-db356eb4cd93.png",
  "Complexe B": "/lovable-uploads/9e2a27a2-80a8-45c6-a120-57d6f9250958.png",
  "Mineral Drop": "/lovable-uploads/32c160a9-abc3-47bd-b0ad-507c4dec3c50.png",
  "Vitamine D & K": "/lovable-uploads/0def73d4-861c-4e96-8a86-247966b03669.png"
};

// Mettre à jour les produits
export const PRODUCTS: ProductDefinition[] = [
  ...SLEEP_RELAXATION_PRODUCTS,
  ...DIGESTIVE_HEALTH_PRODUCTS,
  ...MENTAL_HEALTH_PRODUCTS,
  ...SPECIALIZED_HEALTH_PRODUCTS,
  ...GENERAL_HEALTH_PRODUCTS,
  ...IMMUNITY_HEALTH_PRODUCTS,
  ...BRAIN_HEALTH_PRODUCTS,
  ...ENERGY_HEALTH_PRODUCTS,
  ...METABOLIC_HEALTH_PRODUCTS,
  ...HORMONE_HEALTH_PRODUCTS,
  ...ANTIOXIDANT_PRODUCTS,
  ...JOINT_HEALTH_PRODUCTS,
  ...ANTISEPTIC_HEALTH_PRODUCTS,
  ...RESPIRATORY_HEALTH_PRODUCTS,
  ...SKIN_HEALTH_PRODUCTS
].map(product => ({
  ...product,
  imageUrl: LOCAL_PRODUCT_IMAGES[product.name] || product.imageUrl
}));
