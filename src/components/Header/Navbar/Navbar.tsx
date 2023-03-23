import React from 'react';
import { locales } from '@/constants/locales';
import Link from '@/components/common/Link';
import { StNav } from './styled';
import NavigationButton from '../NavigationButton';

const Navbar: React.FC = () => (
  <StNav className="navigations">
    <NavigationButton />
    <Link href="about_us">{locales.about_us}</Link>
    <Link href="faq">{locales.faq}</Link>
    <Link href="contact">{locales.contact}</Link>
  </StNav>
);

export default Navbar;
