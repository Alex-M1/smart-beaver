import { Locales, locales } from '@/constants/locales';
import { State, WoodSpecies } from '@/state/types';

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

  public async sendRequest(isBoxes?: boolean) {
    this
      .field('First & Last Name', this.state.quoteFormInputs.firstName)
      .field('Email', this.state.quoteFormInputs.email)
      .field('Phone', this.state.quoteFormInputs.phone)
      .field('Address L1', this.state.quoteFormInputs.addressL1)
      .field('Address L2', this.state.quoteFormInputs.addressL2)
      .field('City', this.state.quoteFormInputs.city)
      .field('State', this.state.quoteFormInputs.state)
      .field('Zip', this.state.quoteFormInputs.zip)
      .field('Questions', this.state.inputs.submitBlockInput);

    if (!isBoxes) {
      const { doorStyles, woodSpecies, finished } = this.getDoorStylesAndWoodSpecies();
      this
        .field('Cabinet Door Styles', doorStyles)
        .field('Wood Species', woodSpecies)
        .field('Cabinet Finishing', finished);
    }

    const formData = new FormData();
    this.state.files.forEach((file) => { formData.append('files', file); });
    formData.append('data', JSON.stringify(this.data));
    try {
      const res = await fetch('/api/send_mail', {
        method: 'POST',
        body: formData,
      });
      this.validateResponse(res);
    } catch {
      this.state.setModalState({ modalType: 'errorModal', value: true });
    }
  }
  public simpleFormRequest = async () => {
    try {
      const formData = new FormData();
      formData.append('data', JSON.stringify(this.data));
      const res = await fetch('/api/send_mail', {
        method: 'POST',
        body: formData,
      });
      this.validateResponse(res);
    } catch {
      this.state.setModalState({ modalType: 'errorModal', value: true });
    }
  };
  public field = (key: string, value: unknown) => {
    this.data[key] = value;
    return this;
  };

  public static checkboxesToArray = <T extends object>(checkboxes: T) => (
    Object.keys(checkboxes)
      .filter((key) => checkboxes[key as keyof T])
      .map((key) => locales[key as Locales])
  );

  private init() {
    this.validateQuoteForm();
  }

  private getDoorStylesAndWoodSpecies() {
    const doorStyles = RequestBuilder.checkboxesToArray(this.state.checkBoxes.doorsStyle);
    const finished = RequestBuilder.checkboxesToArray(this.state.checkBoxes.finished);

    const woodSpecies = (Object.keys(this.state.checkBoxes.woodSpecies) as WoodSpecies[])
      .filter((key) => this.state.checkBoxes.woodSpecies[key])
      .map((key) => (key === 'wood_species_poplar2' ? locales.wood_species_poplar : locales[key as Locales]));

    return { doorStyles, woodSpecies, finished };
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
