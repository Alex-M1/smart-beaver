import React from 'react';
import Img from '@/components/common/Img';
import QuoteInput from '../../QuoteItems/QuoteInput';
import { StCabinetItem } from './styled';
import { CabinetDataType, getCabinetItemData } from './utils';

interface Props {
  type: CabinetDataType;
}

const CabinetItem: React.FC<Props> = ({ type }) => {
  const {
    alt, img, inputType, text, title, pantry,
  } = getCabinetItemData(type);
  return (
    <StCabinetItem className={pantry}>
      <p className={`cabinet-item__text bold small-text ${pantry}`}>{title}</p>
      <Img className={`cabinet-item__img ${pantry}`} name={img} alt={alt} />
      <div className="cabinet-item__inputs-block">
        <p className={`cabinet-item__text bold small-text ${pantry}`}>{text}</p>
        <QuoteInput inputType={inputType} />
      </div>
    </StCabinetItem>
  );
};

export default CabinetItem;
