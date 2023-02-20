import Checkbox from '@/components/common/Checkbox';
import { IconNames } from '@/components/common/Icon/types';
import Img from '@/components/common/Img';
import { Locales, locales } from '@/constants/locales';
import React from 'react';
import { Props } from './utils';

const WoodeSpeciesExamplesItem: React.FC<Props> = ({
  itemKey,
  clearCoat,
  stainAndClearCoat,
  painted,
}) => (
  <div className="ws-example__item">
    <div className="ws-example__item-img">
      <Img name={itemKey as IconNames} alt="example" />
    </div>
    <p className="ws-example__item-name">{locales[itemKey as Locales]}</p>
    <p className="ws-example__item-text">{locales[`${itemKey}_text` as Locales]}</p>
    <div className="ws-example__item-checkboxes">
      <p className="ws-example__item-checkboxes-title">{locales.recommended_finishes}</p>
      <div>
        <Checkbox disabled checked={clearCoat} />
        <span className="ws-example__item-checkboxes-text">{locales.clear_coat}</span>
      </div>
      <div>
        <Checkbox disabled checked={stainAndClearCoat} />
        <span className="ws-example__item-checkboxes-text">{locales.stain_and_clear_coat}</span>
      </div>
      <div>
        <Checkbox disabled checked={painted} />
        <span className="ws-example__item-checkboxes-text">{locales.painted}</span>
      </div>
    </div>
  </div>
);

export default WoodeSpeciesExamplesItem;
