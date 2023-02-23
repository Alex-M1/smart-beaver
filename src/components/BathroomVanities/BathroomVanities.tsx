import { locales } from '@/constants/locales';
import React from 'react';
import Template from '../common/Template';
import ContactForm from '../ContactForm';
import ProductsTitle from '../ProductsComponents/ProductsTitle';
import PureBond from '../ProductsComponents/PureBond';
import Recipe from '../ProductsComponents/Recipe';
import StandartFeatures from '../ProductsComponents/StandartFeatures';
import BathroomFeatures from './BathroomFeatures';
import BathroomOtherOptions from './BathroomOtherOptions';
import BathroomPreview from './BathroomPreview';
import { StBathroom } from './styled';

const BathroomVanities: React.FC = () => (
  <Template>
    <div className="container content">
      <ProductsTitle page={locales.bathroom_vanities} />
      <StBathroom>
        <BathroomPreview />
        <Recipe />
        <BathroomFeatures />
        <StandartFeatures isBathroom />
        <BathroomOtherOptions />
        <PureBond href="" text={locales.bathroom_pure_bond_text} title={locales.bathroom_pure_bond_title} />
      </StBathroom>
    </div>
    <ContactForm />
  </Template>
);

export default BathroomVanities;
