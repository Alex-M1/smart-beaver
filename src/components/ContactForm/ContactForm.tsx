import React from 'react';
import { StForm } from './styled';
import SimpleForm from './SimpleForm';
import QuoteForm from './QuoteForm';

interface Props {
  isQuoteForm?: boolean;
}

const ContactForm: React.FC<Props> = ({ isQuoteForm }) => (
  <StForm className="container">
    <form className="contact-form">
      {isQuoteForm ? <QuoteForm /> : <SimpleForm />}
    </form>
  </StForm>
);

export default ContactForm;
