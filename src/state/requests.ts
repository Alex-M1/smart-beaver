import { Locales, locales } from '@/constants/locales';
import { RequestBuilder } from '@/helpers/RequestBuilder';
import {
  Get,
  Finished,
} from './types';

export const sendKitchenQuote = async (get: Get) => {
  const state = get();
  const reqBuilder = new RequestBuilder(state);
  if (!reqBuilder.isValid) {
    return false;
  }
  const finishing = (Object.keys(state.checkBoxes.finished) as Finished[])
    .filter((key) => state.checkBoxes.finished[key])
    .map((key) => locales[key as Locales]);
  await reqBuilder
    .field('Quote Name', 'Kitchen Quote')
    .field('Base Cabinet', state.inputs.baseCabinetsInput)
    .field('Wall Cabinet', state.inputs.wallCabinetsInput)
    .field('Cabinet Finishing', finishing)
    .sendRequest();
};

export const sendBathroomQuote = async (get: Get) => {
  const state = get();
  const reqBuilder = new RequestBuilder(state);

  if (!reqBuilder.isValid) {
    return false;
  }

  await reqBuilder
    .field('Quote Name', 'Bathroom Quote')
    .field('Dimension of Vantity', state.inputs.vanityDimensionsInput)
    .field('Quantity of Finishes Sides', state.inputs.vantityFinishedSideInput)
    .field('Quantity of Drawers', state.inputs.vantitySideDrawersInput)
    .field('Style of Finish Sides', state.radio.vanityOptions)
    .sendRequest();
};
