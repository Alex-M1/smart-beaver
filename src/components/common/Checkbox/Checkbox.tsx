import React from 'react';
import CheckBoxMui from '@mui/material/Checkbox';

interface Props {
  checked?: boolean;
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<Props> = ({ checked, onChange, disabled }) => (
  <CheckBoxMui onChange={onChange} checked={checked} disabled={disabled} />
);

export default Checkbox;
