import {
  State,
  Higle,
  Drawer,
  Finished,
  InputTypes,
  WoodSpecies,
  DrawerFronts,
  CheckBoxesName,
  QuoteFoormTypes,
  ChangeCheckBoxesPld,
  QuoteFormInputsErrorTypes,
  ModalNames,
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
  if (pld.field === 'drawerBoxes') {
    return state.checkBoxes.drawerBoxes[pld.name as Drawer];
  }

  return false;
};
export const setCheckBoxesValue = (state: State) => state.setCheckBoxes;
export const reset = (state: State) => state.reset;
export const sendForm = (state: State) => state.sendForm;

export const getRadioValue = (state: State) => state.radio.vanityOptions;
export const setRadioValue = (state: State) => state.setRadio;

export const getQuoteFormInputs = (inputType: QuoteFoormTypes) => (state: State) => state.quoteFormInputs[inputType];
export const setQuoteFormInputs = (state: State) => state.setQuoteFormInputs;

export const getQuoteFormInputsError = (inputType?: QuoteFormInputsErrorTypes) => (
  (state: State) => (!inputType ? false : state.quoteFormInputsError[inputType])
);
export const setQuoteFormInputsError = (state: State) => state.setQuoteFormInputsError;

export const checkBoxesQuantityError = (field: 'doorsStyle' | 'woodSpecies') => (state: State) => {
  let quantity = 0;
  const chbxs = state.checkBoxes[field];
  Object.keys(chbxs).forEach((key) => {
    if (chbxs[key as keyof typeof chbxs]) quantity += 1;
  });

  return quantity >= 4;
};

export const getModalState = (modal: ModalNames) => (state: State) => state.modalsState[modal];
export const setModalState = (state: State) => state.setModalState;
