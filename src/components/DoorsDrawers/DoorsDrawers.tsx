import { locales } from '@/constants/locales';
import React from 'react';
import Template from '../common/Template';
import ContactForm from '../ContactForm';
import ProductsTitle from '../ProductsComponents/ProductsTitle';
import DoorsCatalog from './DoorsCatalog';
import DoorsDrawersPreview from './DoorsDrawersPreview';
import EdgeProfiles from './EdgeProfiles';
import FrontStyles from './FrontStyles';
import GeneralDoor from './GeneralDoor';
import { StDoorsDrawers } from './styled';

const DoorsDrawers: React.FC = () => (
  <Template>
    <div className="container content">
      <StDoorsDrawers>
        <ProductsTitle page={locales.cabinet_doors_title} />
        <DoorsDrawersPreview />
        <DoorsCatalog />
        <GeneralDoor />
        <EdgeProfiles />
        <FrontStyles />
      </StDoorsDrawers>
    </div>
    <ContactForm />
  </Template>
);

export default DoorsDrawers;