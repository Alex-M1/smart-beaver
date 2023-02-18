import { locales } from '@/constants/locales';
import React from 'react';
import Template from '../common/Template';

import ContactForm from '../ContactForm';
import ProductsTitle from '../ProductsComponents/ProductsTitle';
import CabinetFinishingPreview from './CabinetFinishingPreview';

const CabinetFinishing: React.FC = () => (
  <Template>
    <div className="content container">
      <ProductsTitle page={locales.cabinet_finishing__title} />
      <CabinetFinishingPreview />
    </div>
    <ContactForm />
  </Template>
);

export default CabinetFinishing;
