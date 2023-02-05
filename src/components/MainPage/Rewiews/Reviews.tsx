import Title from '@/components/common/Title';
import { StDiv, StFlex, StGrid } from '@/components/common/styled/Block';
import { StSpan } from '@/components/common/styled/Text';
import { locales } from '@/constants/locales';
import React from 'react';
import ReviewItem from './ReviewItem';

const Reviews: React.FC = () => (
  <StDiv className="container" padding="100px 80px 30px">
    <Title text={locales.reviews} />
    <StGrid columns="1fr 2fr" margin="50px 0 0 0" gap="100px">
      <StFlex flexDirection="column" padding="0 10px">
        <StSpan fontSize="40px" color="darkGray">{locales.reviews_header}</StSpan>
        <StSpan fontSize="16px" color="darkGray">{locales.reviews_text}</StSpan>
      </StFlex>
      <StFlex jc="space-evenly">
        <ReviewItem name={locales.review_name_1} review={locales.review_text_1} icon="review_icon_1" />
        <ReviewItem name={locales.review_name_2} review={locales.review_text_2} icon="review_icon_2" />
      </StFlex>
    </StGrid>
  </StDiv>
);

export default Reviews;
