import Title from '@/components/common/Title';
import { StFlex } from '@/components/common/styled/Block';
import { locales } from '@/constants/locales';
import React from 'react';
import ReviewItem from './ReviewItem';
import { ReviewContainer } from './styled';

const Reviews: React.FC = () => (
  <div className="container content">
    <ReviewContainer>
      <Title text={locales.reviews} />
      <div className="rewiew__content-wrap">
        <StFlex flexDirection="column" padding="0 10px">
          <span className="rewiew__title">{locales.reviews_header}</span>
          <span className="rewiew__text">{locales.reviews_text}</span>
        </StFlex>
        <StFlex className="rewiew__items">
          <ReviewItem name={locales.review_name_1} review={locales.review_text_1} icon="review_icon_1" />
          <ReviewItem name={locales.review_name_2} review={locales.review_text_2} icon="review_icon_2" />
        </StFlex>
      </div>
    </ReviewContainer>
  </div>

);

export default Reviews;
