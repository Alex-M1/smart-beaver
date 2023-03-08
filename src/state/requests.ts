import { Get, Set, State } from './types';

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

export const sendKitchenQuote = async (set: Set, get: Get) => {
  const state = get();
  const isValid = validateQuoteForm(state);
  if (!isValid) {
    return false;
  }
};
