import AppHead from '@/components/common/AppHead';
import MeasureCabinetDoors from '@/components/MeasureCabinetDoors';
import React from 'react';

const MeasureCabinetDoorsPage: React.FC = () => (
  <>
    <AppHead title="measure_cabinet_doors_title" desription="replacing_doors_text" />
    <MeasureCabinetDoors />
  </>
);

export default MeasureCabinetDoorsPage;
