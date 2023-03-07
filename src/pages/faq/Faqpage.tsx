import AppHead from '@/components/common/AppHead';
import Faq from '@/components/Faq';
import React from 'react';

const Faqpage: React.FC = () => (
  <>
    <AppHead title="faq" desription="faq_description" />
    <Faq />
  </>
);

export default Faqpage;
