import React from 'react';
import QuoteBoxes from '@/components/QuoteBoxes';
import AppHead from '@/components/common/AppHead';

const QuoteBoxesPage: React.FC = () => (
  <>
    <AppHead title="boxes_quote" desription="description_text" />
    <QuoteBoxes />
  </>
);

export default QuoteBoxesPage;
