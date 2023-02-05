import React, { useState } from 'react';
import { locales } from '@/constants/locales';
import { FontWeight } from '@/constants/ui';
import { StForm } from './styled';
import Button from '../Button';
import { StSpan } from '../styled/Text';
import { StFlex } from '../styled/Block';
import Input from '../Input';

interface Props {

}

const ContactForm: React.FC<Props> = () => {
  const [value, setValue] = useState({
    name: '',
    phone: '',
  });

  const handleChangeValue = (field: 'name' | 'phone') => (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, [field]: evt.target.value }));
  };

  return (
    <StForm>
      <h2><StSpan color="white_crime">{locales.form_title}</StSpan></h2>
      <StSpan fontSize="18px" color="white_crime" fontWeight={FontWeight.bold}>{locales.form_description}</StSpan>
      <StFlex flexDirection="column" width="35%">
        <Input value={value.name} onChange={handleChangeValue('name')} />
        <Input value={value.phone} onChange={handleChangeValue('phone')} margin="32px 0" />
        <Button content="order" onClick={() => { }} />
      </StFlex>
      <StSpan fontSize="18px" color="white_crime" fontWeight={FontWeight.bold}>{locales.form_contacts}</StSpan>
    </StForm>
  );
};

export default ContactForm;
