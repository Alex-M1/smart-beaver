import AppHead from '@/components/common/AppHead';
import PolitiesAndTerms from '@/components/PolitiesAndTerms';
import React from 'react';

const PolitiesAndTermsPage: React.FC = () => (
  <>
    <AppHead title="polities_and_terms" desription="polities_and_terms_quotes_text" />
    <PolitiesAndTerms />
  </>
);

export default PolitiesAndTermsPage;
