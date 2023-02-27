export type InputTypes = 'baseCabinetsInput' | 'wallCabinetsInput' | 'pantryCabinetsInput';
export type CheckBoxesTypes = 'doorsStyle';
export type CheckBoxesName = 'fpa_square' | 'fpa_arch_top' | 'fpad_double_arch' | 'fpc_cathedral_arch' | 'fpcd_double_cathedral_arch' | 'fpb_beaded_panel' | 'rps_raised_square' | 'rpa_raised_arch_top' | 'rpad_raised_double_arch' | 'rpc_raised_cathedral_arch' | 'rpcd_raised_double_cathedral_arch' | 'rpb_raised_beaded_panel' | 'sst_shaker' | 'sss_split_shaker' | 'sbp_shaker_beaded_panel';
// actions
export interface ChangeInputPld {
  inputType: InputTypes;
  value: string;
}

export interface ChangeCheckBoxesPld {
  field: CheckBoxesTypes;
  name: CheckBoxesName;
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
export interface CheckBoxes {
  doorsStyle: DoorStyleCheckBoxes;
}

export interface State {
  inputs: Inputs;
  files: Array<File>;
  checkBoxes: CheckBoxes;
  setInputValue: (payload: ChangeInputPld) => void;
  addFiles: (files: File) => void;
  setCheckBoxes: (payload: ChangeCheckBoxesPld) => void;
}
