import Icon from '@/components/common/Icon';
import { StFlex, StGrid } from '@/components/common/styled/Block';
import { StSpan } from '@/components/common/styled/Text';
import { colors } from '@/constants/colors';
import { locales } from '@/constants/locales';
import { FontWeight } from '@/constants/ui';
import React from 'react';

interface Props {

}

const SlideItem: React.FC<Props> = ({ }) => (
  <StGrid columns="3fr 1fr" bgColor={colors.brownLight} padding="36px 40px">
    <StFlex ai="center">
      <StSpan textAlign="left" padding="0 60px 0 0" whiteSpace="pre-wrap" fontSize="18px" color="white" fontWeight={FontWeight.bold} lineHeight="30px">{locales.portfolio_slide_text_1}</StSpan>
    </StFlex>
    <StFlex flexDirection="column">
      <StFlex>
        <Icon name="portfolio_slide_1_1" alt="" ext="png" />
        <Icon name="portfolio_slide_1_2" alt="" ext="png" />
      </StFlex>
      <Icon name="portfolio_slide_1_3" alt="" ext="png" />
      <Icon name="portfolio_slide_1_4" alt="" ext="png" />
    </StFlex>
  </StGrid>
);

export default SlideItem;
