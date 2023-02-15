import Icon from '@/components/common/Icon';
import { locales } from '@/constants/locales';
import React from 'react';
import { StStandartFeatures } from './styled';
import { componentNames } from './utils';

interface Props {
  isBathroom?: boolean;
}

const StandartFeatures: React.FC<Props> = ({ isBathroom }) => (
  <StStandartFeatures>
    <p className="st-features__title">{isBathroom ? locales.bathroom_standart_features_title : locales.st_features_text}</p>
    <div className="st-features__content">
      {componentNames.map((name) => (
        isBathroom && name === 'top_row_drawers'
          ? null
          : (
            <div className="st-features__item" key={name}>
              <Icon fill className="st-features__item-icon" name={name} alt={name} ext="png" />
              <p className="st-features__item-text">{locales[name]}</p>
            </div>
          )
      ))}
    </div>
  </StStandartFeatures>
);

export default StandartFeatures;
