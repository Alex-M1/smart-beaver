import React from 'react';
import { locales } from '@/constants/locales';
import Link from '@/components/common/Link';
import { StNav } from './styled';
import NavigationButton from '../NavigationButton';

const Navbar: React.FC = () => {
  const linkProps = {
    fontSize: '16px',
    margin: '0 218px 0 0',
  };
  return (
    <StNav>
      <NavigationButton />
      <Link {...linkProps} href="about_us">{locales.about_us}</Link>
      <Link {...linkProps} href="faq">{locales.faq}</Link>
      <Link {...linkProps} href="contacts">{locales.contacts}</Link>
    </StNav>
  );
};

export default Navbar;
