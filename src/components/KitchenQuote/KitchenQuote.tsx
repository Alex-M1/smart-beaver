import { locales } from '@/constants/locales';
import React from 'react';
import Template from '../common/Template';
import ContactForm from '../ContactForm';

const KitchenQuote: React.FC = () => (
  <Template>
    <p className="content container">{locales.kitchen_quotes_preview}</p>
    <ContactForm isQuoteForm />
    <div className="content container">
      ada
    </div>
  </Template>
);

export default KitchenQuote;
