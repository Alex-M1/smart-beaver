import Input from '@/components/common/Input';
import { locales } from '@/constants/locales';
import { useAppStore } from '@/state/reducer';
import { addInputValue, getInputsValue } from '@/state/selectors';
import { InputTypes } from '@/state/types';
import React from 'react';
import { StInputWrapper } from './styled';

interface Props {
  inputType: InputTypes
}

const QuoteInput: React.FC<Props> = ({ inputType }) => {
  const value = useAppStore(getInputsValue(inputType));
  const setInputValue = useAppStore(addInputValue);

  const handleChange = (value: string) => {
    setInputValue({ inputType, value });
  };
  return (
    <StInputWrapper>
      <Input
        rows={5}
        value={value}
        onChange={handleChange}
        multiline
        placeholder={locales.text_input}
        className="quote-input"
      />
    </StInputWrapper>
  );
};

export default QuoteInput;
