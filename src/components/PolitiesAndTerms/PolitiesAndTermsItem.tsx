import { locales, Locales } from '@/constants/locales';
import React from 'react';
import SmallTitle from '../common/SmallTitle';

interface Props {
  titleKey: Locales;
  textKey: Locales;
}

const PolitiesAndTermsItem: React.FC<Props> = ({ textKey, titleKey }) => (
  <div className="pt__item">
    <SmallTitle titleKey={titleKey} />
    <p className="pt__item-text">{locales[textKey]}</p>
  </div>
);

export default PolitiesAndTermsItem;
