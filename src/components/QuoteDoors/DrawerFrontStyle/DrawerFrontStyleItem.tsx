import Checkbox from '@/components/common/Checkbox';
import { IconNames } from '@/components/common/Icon/types';
import Img from '@/components/common/Img';
import { useAppStore } from '@/state/reducer';
import { getCheckBoxesValue, setCheckBoxesValue } from '@/state/selectors';
import { DrawerFronts } from '@/state/types';
import React from 'react';

interface Props {
  txt: string;
  img: IconNames;
  name: DrawerFronts;
}

const DrawerFrontStyleItem: React.FC<Props> = ({ img, name, txt }) => {
  const value = useAppStore(getCheckBoxesValue({ field: 'drawerFronts', name }));
  const setValue = useAppStore(setCheckBoxesValue);

  const handleChange = () => setValue({ field: 'doorsStyle', name });

  return (
    <div className="drawer-fronts__item">
      <Img className="drawer-fronts__item_img" name={img} alt={`${txt} example`} />
      <label>
        <Checkbox onChange={handleChange} checked={value} />
        <span className="small-text">{txt}</span>
      </label>
    </div>
  );
};

export default DrawerFrontStyleItem;
