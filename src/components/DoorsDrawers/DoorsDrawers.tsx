import { locales } from '@/constants/locales';
import { urls } from '@/constants/urls';
import React from 'react';
import Template from '../common/Template';
import ContactForm from '../ContactForm';
import ProductsTitle from '../ProductsComponents/ProductsTitle';
import PureBond from '../ProductsComponents/PureBond';
import AvailableOptions from './AvailableOptions';
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
        <AvailableOptions />
        <PureBond
          href={urls.doors_quote}
          title={locales.door_drawers_pure_bond_title}
          text={locales.door_drawers_pure_bond_text}
          guideUrl={urls.measure_cabinet_doors}
        />
      </StDoorsDrawers>
    </div>
    <ContactForm />
  </Template>
);

export default DoorsDrawers;
