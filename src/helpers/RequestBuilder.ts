import { Locales, locales } from '@/constants/locales';
import { CheckBoxesName, State, WoodSpecies } from '@/state/types';

export class RequestBuilder {
  public isValid: boolean;
  private data: Record<string, unknown>;
  private state: State;

  constructor(state: State) {
    this.state = state;
    this.isValid = false;
    this.data = {};
    this.init();
  }

  public async sendRequest() {
    if (!this.isValid) {
      return false;
    }
    const { doorStyles, woodSpecies } = this.getDoorStylesAndWoodSpecies();

    this
      .field('First & Last Name', this.state.quoteFormInputs.firstName)
      .field('Email', this.state.quoteFormInputs.email)
      .field('Phone', this.state.quoteFormInputs.phone)
      .field('Address L1', this.state.quoteFormInputs.addressL1)
      .field('Address L2', this.state.quoteFormInputs.addressL2)
      .field('City', this.state.quoteFormInputs.city)
      .field('State', this.state.quoteFormInputs.state)
      .field('Zip', this.state.quoteFormInputs.zip)
      .field('Cabinet Door Styles', doorStyles)
      .field('Wood Species', woodSpecies)
      .field('Questions', this.state.inputs.submitBlockInput);

    const formData = new FormData();
    this.state.files.forEach((file) => { formData.append('files', file); });
    formData.append('data', JSON.stringify(this.data));

    const res = await fetch('/api/send_mail', {
      method: 'POST',
      body: formData,
    });
    this.validateResponse(res);
  }

  public field = (key: string, value: unknown) => {
    this.data[key] = value;
    return this;
  };

  private init() {
    this.validateQuoteForm();
  }

  private getDoorStylesAndWoodSpecies() {
    const doorStyles = (Object.keys(this.state.checkBoxes.doorsStyle) as CheckBoxesName[])
      .filter((key) => this.state.checkBoxes.doorsStyle[key])
      .map((key) => locales[key as Locales]);

    const woodSpecies = (Object.keys(this.state.checkBoxes.woodSpecies) as WoodSpecies[])
      .filter((key) => this.state.checkBoxes.woodSpecies[key])
      .map((key) => (key === 'wood_species_poplar2' ? locales.wood_species_poplar : locales[key as Locales]));

    return { doorStyles, woodSpecies };
  }

  private validateQuoteForm() {
    const quoteInputs = this.state.quoteFormInputs;
    const setError = this.state.setQuoteFormInputsError;
    if (quoteInputs.firstName && quoteInputs.email) {
      this.isValid = true;
      return;
    }
    if (!quoteInputs.firstName) {
      setError({ field: 'firstName', value: true });
    }
    if (!quoteInputs.email) {
      setError({ field: 'email', value: true });
    }

    this.isValid = false;
  }

  private validateResponse(res: Response) {
    if (res.ok) {
      this.state.setModalState({ modalType: 'successModal', value: true });
      this.state.reset();
    }
  }
}
