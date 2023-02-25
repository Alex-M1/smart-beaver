import { create } from 'zustand';
import { ChangeInputPld, State } from './types';

export const useAppStore = create<State>((set) => ({
  inputs: {
    baseCabinetsInput: '',
  },

  setInputValue: (payload: ChangeInputPld) => set((state) => ({
    inputs: {
      ...state.inputs,
      [payload.inputType]: payload.value,
    },
  })),
}));
