import { locales } from '@/constants/locales';
import React from 'react';
import Icon from '../common/Icon';

const ContactsBlock: React.FC = () => (
  <div className="contact__contacts-block content">
    <a className="contact__contacts-block-item" href={`tel:${locales.tel}`}>
      <Icon alt="phone" name="phone" ext="svg" />
      <span>{locales.phone}</span>
    </a>
    <a className="contact__contacts-block-item" href={`mailto:${locales.mail}`}>
      <Icon alt="mail" name="mail" ext="svg" />
      <span>{locales.mail}</span>
    </a>
  </div>
);

export default ContactsBlock;
