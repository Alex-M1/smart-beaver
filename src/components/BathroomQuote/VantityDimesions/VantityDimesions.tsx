import Img from '@/components/common/Img';
import Input from '@/components/common/Input';
import { locales } from '@/constants/locales';
import { useAppStore } from '@/state/reducer';
import { addInputValue, getInputsValue } from '@/state/selectors';
import React from 'react';
import { StVantityDimesions } from './styled';

const VantityDimesions: React.FC = () => {
  const value = useAppStore(getInputsValue('vanityDimensionsInput'));
  const setValue = useAppStore(addInputValue);

  const handleChange = (value: string) => setValue({ inputType: 'vanityDimensionsInput', value });
  return (
    <StVantityDimesions>
      <p className="small-text bold">{locales.vantity_dimensions}</p>
      <p className="small-text bold">{locales.vantity_dimensions_text}</p>
      <div className="vanity-dimensions">
        <Img className="vanity-dimensions__img" name="vantity_dimensions" alt="vantity dimensions" />
        <p className="small-text bold">{locales.vantity_dimensions_note}</p>
        <div className="vanity-dimensions__input-block">
          <p className="small-text bold">{locales.vantity_dimensions_sizes}</p>
          <Input value={value} onChange={handleChange} borderRadius="0px" className="vanity-dimensions__input" placeholder={locales.text_input} />
        </div>
      </div>
    </StVantityDimesions>
  );
};

export default VantityDimesions;
