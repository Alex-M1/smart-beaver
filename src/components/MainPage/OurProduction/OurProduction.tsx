import Icon from '@/components/common/Icon';
import Title from '@/components/common/Title';
import { StDiv, StFlex } from '@/components/common/styled/Block';
import { locales } from '@/constants/locales';
import React from 'react';

const OurProduction: React.FC = () => (
  <StDiv padding="146px 81px 0" className="container">
    <Title text={locales.our_production} textAlign="right" posX="55px" />
    <StDiv padding="77px 0 0 0">
      <StFlex jc="space-between" marginBottom="20px">
        <Icon alt="production example 1" name="our_producrtion_1" ext="png" />
        <Icon alt="production example 2" name="our_producrtion_2" ext="png" />
      </StFlex>
      <StFlex jc="space-between">
        <Icon alt="production example 3" name="our_producrtion_3" ext="png" />
        <Icon alt="production example 4" name="our_producrtion_4" ext="png" />
      </StFlex>
    </StDiv>
  </StDiv>
);

export default OurProduction;
