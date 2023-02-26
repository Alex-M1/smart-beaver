export type InputTypes = 'baseCabinetsInput' | 'wallCabinetsInput' | 'pantryCabinetsInput';

// actions
export interface ChangeInputPld {
  inputType: InputTypes;
  value: string;
}

// state

export interface Inputs {
  baseCabinetsInput: string;
  wallCabinetsInput: string;
  pantryCabinetsInput: string;
}

export interface State {
  inputs: Inputs;
  files: Array<File>;
  setInputValue: (payload: ChangeInputPld) => void;
  addFiles: (files: File) => void;
}
