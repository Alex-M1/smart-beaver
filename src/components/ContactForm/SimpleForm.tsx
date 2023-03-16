import React, { useState } from 'react';
import { locales } from '@/constants/locales';
import { RequestBuilder } from '@/helpers/RequestBuilder';
import { useAppStore } from '@/state/reducer';
import Button from '../common/Button';
import Input from '../common/Input';

const SimpleForm: React.FC = () => {
  const [value, setValue] = useState({
    name: '',
    phone: '',
  });
  const state = useAppStore();
  const [error, setError] = useState(false);

  const handleChangeValue = (field: 'name' | 'phone') => (value: string) => {
    if (field === 'phone') setError(false);
    setValue((prev) => ({ ...prev, [field]: value }));
  };

  const sendRequest = async () => {
    if (!value.phone) {
      return setError(true);
    }
    const reqBuilder = new RequestBuilder(state);
    await reqBuilder
      .field('Page', value.name)
      .field('subject', 'Order a measurer')
      .field('Phone', value.phone)
      .simpleFormRequest();
    setValue({ name: '', phone: '' });
  };

  return (
    <>
      <h2>{locales.form_title}</h2>
      <span className="contact-form__description form-text">{locales.form_description}</span>
      <div className="contact-form__inputs">
        <Input borderRadius="100px" value={value.name} onChange={handleChangeValue('name')} placeholder={locales.placeholder_name} />
        <Input borderRadius="100px" helperText={error ? locales.required_field : ''} isError={error} value={value.phone} onChange={handleChangeValue('phone')} margin={`32px 0 ${error ? 8 : 32}px`} placeholder={locales.placeholder_phone} />
        <Button color="warning" borderRadius="100px" content={locales.order_button} onClick={sendRequest} />
      </div>
      <span className="form-text">{locales.form_contacts}</span>
    </>
  );
};

export default SimpleForm;
