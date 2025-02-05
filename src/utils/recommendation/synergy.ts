import { PRODUCT_SYNERGIES, WEIGHTS } from "./constants";

export function applySynergyBoosts(productId: string, concerns: string[], baseScore: number): number {
  let synergyScore = baseScore;

  if (concerns.includes("Soutenir la santé cérébrale") && 
      PRODUCT_SYNERGIES.BRAIN_HEALTH.includes(productId)) {
    synergyScore *= WEIGHTS.SYNERGY_BOOST;
  }

  if (concerns.includes("Améliorer le sommeil") && 
      concerns.includes("Gérer le stress") && 
      PRODUCT_SYNERGIES.SLEEP_STRESS.includes(productId)) {
    synergyScore *= WEIGHTS.SYNERGY_BOOST;
  }

  return synergyScore;
}