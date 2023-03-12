import { Locales, locales } from '@/constants/locales';
import { fetchData } from '@/helpers/fetchData';
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
  // if (!isValid) {
  //   return false;
  // }
  const { doorStyles, woodSpecies } = getDoorStylesAndWoodSpecies(state);

  const finishing = (Object.keys(state.checkBoxes.finished) as Finished[])
    .filter((key) => state.checkBoxes.finished[key])
    .map((key) => locales[key as Locales]);

  const formData = new FormData();
  state.files.forEach((file) => { formData.append('files', file); });

  const data = {
    name: 'Kitchen Quote',
    'base cabinet': state.inputs.baseCabinetsInput,
    'wall cabinet': state.inputs.wallCabinetsInput,
    'pantry cabinet': state.inputs.pantryCabinetsInput,
    questions: state.inputs.submitBlockInput,
    'cabinet door styles': doorStyles,
    'wood species': woodSpecies,
    'cabinet finishing': finishing,
  };

  formData.append('data', JSON.stringify(data));

  await fetchData('/api/send_mail', 'POST', formData);
};

// const a = {
//   doorsStyle: {
//     fpa_square: false,
//     fpa_arch_top: true,
//     fpad_double_arch: true,
//     fpc_cathedral_arch: false,
//     fpcd_double_cathedral_arch: false,
//     fpb_beaded_panel: false,
//     rps_raised_square: false,
//     rpa_raised_arch_top: false,
//     rpad_raised_double_arch: false,
//     rpc_raised_cathedral_arch: false,
//     rpcd_raised_double_cathedral_arch: false,
//     rpb_raised_beaded_panel: false,
//     sst_shaker: false,
//     sss_split_shaker: false,
//     sbp_shaker_beaded_panel: false,
//   },
//   woodSpecies: {
//     wood_species_cherry: true,
//     wood_species_hickory: true,
//     wood_species_knotty_alder: false,
//     wood_species_red_oak: false,
//     wood_species_rustic_hickory: false,
//     wood_species_walnut: false,
//     wood_species_white_oak: false,
//     wood_species_wormy_maple: false,
//     wood_species_quarter_sawn: false,
//     wood_species_alder: false,
//     wood_species_maple: false,
//     wood_species_poplar: true,
//     wood_species_poplar2: true,
//     wood_species_mdf: false,
//   },
//   finished: {
//     quote_unfinished: true,
//     quote_natural: true,
//     quote_stain: true,
//     quote_painted: false,
//     quote_glaze: false,
//   },
//   drawerFronts: {
//     flat_panel: false,
//     raised_panel: false,
//     shaker: false,
//     slab_profile_edge: false,
//   },
//   higle: {
//     hingle_boring: false,
//     concealed: false,
//   },
//   drawerBoxes: {
//     natural: false,
//     notched: false,
//     unfinished: false,
//   },
// };
