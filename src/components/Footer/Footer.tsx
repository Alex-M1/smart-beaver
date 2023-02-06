import React from 'react';
import { locales } from '@/constants/locales';
import { FontWeight } from '@/constants/ui';
import { StFooter } from './styled';
import Icon from '../common/Icon';
import { StFlex, StGrid } from '../common/styled/Block';
import { StSpan } from '../common/styled/Text';
import Link from '../common/Link';

const Footer: React.FC = () => {
  const commonProps = {
    color: 'white' as 'white',
    fontWeight: FontWeight.medium,
    fontSize: '16px',
  };
  return (
    <StFooter>
      <StGrid className="container" padding="54px 73px 40px" columns="1fr 1fr 1fr">
        <StFlex flexDirection="column">
          <Icon alt="logo" name="white_logo" ext="png" />
          <StSpan margin="20px 0" {...commonProps}>{locales.footer_description}</StSpan>
          <StSpan marginBottom="20px" {...commonProps}>{locales.footer_address}</StSpan>
          <StSpan {...commonProps}>{locales.phone}</StSpan>
        </StFlex>
        <StFlex flexDirection="column" jc="space-between" justifySelf="center">
          <StSpan color="white" fontSize="24px" fontWeight={FontWeight.bold}>{locales.menu}</StSpan>
          <Link href="products" {...commonProps}>{locales.products}</Link>
          <Link href="about_us" {...commonProps}>{locales.about_us}</Link>
          <Link href="faq" {...commonProps}>{locales.faq}</Link>
          <Link href="contacts" {...commonProps}>{locales.contacts}</Link>
        </StFlex>
        <StFlex flexDirection="column" justifySelf="end">
          <StSpan color="white" fontSize="24px" fontWeight={FontWeight.bold}>{locales.stay_connected}</StSpan>
          <Link target="_blank" margin="20px 0" href="facebook" {...commonProps}>{locales.facebook}</Link>
          <Link href="instagram" {...commonProps}>{locales.instagram}</Link>
        </StFlex>
      </StGrid>
    </StFooter>
  );
};

export default Footer;
