import { InputTypes, State } from './types';

export const getInputsValue = (inputTypes: InputTypes) => (state: State) => state.inputs[inputTypes];
export const addInputValue = (state: State) => state.setInputValue;

export const getFiles = (state: State) => state.files;
export const addFiles = (state: State) => state.addFiles;
export const getFileNames = (state: State) => state.files.map((file) => file.name);
