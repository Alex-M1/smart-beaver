import React from 'react';
import { StInput } from './styled';

interface Props {
  type: 'text' | 'password' | 'email'
  value: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  margin?: string;
}

const Input: React.FC<Props> = ({
  type = 'text',
  value,
  margin,
  onChange,
  placeholder,
}) => <StInput value={value} type={type} onChange={onChange} placeholder={placeholder} margin={margin} />;

export default Input;
