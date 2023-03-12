import { Locales, locales } from '@/constants/locales';
import {
  CheckBoxesName,
  Finished,
  Get, Set, State, WoodSpecies,
} from './types';

const validateQuoteForm = (state: State) => {
  const quoteInputs = state.quoteFormInputs;
  const setError = state.setQuoteFormInputsError;
  if (quoteInputs.firstName && quoteInputs.email) {
    return true;
  }
  if (!quoteInputs.firstName) {
    setError({ field: 'firstName', value: true });
  }
  if (!quoteInputs.email) {
    setError({ field: 'email', value: true });
  }

  return false;
};

export const getDoorStylesAndWoodSpecies = (state: State) => {
  const doorStyles = (Object.keys(state.checkBoxes.doorsStyle) as CheckBoxesName[])
    .filter((key) => state.checkBoxes.doorsStyle[key])
    .map((key) => locales[key as Locales]);

  const woodSpecies = (Object.keys(state.checkBoxes.woodSpecies) as WoodSpecies[])
    .filter((key) => state.checkBoxes.woodSpecies[key])
    .map((key) => (key === 'wood_species_poplar2' ? locales.wood_species_poplar : locales[key as Locales]));

  return { doorStyles, woodSpecies };
};

export const sendKitchenQuote = async (set: Set, get: Get) => {
  const state = get();
  const isValid = validateQuoteForm(state);
  if (!isValid) {
    return false;
  }

  const { doorStyles, woodSpecies } = getDoorStylesAndWoodSpecies(state);

  const finishing = (Object.keys(state.checkBoxes.finished) as Finished[])
    .filter((key) => state.checkBoxes.finished[key])
    .map((key) => locales[key as Locales]);

  const formData = new FormData();
  state.files.forEach((file) => { formData.append('files', file); });

  const data = {
    name: 'Kitchen Quote',
    ...state.quoteFormInputs,
    'base cabinet': state.inputs.baseCabinetsInput,
    'wall cabinet': state.inputs.wallCabinetsInput,
    'pantry cabinet': state.inputs.pantryCabinetsInput,
    questions: state.inputs.submitBlockInput,
    'cabinet door styles': doorStyles,
    'wood species': woodSpecies,
    'cabinet finishing': finishing,
  };

  formData.append('data', JSON.stringify(data));

  const res = await fetch('/api/send_mail', {
    method: 'POST',
    body: formData,
  });
  if (res.ok) {
    state.setModalState({ modalType: 'successModal', value: true });
    state.reset();
  }
};
