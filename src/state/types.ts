export type InputTypes = 'baseCabinetsInput' | 'wallCabinetsInput' | 'pantryCabinetsInput';

// actions
export interface ChangeInputPld {
  inputType: InputTypes;
  value: string;
}

// state

export interface Inputs {
  baseCabinetsInput: string;
}

export interface State {
  inputs: Inputs;

  setInputValue: (payload: ChangeInputPld) => void;
}
