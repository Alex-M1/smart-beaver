import BathroomVanities from '@/components/BathroomVanities';
import AppHead from '@/components/common/AppHead';
import React from 'react';

const BathroomVanitiesPage: React.FC = () => (
  <>
    <AppHead title="bathroom_vanities" desription="bathroom_descr1" />
    <BathroomVanities />
  </>
);

export default BathroomVanitiesPage;
