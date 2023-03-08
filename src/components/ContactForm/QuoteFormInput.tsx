import React from 'react';
import { useAppStore } from '@/state/reducer';
import {
  getQuoteFormInputs, getQuoteFormInputsError, setQuoteFormInputs, setQuoteFormInputsError,
} from '@/state/selectors';
import { QuoteFoormTypes } from '@/state/types';
import { locales } from '@/constants/locales';
import Input from '../common/Input';

interface Props {
  inputName: QuoteFoormTypes;
  placeholder: string;
  className?: string;
}

const QuoteFormInput: React.FC<Props> = ({ inputName, placeholder, className }) => {
  const value = useAppStore(getQuoteFormInputs(inputName));
  const setValue = useAppStore(setQuoteFormInputs);
  const isRequired = inputName === 'firstName' || inputName === 'email';
  const error = useAppStore(getQuoteFormInputsError(isRequired ? inputName : undefined));
  const setError = useAppStore(setQuoteFormInputsError);

  const handleInpputChange = (value: string) => {
    if (isRequired) {
      setError({ field: inputName, value: value.length === 0 });
    }
    setValue({ field: inputName, value });
  };

  return (
    <Input
      isError={error}
      helperText={error ? locales.required_field : ''}
      value={value}
      onChange={handleInpputChange}
      className={className}
      placeholder={placeholder}
      borderRadius="100px"
      margin={error ? '0' : '0 0 24px'}
    />
  );
};

export default QuoteFormInput;
