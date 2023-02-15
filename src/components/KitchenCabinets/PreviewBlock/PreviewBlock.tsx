import Icon from '@/components/common/Icon';
import Recipe from '@/components/ProductsComponents/Recipe';
import { locales } from '@/constants/locales';
import React from 'react';
import { StPreview } from './styled';

const PreviewBlock: React.FC = () => (
  <StPreview className="preview">
    <div className="preview__first-part">
      <div className="preview__icon-container">
        <Icon className="preview__icon" name="kitchen_cabinets" alt="kitchen_cabinets" ext="png" />
      </div>
      <p className="preview__description">{locales.kitchen_cabinet_descr}</p>
    </div>
    <div className="preview__second-part">
      <Recipe />
      <div>
        <p className="preview__tagline">{locales.kitchen_cabinet_tagline}</p>
        <p className="preview__end">{locales.kitchen_cabinet_end}</p>
      </div>
    </div>

  </StPreview>
);

export default PreviewBlock;
