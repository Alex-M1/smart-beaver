import AppHead from '@/components/common/AppHead';
import DoorsDrawers from '@/components/DoorsDrawers';
import React from 'react';

const DoorsDrawersPage: React.FC = () => (
  <>
    <AppHead title="cabinet_doors_title" desription="cabinet_doors_decr" />
    <DoorsDrawers />
  </>
);

export default DoorsDrawersPage;
