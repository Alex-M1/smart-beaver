import { locales } from '@/constants/locales';
import { states } from '@/constants/states';
import React from 'react';
import Input from '../common/Input';
import Select from '../common/Select';
import { StQuoteForm } from './styled';

const QuoteForm: React.FC = () => {
  const [state, setState] = React.useState({
    firstName: '',
    email: '',
    addressL1: '',
    addressL2: '',
    state: '',
    zip: '',
    city: '',
    phone: '',
  });

  const handleInpputChange = (input: string) => (value: string) => setState({ ...state, [input]: value });
  const handleSelectChange = (value: string) => {
    setState({ ...state, state: states.find((state) => state.value === value)?.value || '' });
  };

  return (
    <>
      <h2>{locales.contact_information}</h2>
      <StQuoteForm>
        <Input value={state.firstName} onChange={handleInpputChange('firstName')} className="quote-el" placeholder={locales.quote_form_first_name_plh} />
        <Input value={state.email} onChange={handleInpputChange('email')} className="quote-el" placeholder={locales.quote_form_email_plh} />
        <Input value={state.addressL1} onChange={handleInpputChange('addressL1')} className="quote-el" placeholder={locales.quote_form_address_l1_plh} />
        <Input value={state.addressL2} onChange={handleInpputChange('addressL2')} className="quote-el" placeholder={locales.quote_form_address_l2_plh} />
        <div className="quoteform__states quote-el">
          <Select
            value={state.state}
            options={states}
            onChange={handleSelectChange}
            placeholder={locales.quote_form_state_plh}
          />
          <Input value={state.zip} onChange={handleInpputChange('zip')} placeholder={locales.quote_form_zip_plh} />
        </div>
        <Input value={state.city} onChange={handleInpputChange('city')} className="quote-el" placeholder={locales.quote_form_city_plh} />
        <Input value={state.phone} onChange={handleInpputChange('phone')} className="quote-el quote-el-last" placeholder={locales.quote_form_phone_plh} />
      </StQuoteForm>
    </>
  );
};

export default QuoteForm;
