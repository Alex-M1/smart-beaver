import React from 'react';
import BathroomQuote from '@/components/BathroomQuote';
import AppHead from '@/components/common/AppHead';

const BathroomQuotePage: React.FC = () => (
  <>
    <AppHead title="bathroom_quote" desription="description_text" />
    <BathroomQuote />
  </>
);

export default BathroomQuotePage;
