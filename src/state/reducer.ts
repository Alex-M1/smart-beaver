import { create } from 'zustand';
import {
  sendDoorQuote,
  sendBoxesQuote,
  sendKitchenQuote,
  sendBathroomQuote,
} from './requests';
import {
  Higle,
  State,
  Drawer,
  Finished,
  RadioTypes,
  StateField,
  WoodSpecies,
  DrawerFronts,
  CheckBoxesName,
  ChangeInputPld,
  ChangeCheckBoxesPld,
  ChangeQuoteInputsPld,
} from './types';

const initialState: StateField = {
  quoteFormInputs: {
    firstName: '',
    email: '',
    addressL1: '',
    addressL2: '',
    state: '',
    zip: '',
    city: '',
    phone: '',
  },
  quoteFormInputsError: {
    firstName: false,
    email: false,
  },
  inputs: {
    baseCabinetsInput: '',
    pantryCabinetsInput: '',
    wallCabinetsInput: '',
    submitBlockInput: '',
    vanityDimensionsInput: '',
    vantitySideDrawersInput: '',
    vantityFinishedSideInput: '',
    cabinetDoorsDimensionsInput: '',
    cabinetDrawersDimensionsInput: '',
    cornerCabinetsDimensionsInput: '',
    boxInput1: '',
    boxInput2: '',
  },
  files: [],
  checkBoxes: {
    doorsStyle: {
      fpa_square: false,
      fpa_arch_top: false,
      fpad_double_arch: false,
      fpc_cathedral_arch: false,
      fpcd_double_cathedral_arch: false,
      fpb_beaded_panel: false,
      rps_raised_square: false,
      rpa_raised_arch_top: false,
      rpad_raised_double_arch: false,
      rpc_raised_cathedral_arch: false,
      rpcd_raised_double_cathedral_arch: false,
      rpb_raised_beaded_panel: false,
      sst_shaker: false,
      sss_split_shaker: false,
      sbp_shaker_beaded_panel: false,
    },
    woodSpecies: {
      wood_species_cherry: false,
      wood_species_hickory: false,
      wood_species_knotty_alder: false,
      wood_species_red_oak: false,
      wood_species_rustic_hickory: false,
      wood_species_walnut: false,
      wood_species_white_oak: false,
      wood_species_wormy_maple: false,
      wood_species_quarter_sawn: false,
      wood_species_alder: false,
      wood_species_maple: false,
      wood_species_poplar: false,
      wood_species_poplar2: false,
      wood_species_mdf: false,
    },
    finished: {
      quote_unfinished: false,
      quote_natural: false,
      quote_stain: false,
      quote_painted: false,
      quote_glaze: false,
    },
    drawerFronts: {
      df_flat_panel: false,
      df_raised_panel: false,
      df_shaker: false,
      df_slab_profile_edge: false,
    },
    higle: {
      hingle_boring: false,
      concealed: false,
    },
    drawerBoxes: {
      quote_natural: false,
      notched: false,
      quote_unfinished: false,
    },
  },
  radio: {
    vanityOptions: '',
  },
  modalsState: {
    successModal: false,
    errorModal: false,
  },
};

export const useAppStore = create<State>((set, get) => ({
  ...initialState,
  reset: () => set((state) => ({
    ...initialState,
    modalsState: state.modalsState,
  })),
  setInputValue: (payload: ChangeInputPld) => set((state) => ({
    inputs: {
      ...state.inputs,
      [payload.inputType]: payload.value,
    },
  })),
  addFiles: (file: File) => set((state) => ({
    files: [...state.files, file],
  })),
  setCheckBoxes: (payload: ChangeCheckBoxesPld) => set((state) => {
    let value: boolean = false;
    if (payload.field === 'doorsStyle') {
      value = !state.checkBoxes.doorsStyle[payload.name as CheckBoxesName];
    }
    if (payload.field === 'woodSpecies') {
      value = !state.checkBoxes.woodSpecies[payload.name as WoodSpecies];
    }
    if (payload.field === 'finished') {
      value = !state.checkBoxes.finished[payload.name as Finished];
    }
    if (payload.field === 'drawerFronts') {
      value = !state.checkBoxes.drawerFronts[payload.name as DrawerFronts];
    }
    if (payload.field === 'higle') {
      value = !state.checkBoxes.higle[payload.name as Higle];
    }
    if (payload.field === 'drawerBoxes') {
      value = !state.checkBoxes.drawerBoxes[payload.name as Drawer];
    }
    return ({
      checkBoxes: {
        ...state.checkBoxes,
        [payload.field]: {
          ...state.checkBoxes[payload.field],
          [payload.name]: value,
        },
      },
    });
  }),
  setRadio: (payload: RadioTypes) => set((state) => ({
    radio: {
      ...state.radio,
      vanityOptions: payload,
    },
  })),

  setQuoteFormInputs: (payload: ChangeQuoteInputsPld) => set((state) => ({
    quoteFormInputs: {
      ...state.quoteFormInputs,
      [payload.field]: payload.value,
    },
  })),
  setQuoteFormInputsError: (payload) => set((state) => ({
    quoteFormInputsError: { ...state.quoteFormInputsError, [payload.field]: payload.value },
  })),
  setModalState: (payload) => set((state) => ({
    modalsState: {
      ...state.modalsState,
      [payload.modalType]: payload.value,
    },
  })),

  sendForm: async (type) => {
    if (type === 'kitchen') await sendKitchenQuote(get);
    else if (type === 'bathroom') await sendBathroomQuote(get);
    else if (type === 'doors') await sendDoorQuote(get);
    else if (type === 'boxes') await sendBoxesQuote(get);
  },
}));
