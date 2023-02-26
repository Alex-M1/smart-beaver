import React, { ChangeEvent } from 'react';
import { colors } from '@/constants/colors';
import {
  INPUT_VARIANTS, InputType, ContentFields,
} from './types';
import { StInput } from './styled';

interface Props extends ContentFields {
  rows?: number;
  value: string;
  type?: InputType;
  width?: string;
  margin?: string;
  focused?: boolean;
  isError?: boolean;
  variant?: INPUT_VARIANTS;
  onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  multiline?: boolean;
}

const Input: React.FC<Props> = ({
  rows = 1,
  type = 'text',
  value,
  title,
  width,
  margin,
  variant = INPUT_VARIANTS.outlined,
  focused,
  isError,
  disabled,
  onChange,
  multiline,
  className,
  helperText,
  placeholder,
}) => {
  const sxProps = { width, margin, borderRadius: '100px' };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, e);
  };

  return (
    <StInput
      sx={{ ...sxProps, bgcolor: colors.white }}
      type={type}
      value={value}
      error={isError}
      focused={focused}
      title={title}
      variant={variant}
      disabled={disabled}
      multiline={multiline}
      onChange={handleChange}
      helperText={helperText}
      placeholder={placeholder}
      className={className}
      rows={rows}
    />
  );
};

export default Input;
