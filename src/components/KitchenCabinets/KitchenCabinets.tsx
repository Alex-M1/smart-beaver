import { locales } from '@/constants/locales';
import React from 'react';
import Template from '../common/Template';
import ContactForm from '../ContactForm';
import ProductsTitle from '../ProductsComponents/ProductsTitle';
import Cabinets from './Cabinets';
import OtherOptions from './OtherOptions';
import PreviewBlock from './PreviewBlock';
import PureBond from './PureBond';
import StandartFeatures from './StandartFeatures';

const KitchenCabinets: React.FC = () => (
  <Template>
    <div className="content container">
      <ProductsTitle page={locales.kitchen_cabinets} />
      <PreviewBlock />
      <StandartFeatures />
      <Cabinets />
      <OtherOptions />
      <PureBond title={locales.kitchen_pricing_title} text={locales.kitchen_pricing_text} />
    </div>
    <ContactForm />
  </Template>
);

export default KitchenCabinets;
