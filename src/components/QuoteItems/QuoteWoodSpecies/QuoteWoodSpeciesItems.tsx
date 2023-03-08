import React from 'react';
import { IconNames } from '@/components/common/Icon/types';
import Img from '@/components/common/Img';
import Checkbox from '@/components/common/Checkbox';
import { Locales, locales } from '@/constants/locales';
import { checkBoxesQuantityError, getCheckBoxesValue, setCheckBoxesValue } from '@/state/selectors';
import { useAppStore } from '@/state/reducer';
import { WoodSpecies } from '@/state/types';
import { Tooltip } from '@mui/material';

interface Props {
  itemKey: string;
  isPoplar?: boolean;
}

const QuoteWoodSpeciesItems: React.FC<Props> = ({ itemKey, isPoplar }) => {
  const key = isPoplar ? 'wood_species_poplar2' : itemKey as WoodSpecies;
  const [openTooltip, setOpenTooltip] = React.useState(false);
  const checked = useAppStore(getCheckBoxesValue({ field: 'woodSpecies', name: key }));
  const error = useAppStore(checkBoxesQuantityError('woodSpecies'));

  const setValue = useAppStore(setCheckBoxesValue);
  const handleChange = () => {
    if (!checked && error) {
      setOpenTooltip(true);
      setTimeout(() => setOpenTooltip(false), 1000);
      return;
    }
    setValue({ field: 'woodSpecies', name: key });
  };

  return (
    <div className="quote-species__item">
      <Img className="quote-species__item-img" name={itemKey as IconNames} alt="example" />
      <Tooltip
        arrow
        title={locales.many_checkbox}
        open={openTooltip}
        disableFocusListener
        disableHoverListener
        disableTouchListener
      >
        <label className="quote-species__item-checkbox">
          <Checkbox checked={checked} onChange={handleChange} />
          <span className="small-text">{locales[itemKey as Locales]}</span>
        </label>
      </Tooltip>
    </div>
  );
};

export default QuoteWoodSpeciesItems;
