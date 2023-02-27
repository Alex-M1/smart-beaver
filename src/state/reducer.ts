import { create } from 'zustand';
import { ChangeCheckBoxesPld, ChangeInputPld, State } from './types';

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
        [payload.name]: !state.checkBoxes[payload.field][payload.name],
      },
    },
  })),
}));
