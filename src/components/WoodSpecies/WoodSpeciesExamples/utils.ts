export type ItemKeys = 'wood_species_alder' | 'wood_species_cherry' | 'wood_species_hickory' | 'wood_species_knotty_alder' | 'wood_species_maple' | 'wood_species_poplar' | 'wood_species_red_oak' | 'wood_species_rustic_hickory' | 'wood_species_walnut' | 'wood_species_white_oak' | 'wood_species_wormy_maple' | 'wood_species_quarter_sawn';

export interface Props {
  itemKey: ItemKeys;
  clearCoat: boolean;
  stainAndClearCoat: boolean;
  painted: boolean;
}

export const woodSpeciesExamples: Props[] = [
  {
    itemKey: 'wood_species_alder', clearCoat: true, stainAndClearCoat: true, painted: true,
  },
  {
    itemKey: 'wood_species_cherry', clearCoat: true, stainAndClearCoat: true, painted: false,
  },
  {
    itemKey: 'wood_species_hickory', clearCoat: true, stainAndClearCoat: true, painted: false,
  },
  {
    itemKey: 'wood_species_knotty_alder', clearCoat: true, stainAndClearCoat: true, painted: false,
  },
  {
    itemKey: 'wood_species_maple', clearCoat: true, stainAndClearCoat: true, painted: true,
  },
  {
    itemKey: 'wood_species_poplar', clearCoat: true, stainAndClearCoat: false, painted: true,
  },
  {
    itemKey: 'wood_species_red_oak', clearCoat: true, stainAndClearCoat: true, painted: false,
  },
  {
    itemKey: 'wood_species_rustic_hickory', clearCoat: true, stainAndClearCoat: true, painted: false,
  },
  {
    itemKey: 'wood_species_walnut', clearCoat: true, stainAndClearCoat: true, painted: false,
  },
  {
    itemKey: 'wood_species_white_oak', clearCoat: true, stainAndClearCoat: true, painted: false,
  },
  {
    itemKey: 'wood_species_wormy_maple', clearCoat: true, stainAndClearCoat: true, painted: false,
  },
  {
    itemKey: 'wood_species_quarter_sawn', clearCoat: true, stainAndClearCoat: true, painted: false,
  },
];
