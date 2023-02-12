enum PRODUCTS_KEYS {
  bathroom_vanities = 'bathroom_vanities',
  cabinet_doors = 'cabinet_doors',
  cabinet_finishing = 'cabinet_finishing',
  kitchen_cabinets = 'kitchen_cabinets',
  polities_and_terms = 'polities_and_terms',
  specialty_islands = 'specialty_islands',
  wood_species = 'wood_species',
}

export type ProductKeys = keyof typeof PRODUCTS_KEYS
export const products: Array<ProductKeys> = ['kitchen_cabinets', 'specialty_islands', 'bathroom_vanities', 'cabinet_doors', 'cabinet_finishing', 'wood_species', 'polities_and_terms'];
