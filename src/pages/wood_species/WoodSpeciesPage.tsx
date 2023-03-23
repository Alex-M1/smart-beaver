import AppHead from '@/components/common/AppHead';
import WoodSpecies from '@/components/WoodSpecies';
import React from 'react';

const WoodSpeciesPage: React.FC = () => (
  <>
    <AppHead title="wood_species" desription="kitchen_cabinet_descr" />
    <WoodSpecies />
  </>
);

export default WoodSpeciesPage;
