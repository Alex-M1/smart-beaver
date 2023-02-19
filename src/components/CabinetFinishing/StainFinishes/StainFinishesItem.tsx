import Img from '@/components/common/Img';
import React from 'react';
import { locales } from '@/constants/locales';
import { ItemsType } from './utils';

interface Props {
  title: string;
  items: ItemsType;
}

const StainFinishesItem: React.FC<Props> = ({ items, title }) => {
  const isGlazeFinishes = title === locales.paint_glaze_finishes_title;
  return (
    <div className="stain-finishes__examples">
      <p className="stain-finishes__examples-title">{title}</p>
      {isGlazeFinishes ? <p className="paint_glaze_finishes_text">{locales.paint_glaze_finishes_text}</p> : null}
      <div className={`stain-finishes__examples-items ${isGlazeFinishes ? 'glaze' : ''}`}>
        {items.map((item) => (
          <div className="stain-finishes__examples-item ">
            <Img name={item.image} alt={`${item.text} color example`} width={106} height={106} />
            <p className="stain-finishes__examples-item-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StainFinishesItem;
