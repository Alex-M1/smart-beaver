export type InputTypes = 'baseCabinetsInput' | 'wallCabinetsInput' | 'pantryCabinetsInput';
export type CheckBoxesTypes = 'doorsStyle' | 'woodSpecies' | 'finished';
export type CheckBoxesName = 'fpa_square' | 'fpa_arch_top' | 'fpad_double_arch' | 'fpc_cathedral_arch' | 'fpcd_double_cathedral_arch' | 'fpb_beaded_panel' | 'rps_raised_square' | 'rpa_raised_arch_top' | 'rpad_raised_double_arch' | 'rpc_raised_cathedral_arch' | 'rpcd_raised_double_cathedral_arch' | 'rpb_raised_beaded_panel' | 'sst_shaker' | 'sss_split_shaker' | 'sbp_shaker_beaded_panel';
export type WoodSpecies = 'wood_species_cherry' | 'wood_species_hickory' | 'wood_species_knotty_alder' | 'wood_species_red_oak' | 'wood_species_rustic_hickory' | 'wood_species_walnut' | 'wood_species_white_oak' | 'wood_species_wormy_maple' | 'wood_species_quarter_sawn' | 'wood_species_alder' | 'wood_species_maple' | 'wood_species_poplar' | 'wood_species_poplar2' | 'wood_species_mdf';
export type Finished = 'quote_unfinished' | 'quote_natural' | 'quote_stain' | 'quote_painted' | 'quote_glaze';
// actions
export interface ChangeInputPld {
  inputType: InputTypes;
  value: string;
}

export interface ChangeCheckBoxesPld {
  field: CheckBoxesTypes;
  name: CheckBoxesName | WoodSpecies | Finished;
}

// state
export interface Inputs {
  baseCabinetsInput: string;
  wallCabinetsInput: string;
  pantryCabinetsInput: string;
}

export interface DoorStyleCheckBoxes {
  fpa_square: boolean;
  fpa_arch_top: boolean;
  fpad_double_arch: boolean;
  fpc_cathedral_arch: boolean;
  fpcd_double_cathedral_arch: boolean;
  fpb_beaded_panel: boolean;
  rps_raised_square: boolean;
  rpa_raised_arch_top: boolean;
  rpad_raised_double_arch: boolean;
  rpc_raised_cathedral_arch: boolean;
  rpcd_raised_double_cathedral_arch: boolean;
  rpb_raised_beaded_panel: boolean;
  sst_shaker: boolean;
  sss_split_shaker: boolean;
  sbp_shaker_beaded_panel: boolean;
}

export interface WoodSpeciesCheckBoxes {
  wood_species_cherry: boolean;
  wood_species_hickory: boolean;
  wood_species_knotty_alder: boolean;
  wood_species_red_oak: boolean;
  wood_species_rustic_hickory: boolean;
  wood_species_walnut: boolean;
  wood_species_white_oak: boolean;
  wood_species_wormy_maple: boolean;
  wood_species_quarter_sawn: boolean;
  wood_species_alder: boolean;
  wood_species_maple: boolean;
  wood_species_poplar: boolean;
  wood_species_poplar2: boolean;
  wood_species_mdf: boolean;
}

export interface FinishedCheckboxes {
  quote_unfinished: boolean;
  quote_natural: boolean;
  quote_stain: boolean;
  quote_painted: boolean;
  quote_glaze: boolean;
}

export interface CheckBoxes {
  doorsStyle: DoorStyleCheckBoxes;
  woodSpecies: WoodSpeciesCheckBoxes;
  finished: FinishedCheckboxes;
}

export interface State {
  inputs: Inputs;
  files: Array<File>;
  checkBoxes: CheckBoxes;
  setInputValue: (payload: ChangeInputPld) => void;
  addFiles: (files: File) => void;
  setCheckBoxes: (payload: ChangeCheckBoxesPld) => void;
}
