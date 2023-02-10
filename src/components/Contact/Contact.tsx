import { locales } from '@/constants/locales';
import React from 'react';
import Template from '../common/Template';
import Title from '../common/Title';
import ContactsBlock from './ContactsBlock';
import Form from './Form';
import Schedule from './Schedule';
import { StContact } from './styled';

const Contact: React.FC = () => (
  <Template>
    <div className="container content">
      <StContact>
        <Title text={locales.contact} />
        <div className="contact">
          <ContactsBlock />
          <div className="contact__data">
            <Schedule />
            <Form />
          </div>
        </div>
      </StContact>
    </div>
  </Template>
);

export default Contact;
