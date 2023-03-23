import Img from '@/components/common/Img';
import React from 'react';
import { checkData } from './utils';

interface Props {
  type: 'base' | 'wall';
}

const CornerCabinetsItem: React.FC<Props> = ({ type }) => {
  const { alt, img, text } = checkData(type);
  return (
    <div className="corner-cabinets__item">
      <p className="bold small-text ws-pre-line">{text}</p>
      <Img className="corner-cabinets__img" name={img} alt={alt} />
    </div>
  );
};

export default CornerCabinetsItem;
