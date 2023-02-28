import {
  ChangeCheckBoxesPld, CheckBoxesName, InputTypes, State, WoodSpecies,
} from './types';

export const getInputsValue = (inputTypes: InputTypes) => (state: State) => state.inputs[inputTypes];
export const addInputValue = (state: State) => state.setInputValue;

export const getFiles = (state: State) => state.files;
export const addFiles = (state: State) => state.addFiles;
export const getFileNames = (state: State) => state.files.map((file) => file.name);

export const getCheckBoxesValue = (pld: ChangeCheckBoxesPld) => (state: State) => (
  pld.field === 'woodSpecies' ? state.checkBoxes.woodSpecies[pld.name as WoodSpecies] : state.checkBoxes.doorsStyle[pld.name as CheckBoxesName]
);
export const setCheckBoxesValue = (state: State) => state.setCheckBoxes;
