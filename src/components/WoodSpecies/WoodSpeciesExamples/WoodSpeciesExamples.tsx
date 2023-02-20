import SmallTitle from '@/components/common/SmallTitle';
import React from 'react';
import { StWoodSpeciesExamples } from './styled';
import { woodSpeciesExamples } from './utils';
import WoodeSpeciesExamplesItem from './WoodeSpeciesExamplesItem';

const WoodSpeciesExamples: React.FC = () => (
  <StWoodSpeciesExamples>
    <SmallTitle titleKey="wood_species_example_title" />
    <div className="ws-example__items">
      {woodSpeciesExamples.map((item) => <WoodeSpeciesExamplesItem key={item.itemKey} {...item} />)}
    </div>
  </StWoodSpeciesExamples>
);

export default WoodSpeciesExamples;
