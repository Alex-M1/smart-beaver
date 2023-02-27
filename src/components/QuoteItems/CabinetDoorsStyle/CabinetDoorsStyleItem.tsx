import Checkbox from '@/components/common/Checkbox';
import { IconNames } from '@/components/common/Icon/types';
import Img from '@/components/common/Img';
import { Locales, locales } from '@/constants/locales';
import { useAppStore } from '@/state/reducer';
import { getCheckBoxesValue, setCheckBoxesValue } from '@/state/selectors';
import { CheckBoxesName } from '@/state/types';
import React from 'react';

interface Props {
  itemKey: string;
}

const CabinetDoorsStyleItem: React.FC<Props> = ({ itemKey }) => {
  const value = useAppStore(getCheckBoxesValue({ field: 'doorsStyle', name: itemKey as CheckBoxesName }));
  const changeValue = useAppStore(setCheckBoxesValue);
  const handleChange = () => changeValue({ field: 'doorsStyle', name: itemKey as CheckBoxesName });

  return (
    <div className="cabinet-doors__item">
      <Img className="cabinet-doors__item-img" name={itemKey as IconNames} alt="door item example" />
      <label className="cabinet-doors__item-title">
        <Checkbox checked={value} onChange={handleChange} />
        <span className="small-text">{locales[itemKey as Locales]}</span>
      </label>
    </div>
  );
};

export default CabinetDoorsStyleItem;
