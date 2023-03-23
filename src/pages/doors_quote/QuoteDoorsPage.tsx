import React from 'react';
import QuoteDoors from '@/components/QuoteDoors';
import AppHead from '@/components/common/AppHead';

const QuoteDoorsPage: React.FC = () => (
  <>
    <AppHead title="doors_quote" desription="kitchen_quotes_preview" />
    <QuoteDoors />
  </>
);

export default QuoteDoorsPage;
