import React from 'react';
import Template from '../common/Template';
import ContactForm from '../ContactForm';
import SubmitBlock from '../QuoteItems/SubmitBlock';
import UploadFileBlock from '../QuoteItems/UploadFileBlock';
import Box from './Box';
import DrawerBox from './DrawerBox';

const QuoteBoxes: React.FC = () => (
  <Template>
    <ContactForm isQuoteForm />
    <div className="content container">
      <Box />
      <UploadFileBlock />
      <DrawerBox />
      <SubmitBlock title="submit_block4" formType="boxes" />
    </div>
  </Template>
);

export default QuoteBoxes;
