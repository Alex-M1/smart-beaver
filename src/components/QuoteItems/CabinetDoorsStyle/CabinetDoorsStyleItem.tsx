import { Tooltip } from '@mui/material';
import React from 'react';
import Checkbox from '@/components/common/Checkbox';
import { IconNames } from '@/components/common/Icon/types';
import Img from '@/components/common/Img';
import { Locales, locales } from '@/constants/locales';
import { useAppStore } from '@/state/reducer';
import { checkBoxesQuantityError, getCheckBoxesValue, setCheckBoxesValue } from '@/state/selectors';
import { CheckBoxesName } from '@/state/types';

interface Props {
  itemKey: string;
}

const CabinetDoorsStyleItem: React.FC<Props> = ({ itemKey }) => {
  const [openTooltip, setOpenTooltip] = React.useState(false);
  const value = useAppStore(getCheckBoxesValue({ field: 'doorsStyle', name: itemKey as CheckBoxesName }));
  const changeValue = useAppStore(setCheckBoxesValue);
  const error = useAppStore(checkBoxesQuantityError('doorsStyle'));

  const handleChange = () => {
    if (!value && error) {
      setOpenTooltip(true);
      setTimeout(() => setOpenTooltip(false), 1000);
      return;
    }
    changeValue({ field: 'doorsStyle', name: itemKey as CheckBoxesName });
  };

  return (
    <div className="cabinet-doors__item">
      <Img className="cabinet-doors__item-img" name={itemKey as IconNames} alt="door item example" />
      <Tooltip
        arrow
        title={locales.many_checkbox}
        open={openTooltip}
        disableFocusListener
        disableHoverListener
        disableTouchListener
      >
        <label className="cabinet-doors__item-title">
          <Checkbox checked={value} onChange={handleChange} />
          <span className="small-text">{locales[itemKey as Locales]}</span>
        </label>
      </Tooltip>
    </div>
  );
};

export default CabinetDoorsStyleItem;
