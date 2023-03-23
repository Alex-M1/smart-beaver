import Checkbox from '@/components/common/Checkbox';
import { IconNames } from '@/components/common/Icon/types';
import Img from '@/components/common/Img';
import { locales, Locales } from '@/constants/locales';
import { useAppStore } from '@/state/reducer';
import { getCheckBoxesValue, setCheckBoxesValue } from '@/state/selectors';
import { Higle } from '@/state/types';
import React from 'react';

interface Props {
  txt: Locales;
  img: IconNames;
}

const HigleItem: React.FC<Props> = ({ img, txt }) => {
  const value = useAppStore(getCheckBoxesValue({ field: 'higle', name: img as Higle }));
  const setValue = useAppStore(setCheckBoxesValue);

  const handleChange = () => setValue({ field: 'higle', name: img as Higle });

  return (
    <div className="higle__item">
      <Img className="higle__item_img" name={img} alt={img} />
      <label>
        <Checkbox checked={value} onChange={handleChange} />
        <span className="small-text">{locales[txt]}</span>
      </label>
    </div>
  );
};

export default HigleItem;
