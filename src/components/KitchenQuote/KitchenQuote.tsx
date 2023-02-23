import { locales } from '@/constants/locales';
import React from 'react';
import Template from '../common/Template';
import ContactForm from '../ContactForm';

const KitchenQuote: React.FC = () => (
  <Template>
    <div className="content container">
      <p>{locales.kitchen_quotes_preview}</p>
      <ContactForm isQuoteForm />
    </div>
  </Template>
);

export default KitchenQuote;
