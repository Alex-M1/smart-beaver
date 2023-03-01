import React from 'react';
import Img from '@/components/common/Img';
import { locales } from '@/constants/locales';
import { StQuoteMultiplyFinishes } from './styled';
import { multiplyFinishesCheckboxes } from './utils';
import QuoteMultiplyFinishesItem from './QuoteMultiplyFinishesItem';

interface Props {

}

const QuoteMultiplyFinishes: React.FC<Props> = ({ }) => (
  <StQuoteMultiplyFinishes>
    <p className="small-text bold">{locales.quote_finishes}</p>
    <div className="multiply-finishes ">
      <Img className="multiply-finishes__img" name="quote_multiply_finishes" alt="quote multiply finishes" />
      <div className="multiply-finishes__label">
        {multiplyFinishesCheckboxes.map((el) => (
          <QuoteMultiplyFinishesItem name={el} />
        ))}
      </div>
    </div>
  </StQuoteMultiplyFinishes>
);

export default QuoteMultiplyFinishes;
