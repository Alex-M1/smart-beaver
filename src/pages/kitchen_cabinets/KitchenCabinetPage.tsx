import AppHead from '@/components/common/AppHead';
import KitchenCabinet from '@/components/KitchenCabinets';
import React from 'react';

const KitchenCabinetPage: React.FC = () => (
  <>
    <AppHead title="kitchen_cabinets" desription="kitchen_cabinet_descr" />
    <KitchenCabinet />
  </>
);

export default KitchenCabinetPage;
