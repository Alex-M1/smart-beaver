import React from 'react';
import Img from '@/components/common/Img';
import { Locales, locales } from '@/constants/locales';
import { StQuoteMultiplyFinishes } from './styled';
import { multiplyFinishesCheckboxes } from './utils';
import QuoteMultiplyFinishesItem from './QuoteMultiplyFinishesItem';

interface Props {
  title: Locales;
}

const QuoteMultiplyFinishes: React.FC<Props> = ({ title }) => (
  <StQuoteMultiplyFinishes>
    <p className="small-text bold">{locales[title]}</p>
    <div className="multiply-finishes ">
      <Img className="multiply-finishes__img" name="quote_multiply_finishes" alt="quote multiply finishes" />
      <div className="multiply-finishes__label">
        {multiplyFinishesCheckboxes.map((el) => (
          <QuoteMultiplyFinishesItem key={el} name={el} />
        ))}
      </div>
    </div>
  </StQuoteMultiplyFinishes>
);

export default QuoteMultiplyFinishes;
