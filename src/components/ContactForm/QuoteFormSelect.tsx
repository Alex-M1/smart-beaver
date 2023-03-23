import React from 'react';
import { locales } from '@/constants/locales';
import { states } from '@/constants/states';
import { useAppStore } from '@/state/reducer';
import { getQuoteFormInputs, setQuoteFormInputs } from '@/state/selectors';
import Select from '../common/Select';

const QuoteFormSelect: React.FC = () => {
  const value = useAppStore(getQuoteFormInputs('state'));
  const setValue = useAppStore(setQuoteFormInputs);

  const handleSelectChange = (value: string) => {
    setValue({ field: 'state', value: states.find((state) => state.value === value)?.value || '' });
  };

  return (
    <Select
      value={value}
      options={states}
      onChange={handleSelectChange}
      placeholder={locales.quote_form_state_plh}
    />
  );
};

export default QuoteFormSelect;
