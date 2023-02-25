import { locales } from '@/constants/locales';
import React from 'react';
import Template from '../common/Template';
import ContactForm from '../ContactForm';
import CabinetItem from './CabinetItem';
import CornerCabinets from './CornerCabinets';
import { StKitchenQuote } from './styled';

const KitchenQuote: React.FC = () => (
  <Template>
    <StKitchenQuote>
      <div className="content container">
        <p className="quote-title ">{locales.kitchen_quotes_preview}</p>
      </div>
      <ContactForm isQuoteForm />
      <div className="content container">
        <div className="quote-text">
          <p className="small-text bold">{locales.cabinet_dimensions.toLocaleUpperCase()}</p>
          <p className="small-text bold">{locales.cabinet_dimensions_text}</p>
        </div>
        <div className="cabinets-items">
          <CabinetItem type="base_cabinets" />
          <CabinetItem type="wall_cabinets" />
          <CabinetItem type="pantry_cabinets" />
        </div>
        <CornerCabinets />
      </div>
    </StKitchenQuote>
  </Template>
);

export default KitchenQuote;
