import { locales } from '@/constants/locales';
import React from 'react';
import Icon from '../common/Icon';

interface Props {

}

const ContactsBlock: React.FC<Props> = ({ }) => (
  <div className="contact__contacts-block">
    <div className="contact__contacts-block-item">
      <Icon alt="phone" name="phone" ext="svg" />
      <span>{locales.phone}</span>
    </div>
    <div className="contact__contacts-block-item">
      <Icon alt="mail" name="mail" ext="svg" />
      <span>{locales.mail}</span>
    </div>
  </div>
);

export default ContactsBlock;
