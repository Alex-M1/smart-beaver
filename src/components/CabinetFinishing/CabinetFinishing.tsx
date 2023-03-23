import { locales } from '@/constants/locales';
import React from 'react';
import Template from '../common/Template';

import ContactForm from '../ContactForm';
import ProductsTitle from '../ProductsComponents/ProductsTitle';
import CabinetFinishingPreview from './CabinetFinishingPreview';
import CabinetFinishingText from './CabinetFinishingText';
import StainFinishes from './StainFinishes';

const CabinetFinishing: React.FC = () => (
  <Template>
    <div className="content container">
      <ProductsTitle page={locales.cabinet_finishing__title} />
      <CabinetFinishingPreview />
      <CabinetFinishingText />
      <StainFinishes />
    </div>
    <ContactForm />
  </Template>
);

export default CabinetFinishing;
