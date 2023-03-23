import React from 'react';
import SpecialtyIslands from '@/components/SpecialtyIslands';
import AppHead from '@/components/common/AppHead';

const SpecialtyIslandsPage: React.FC = () => (
  <>
    <AppHead title="specialty_islands_title" desription="specialty_descr1" />
    <SpecialtyIslands />
  </>
);

export default SpecialtyIslandsPage;
