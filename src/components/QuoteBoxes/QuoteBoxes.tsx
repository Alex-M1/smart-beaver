import React from 'react';
import Template from '../common/Template';
import ContactForm from '../ContactForm';
import SubmitBlock from '../QuoteItems/SubmitBlock';
import UploadFileBlock from '../QuoteItems/UploadFileBlock';
import Box from './Box';

const QuoteBoxes: React.FC = () => (
  <Template>
    <ContactForm isQuoteForm />
    <div className="content container">
      <Box />
      <UploadFileBlock />
      <SubmitBlock title="submit_block4" />
    </div>
  </Template>
);

export default QuoteBoxes;
