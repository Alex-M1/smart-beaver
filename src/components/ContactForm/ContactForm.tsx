import React, { useState } from 'react';
import { locales } from '@/constants/locales';
import Modal from '@/components/Modal';
import { StForm } from './styled';
import Button from '../common/Button';
import Input from '../common/Input';

interface Props {

}

const ContactForm: React.FC<Props> = () => {
  const [value, setValue] = useState({
    name: '',
    phone: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChangeValue = (field: 'name' | 'phone') => (value: string) => {
    setValue((prev) => ({ ...prev, [field]: value }));
  };

  const sendRequest = async () => {
    try {
      // await fetch(`${urls.main}${urls.send_mail}`, {
      //   method: 'POST',
      //   body: JSON.stringify(value),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      setValue({ name: '', phone: '' });
      setIsModalOpen(true);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <StForm className="container">
      <form className="contact-form">
        <h2>{locales.form_title}</h2>
        <span className="contact-form__description form-text">{locales.form_description}</span>
        <div className="contact-form__inputs">
          <Input value={value.name} onChange={handleChangeValue('name')} placeholder={locales.placeholder_name} />
          <Input value={value.phone} onChange={handleChangeValue('phone')} margin="32px 0" placeholder={locales.placeholder_phone} />
          <Button padding="16px 0" color="warning" borderRadius="100px" content={locales.order_button} onClick={sendRequest} />
          <Modal onClose={handleCloseModal} open={isModalOpen} />
        </div>
        <span className="form-text">{locales.form_contacts}</span>
      </form>
    </StForm>
  );
};

export default ContactForm;
