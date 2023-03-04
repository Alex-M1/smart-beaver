import Checkbox from '@/components/common/Checkbox';
import { locales, Locales } from '@/constants/locales';
import { useAppStore } from '@/state/reducer';
import { getCheckBoxesValue, setCheckBoxesValue } from '@/state/selectors';
import { ChBoxesNames, CheckBoxesTypes } from '@/state/types';
import React from 'react';
import { StQuotChBox } from './styled';

interface Props {
  textKey: Locales;
  field: CheckBoxesTypes;
  name: ChBoxesNames;
}

const QuoteCheckBox: React.FC<Props> = ({ textKey, field, name }) => {
  const value = useAppStore(getCheckBoxesValue({ field, name }));
  const setValue = useAppStore(setCheckBoxesValue);

  const handleChange = () => setValue({ field, name });
  return (
    <StQuotChBox>
      <Checkbox checked={value} onChange={handleChange} />
      <span className="small-text">{locales[textKey]}</span>
    </StQuotChBox>
  );
};

export default QuoteCheckBox;
