import Img from '@/components/common/Img';
import Input from '@/components/common/Input';
import { locales } from '@/constants/locales';
import { useAppStore } from '@/state/reducer';
import { addInputValue, getInputsValue } from '@/state/selectors';
import React from 'react';
import VanityOptionsRadio from './VanityOptionsRadio';

interface Props {
  isFirst?: boolean;
}

const VanityOptionsItem: React.FC<Props> = ({ isFirst }) => {
  const value = useAppStore(getInputsValue(isFirst ? 'vantitySideDrawersInput' : 'vantityFinishedSideInput'));
  const setValue = useAppStore(addInputValue);
  const handleChange = (value: string) => {
    setValue({ inputType: isFirst ? 'vantitySideDrawersInput' : 'vantityFinishedSideInput', value });
  };
  return (
    <div className="vanity-options__item">
      <div className="vanity-options__item_img-block">
        <Img className="vanity-options__item_img" name={isFirst ? 'vanity_options_img1' : 'vanity_options_img2'} alt="example" />
        {!isFirst && <VanityOptionsRadio />}
      </div>
      <div className="vanity-options__item_text-block">
        <p className="bold small-text">{locales.side_drawers}</p>
        {isFirst && <p className="bold small-text">{locales.vanity_options_note}</p>}
        <p className="bold small-text">{isFirst ? locales.vanity_options_input_descr : locales.vanity_options_input_descr2}</p>
        <div className="vanity-options__item_input-block">
          <span className="bold small-text">{locales.qty}</span>
          <Input value={value} onChange={handleChange} type="number" borderRadius="0px" className="vanity-options__item_input" placeholder="0" />
        </div>
        {!isFirst && <p className="bold small-text">{locales.vabity_options_text}</p>}
      </div>
    </div>
  );
};

export default VanityOptionsItem;
