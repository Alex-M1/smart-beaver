import {
  ChangeCheckBoxesPld, CheckBoxesName, DrawerFronts, Finished, Higle, InputTypes, State, WoodSpecies,
} from './types';

export const getInputsValue = (inputTypes: InputTypes) => (state: State) => state.inputs[inputTypes];
export const addInputValue = (state: State) => state.setInputValue;

export const getFiles = (state: State) => state.files;
export const addFiles = (state: State) => state.addFiles;
export const getFileNames = (state: State) => state.files.map((file) => file.name);

export const getCheckBoxesValue = (pld: ChangeCheckBoxesPld) => (state: State) => {
  if (pld.field === 'doorsStyle') {
    return state.checkBoxes.doorsStyle[pld.name as CheckBoxesName];
  }
  if (pld.field === 'woodSpecies') {
    return state.checkBoxes.woodSpecies[pld.name as WoodSpecies];
  }
  if (pld.field === 'finished') {
    return state.checkBoxes.finished[pld.name as Finished];
  }
  if (pld.field === 'drawerFronts') {
    return state.checkBoxes.drawerFronts[pld.name as DrawerFronts];
  }
  if (pld.field === 'higle') {
    return state.checkBoxes.higle[pld.name as Higle];
  }
  return false;
};
export const setCheckBoxesValue = (state: State) => state.setCheckBoxes;
export const reset = (state: State) => state.reset;
export const sendForm = (state: State) => state.sendForm;

export const getRadioValue = (state: State) => state.radio.vanityOptions;
export const setRadioValue = (state: State) => state.setRadio;
