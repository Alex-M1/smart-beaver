import { create } from 'zustand';
import {
  ChangeCheckBoxesPld, ChangeInputPld, CheckBoxesName, Drawer, DrawerFronts, Finished, Higle, RadioTypes, State, StateField, WoodSpecies,
} from './types';

const initialState: StateField = {
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
      flat_panel: false,
      raised_panel: false,
      shaker: false,
      slab_profile_edge: false,
    },
    higle: {
      hingle_boring: false,
      concealed: false,
    },
    drawerBoxes: {
      natural: false,
      notched: false,
      unfinished: false,
    },
  },
  radio: {
    vanityOptions: '',
  },
};

export const useAppStore = create<State>((set) => ({
  ...initialState,
  reset: () => set(initialState),
  sendForm: () => { },
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
}));
