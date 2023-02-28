import { create } from 'zustand';
import {
  ChangeCheckBoxesPld, ChangeInputPld, CheckBoxesName, State, WoodSpecies,
} from './types';

export const useAppStore = create<State>((set) => ({
  inputs: {
    baseCabinetsInput: '',
    pantryCabinetsInput: '',
    wallCabinetsInput: '',
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
  },
  setInputValue: (payload: ChangeInputPld) => set((state) => ({
    inputs: {
      ...state.inputs,
      [payload.inputType]: payload.value,
    },
  })),
  addFiles: (file: File) => set((state) => ({
    files: [...state.files, file],
  })),
  setCheckBoxes: (payload: ChangeCheckBoxesPld) => set((state) => ({
    checkBoxes: {
      ...state.checkBoxes,
      [payload.field]: {
        ...state.checkBoxes[payload.field],
        [payload.name]: payload.field === 'doorsStyle'
          ? !state.checkBoxes.doorsStyle[payload.name as CheckBoxesName]
          : !state.checkBoxes.woodSpecies[payload.name as WoodSpecies],
      },
    },
  })),
}));
