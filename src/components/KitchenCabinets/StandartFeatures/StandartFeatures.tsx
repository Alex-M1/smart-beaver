import Icon from '@/components/common/Icon';
import { locales } from '@/constants/locales';
import React from 'react';
import { StStandartFeatures } from './styled';
import { componentNames } from './utils';

const StandartFeatures: React.FC = () => (
  <StStandartFeatures>
    <p className="st-features__title">{locales.st_features_text}</p>
    <div className="st-features__content">
      {componentNames.map((name) => (
        <div className="st-features__item" key={name}>
          <Icon fill className="st-features__item-icon" name={name} alt={name} ext="png" />
          <p className="st-features__item-text">{locales[name]}</p>
        </div>
      ))}
    </div>
  </StStandartFeatures>
);

export default StandartFeatures;
