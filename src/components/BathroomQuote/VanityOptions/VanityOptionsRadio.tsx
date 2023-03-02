import { locales } from '@/constants/locales';
import { useAppStore } from '@/state/reducer';
import { getRadioValue, setRadioValue } from '@/state/selectors';
import { RadioTypes } from '@/state/types';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const VanityOptionsRadio: React.FC = () => {
  const value = useAppStore(getRadioValue);
  const setValue = useAppStore(setRadioValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value as RadioTypes);

  return (
    <RadioGroup value={value} row sx={{ justifyContent: 'space-between' }} onChange={handleChange}>
      <FormControlLabel value="flat_panel" control={<Radio />} label={locales.flat_panel_val} />
      <FormControlLabel value="raised_panel" control={<Radio />} label={locales.raised_panel_val} />
    </RadioGroup>
  );
};

export default VanityOptionsRadio;
