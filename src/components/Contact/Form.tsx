import { locales } from '@/constants/locales';
import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const Form: React.FC = () => {
  const [iptValue, setIptValue] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChangeValue = (type: string) => (value: string) => {
    setIptValue((prev) => ({ ...prev, [type]: value }));
  };

  const handleSend = () => { };

  return (
    <form className="contact__form">
      <div className="contact__form-ipt-row">
        <Input className="contact__form-ipt" placeholder={locales.placeholder_name} value={iptValue.name} onChange={handleChangeValue('name')} />
        <Input className="contact__form-ipt" placeholder={locales.email_plh} value={iptValue.email} onChange={handleChangeValue('email')} />
      </div>
      <Input placeholder={locales.text_plh} value={iptValue.message} onChange={handleChangeValue('message')} />
      <Button
        color="warning"
        content={locales.send}
        onClick={handleSend}
        className="contact__form-btn"
        borderRadius="100px"
      />
    </form>
  );
};

export default Form;
