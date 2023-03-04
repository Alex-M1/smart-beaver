import Img from '@/components/common/Img';
import QuoteInput from '@/components/QuoteItems/QuoteInput';
import React from 'react';
import { ItemData, setBoxItemData } from './utils';

interface Props {
  itemData: ItemData;
}

const BoxItem: React.FC<Props> = ({ itemData }) => {
  const { img, input, secondClassName } = setBoxItemData(itemData);
  return (
    <div className={`box__item ${secondClassName}`}>
      <Img className="box__item_img" name={img} alt="example" />
      <QuoteInput inputType={input} />
    </div>
  );
};

export default BoxItem;
