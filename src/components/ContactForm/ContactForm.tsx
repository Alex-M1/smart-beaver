import React, { useState } from 'react';
import { locales } from '@/constants/locales';
import { FontWeight } from '@/constants/ui';
import Modal from '@/components/Modal';
import { StForm } from './styled';
import Button from '../common/Button';
import { StSpan } from '../common/styled/Text';
import { StDiv, StFlex } from '../common/styled/Block';
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

  const [width, setWidth] = useState(0);

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
      setWidth(window.innerWidth)
    } catch (e) {
      console.log(e);
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <StDiv className="container" padding="0 110px">
      <StForm>
        <h2><StSpan color="white_crime">{locales.form_title}</StSpan></h2>
        <StSpan fontSize="18px" color="white_crime" fontWeight={FontWeight.bold} margin="35px 0 95px">{locales.form_description}</StSpan>
        <StFlex flexDirection="column" width="35%" marginBottom="35px">
          <Input value={width} onChange={handleChangeValue('name')} placeholder={locales.placeholder_name} />
          <Input value={value.phone} onChange={handleChangeValue('phone')} margin="32px 0" placeholder={locales.placeholder_phone} />
          <Button padding="16px 0" color="warning" borderRadius="100px" content={locales.order_button} onClick={sendRequest} />
          <Modal onClose={handleCloseModal} open={isModalOpen} />
        </StFlex>
        <StSpan fontSize="18px" color="white_crime" fontWeight={FontWeight.bold}>{locales.form_contacts}</StSpan>
      </StForm>
    </StDiv>
  );
};

export default ContactForm;
