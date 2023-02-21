import { IconNames } from '@/components/common/Icon/types';
import Img from '@/components/common/Img';
import { locales, Locales } from '@/constants/locales';
import React from 'react';

interface Props {
  itemArray: string[];
  title: string;
}

const FrontStylesItem: React.FC<Props> = ({ itemArray, title }) => (
  <div className="frontstyles-item">
    <p className="frontstyles-item__title">{title}</p>
    <div className="frontstyles-item__items">
      {itemArray.map((el) => (
        <div className="frontstyles-item__example" key={el}>
          <div className="frontstyles-item__img"><Img name={el as IconNames} alt="example" width={200} height={200} /></div>
          <p className="frontstyles-item__text">{locales[el as Locales]}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FrontStylesItem;
