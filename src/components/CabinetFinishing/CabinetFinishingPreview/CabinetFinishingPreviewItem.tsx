import { IconNames } from '@/components/common/Icon/types';
import Img from '@/components/common/Img';
import { Locales, locales } from '@/constants/locales';
import React from 'react';

interface Props {
  itemKey: string;
}

const CabinetFinishingPreviewItem: React.FC<Props> = ({ itemKey }) => (
  <div className="cfp__item">
    <Img name={`cf_preview_${itemKey}_img` as IconNames} alt={`${locales[itemKey as Locales]} example`} width={108} height={104} />
    <div>
      <p className="cfp__item-title">{locales[`cf_preview_${itemKey}_title` as Locales]}</p>
      <p className="cfp__item-text">{locales[`cf_preview_${itemKey}_text` as Locales]}</p>
    </div>
  </div>
);

export default CabinetFinishingPreviewItem;
