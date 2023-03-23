import React from 'react';
import { locales } from '@/constants/locales';
import QuoteFormInput from './QuoteFormInput';
import { StQuoteForm } from './styled';
import QuoteFormSelect from './QuoteFormSelect';

const QuoteForm: React.FC = () => (
  <>
    <h2>{locales.contact_information}</h2>
    <StQuoteForm>
      <QuoteFormInput inputName="firstName" className="quote-el" placeholder={locales.quote_form_first_name_plh} />
      <QuoteFormInput inputName="email" className="quote-el" placeholder={locales.quote_form_email_plh} />
      <QuoteFormInput inputName="addressL1" className="quote-el" placeholder={locales.quote_form_address_l1_plh} />
      <QuoteFormInput inputName="addressL2" className="quote-el" placeholder={locales.quote_form_address_l2_plh} />
      <div className="quoteform__states quote-el">
        <QuoteFormSelect />
        <QuoteFormInput inputName="zip" placeholder={locales.quote_form_zip_plh} />
      </div>
      <QuoteFormInput inputName="city" className="quote-el" placeholder={locales.quote_form_city_plh} />
      <QuoteFormInput inputName="phone" className="quote-el quote-el-last" placeholder={locales.quote_form_phone_plh} />
    </StQuoteForm>
  </>
);

export default QuoteForm;
