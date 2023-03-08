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

  const [error, setError] = useState({
    email: false,
    message: false,
  });

  const handleChangeValue = (type: string) => (value: string) => {
    if (type === 'email') setError((prev) => ({ ...prev, email: false }));
    if (type === 'message') setError((prev) => ({ ...prev, message: false }));
    setIptValue((prev) => ({ ...prev, [type]: value }));
  };

  const handleSend = () => {
    if (!iptValue.email) {
      return setError((prev) => ({ ...prev, email: true }));
    }
    if (!iptValue.message) {
      return setError((prev) => ({ ...prev, message: true }));
    }
    try {
      // await fetch(`${urls.main}${urls.send_mail}`, {
      //   method: 'POST',
      //   body: JSON.stringify(value),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      setIptValue({ name: '', email: '', message: '' });
      // setIsModalOpen(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className="contact__form">
      <div className="contact__form-ipt-row">
        <Input className="contact__form-ipt" borderRadius="100px" placeholder={locales.placeholder_name} value={iptValue.name} onChange={handleChangeValue('name')} margin="0 0 32px" />
        <Input
          value={iptValue.email}
          isError={error.email}
          onChange={handleChangeValue('email')}
          className="contact__form-ipt"
          helperText={error.email ? locales.required_field : ''}
          placeholder={locales.email_plh}
          margin={`0 0 ${error.email ? 8 : 32}px`}
          borderRadius="100px"
        />
      </div>
      <Input
        value={iptValue.message}
        isError={error.message}
        onChange={handleChangeValue('message')}
        helperText={error.message ? locales.required_field : ''}
        placeholder={locales.text_plh}
        margin={`0 0 ${error.message ? 8 : 32}px`}
        borderRadius="100px"
      />
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
