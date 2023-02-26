import { create } from 'zustand';
import { ChangeInputPld, State } from './types';

export const useAppStore = create<State>((set) => ({
  inputs: {
    baseCabinetsInput: '',
    pantryCabinetsInput: '',
    wallCabinetsInput: '',
  },
  files: [],
  setInputValue: (payload: ChangeInputPld) => set((state) => ({
    inputs: {
      ...state.inputs,
      [payload.inputType]: payload.value,
    },
  })),
  addFiles: (file: File) => set((state) => ({
    files: [...state.files, file],
  })),
}));
