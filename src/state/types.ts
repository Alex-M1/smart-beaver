export type InputTypes = keyof Inputs;
export type CheckBoxesTypes = keyof CheckBoxes;
export type CheckBoxesName = keyof DoorStyleCheckBoxes;
export type WoodSpecies = keyof WoodSpeciesCheckBoxes;
export type Finished = keyof FinishedCheckboxes;
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
  submitBlockInput: string;
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

export interface StateField {
  inputs: Inputs;
  files: Array<File>;
  checkBoxes: CheckBoxes;
}

export interface State extends StateField {
  reset: () => void;
  sendForm: () => void;
  setInputValue: (payload: ChangeInputPld) => void;
  addFiles: (files: File) => void;
  setCheckBoxes: (payload: ChangeCheckBoxesPld) => void;
}
