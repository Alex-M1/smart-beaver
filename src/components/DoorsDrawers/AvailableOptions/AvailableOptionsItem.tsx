import { IconNames } from '@/components/common/Icon/types';
import Img from '@/components/common/Img';
import { locales, Locales } from '@/constants/locales';
import React from 'react';

interface Props {
  text: Locales;
  title: Locales;
  imgName: IconNames;
}

const AvailableOptionsItem: React.FC<Props> = ({ imgName, text, title }) => (
  <div className="available-options-item">
    <p className="available-options-item__title">{locales[title]}</p>
    <div className="available-options-item__img"><Img name={imgName} alt="available option example" width={300} height={220} /></div>
    <p className="available-options-item__text">{locales[text]}</p>
  </div>
);

export default AvailableOptionsItem;
