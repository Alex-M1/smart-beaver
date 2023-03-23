import React from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Option } from '@/constants/commonTypes';
import { colors } from '@/constants/colors';
import FormControl from '@mui/material/FormControl';
import { StSelect } from './styled';

interface Props {
  options: Array<Option>;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Select: React.FC<Props> = ({
  options, value, onChange, placeholder,
}) => {
  const handleChange = (event: SelectChangeEvent) => onChange(event.target.value);
  return (
    <FormControl>
      {/* @ts-ignore */}
      <StSelect size="small" displayEmpty hasValue={value} value={value} defaultValue="" sx={{ bgcolor: colors.white, borderRadius: '100px' }} onChange={handleChange}>
        {placeholder ? <MenuItem value="">{placeholder}</MenuItem> : null}
        {options.map((option) => <MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>)}
      </StSelect>
    </FormControl>
  );
};

export default Select;
