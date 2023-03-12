import React from 'react';
import Template from '../common/Template';
import ContactForm from '../ContactForm';
import CabinetDoorsStyle from '../QuoteItems/CabinetDoorsStyle';
import QuoteMultiplyFinishes from '../QuoteItems/QuoteMultiplyFinishes';
import QuoteWoodSpecies from '../QuoteItems/QuoteWoodSpecies';
import SubmitBlock from '../QuoteItems/SubmitBlock';
import UploadFileBlock from '../QuoteItems/UploadFileBlock';
import CabinetDoorsDimensions from './CabinetDoorsDimensions';
import DrawerFrontStyle from './DrawerFrontStyle';
import Hingle from './Hingle';

const QuoteDoors: React.FC = () => (
  <Template>
    <ContactForm isQuoteForm />
    <div className="content container">
      <CabinetDoorsDimensions />
      <UploadFileBlock />
      <CabinetDoorsStyle title="vantity_door_style2" />
      <DrawerFrontStyle />
      <QuoteWoodSpecies title="quote_wood_species2" />
      <QuoteMultiplyFinishes title="quote_finishes2" />
      <Hingle />
      <SubmitBlock title="submit_block3" formType="doors" />
    </div>
  </Template>
);

export default QuoteDoors;
