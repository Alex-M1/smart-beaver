import { RequestBuilder } from '@/helpers/RequestBuilder';
import { Get } from './types';

export const sendKitchenQuote = async (get: Get) => {
  const state = get();
  const reqBuilder = new RequestBuilder(state);
  if (!reqBuilder.isValid) {
    return false;
  }
  const finishing = RequestBuilder.checkboxesToArray(state.checkBoxes.finished);

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

export const sendDoorQuote = async (get: Get) => {
  const state = get();
  const reqBuilder = new RequestBuilder(state);
  if (!reqBuilder.isValid) {
    return false;
  }
  const drawerFronts = RequestBuilder.checkboxesToArray(state.checkBoxes.drawerFronts);
  const higle = RequestBuilder.checkboxesToArray(state.checkBoxes.higle);

  await reqBuilder
    .field('Quote Name', 'Doors Quote')
    .field('Cabinet Doors Dimensions', state.inputs.cabinetDoorsDimensionsInput)
    .field('Cabinet Drawers Dimensions', state.inputs.cabinetDrawersDimensionsInput)
    .field('Drawer Front Style', drawerFronts)
    .field('Hinge Boring and Hinges', higle)
    .sendRequest();
};

export const sendBoxesQuote = async (get: Get) => {
  const state = get();
  const reqBuilder = new RequestBuilder(state);
  if (!reqBuilder.isValid) {
    return false;
  }
  const options = RequestBuilder.checkboxesToArray(state.checkBoxes.drawerBoxes);
  await reqBuilder
    .field('Drawer Box', state.inputs.boxInput1)
    .field('Pull Out Shelf', state.inputs.boxInput2)
    .field('Drawer Box And Pull Out Shelf Options', options)
    .sendRequest(true);
};
