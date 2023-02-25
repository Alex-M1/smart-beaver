import { InputTypes, State } from './types';

export const getInputsValue = (inputTypes: InputTypes) => (state: State) => state.inputs[inputTypes];
export const addInputValue = (state: State) => state.setInputValue;
