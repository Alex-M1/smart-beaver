import React from 'react';
import { locales } from '@/constants/locales';
import { FontWeight } from '@/constants/ui';
import { StFooter } from './styled';
import Icon from '../common/Icon';
import { StFlex, StGrid } from '../common/styled/Block';
import { StSpan } from '../common/styled/Text';

const Footer: React.FC = () => (
  <StFooter>
    <StGrid className="container" padding="54px 73px 40px" columns="1fr 1fr 1fr">
      <StFlex flexDirection="column">
        <Icon alt="logo" name="white_logo" ext="png" />
        <StSpan color="white" margin="20px 0" fontWeight={FontWeight.medium} fontSize="16px">{locales.footer_description}</StSpan>
        <StSpan color="white" marginBottom="20px" fontWeight={FontWeight.medium} fontSize="16px">{locales.footer_address}</StSpan>
        <StSpan color="white" fontWeight={FontWeight.medium} fontSize="16px">{locales.phone}</StSpan>
      </StFlex>

    </StGrid>
  </StFooter>
);

export default Footer;
