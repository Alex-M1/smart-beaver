import { locales } from '@/constants/locales';
import React from 'react';
import Template from '../common/Template';
import ContactForm from '../ContactForm';
import CabinetDoorsStyle from '../QuoteItems/CabinetDoorsStyle';
import QuoteMultiplyFinishes from '../QuoteItems/QuoteMultiplyFinishes';
import QuoteWoodSpecies from '../QuoteItems/QuoteWoodSpecies';
import SubmitBlock from '../QuoteItems/SubmitBlock';
import UploadFileBlock from '../QuoteItems/UploadFileBlock';
import VanityOptions from './VanityOptions';
import VantityDimesions from './VantityDimesions';

const BathroomQuote: React.FC = () => (
  <Template>
    <div className="content container">
      <p className="quote-title">{locales.bathroom_quotes_preview}</p>
    </div>
    <ContactForm isQuoteForm />
    <div className="content container">
      <VantityDimesions />
      <VanityOptions />
      <UploadFileBlock />
      <CabinetDoorsStyle title="vantity_door_style" />
      <QuoteWoodSpecies title="quote_wood_species2" />
      <QuoteMultiplyFinishes title="quote_finishes2" />
      <SubmitBlock title="submit_block2" formType="bathroom" />
    </div>
  </Template>
);

export default BathroomQuote;
