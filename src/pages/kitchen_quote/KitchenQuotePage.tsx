import AppHead from '@/components/common/AppHead';
import KitchenQuote from '@/components/KitchenQuote';
import React from 'react';

const KitchenQuotePage: React.FC = () => (
  <>
    <AppHead title="kitchen_quote" desription="kitchen_quotes_preview" />
    <KitchenQuote />
  </>
);

export default KitchenQuotePage;
