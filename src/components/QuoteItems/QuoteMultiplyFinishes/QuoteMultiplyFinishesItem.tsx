import Checkbox from '@/components/common/Checkbox';
import { locales } from '@/constants/locales';
import { useAppStore } from '@/state/reducer';
import { getCheckBoxesValue, setCheckBoxesValue } from '@/state/selectors';
import { Finished } from '@/state/types';
import React from 'react';

interface Props {
  name: Finished;
}

const QuoteMultiplyFinishesItem: React.FC<Props> = ({ name }) => {
  const value = useAppStore(getCheckBoxesValue({ field: 'finished', name }));
  const setValue = useAppStore(setCheckBoxesValue);

  const handleChange = () => setValue({ field: 'finished', name });

  return (
    <label key={name}>
      <Checkbox checked={value} onChange={handleChange} />
      <span className="small-text">{locales[name]}</span>
    </label>
  );
};

export default QuoteMultiplyFinishesItem;
