import { locales } from '@/constants/locales';
import React from 'react';
import Template from '../common/Template';
import ProductsTitle from '../ProductsComponents/ProductsTitle';
import WoodSpeciesExamples from './WoodSpeciesExamples';
import WoodSpeciesPreview from './WoodSpeciesPreview';

const WoodSpecies: React.FC = () => (
  <Template>
    <div className="content container">
      <ProductsTitle page={locales.wood_species} />
      <WoodSpeciesPreview />
      <WoodSpeciesExamples />
    </div>
  </Template>
);

export default WoodSpecies;
