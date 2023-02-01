import Link from 'next/link';
import React from 'react';
import { locales } from '@/constants/locales';
import { StNav } from './styled';
import NavigationButton from '../NavigationButton';

const Navbar: React.FC = () => (
  <StNav>
    <NavigationButton />
    <Link href="/about_us">{locales.about_us}</Link>
    <Link href="/faq">{locales.faq}</Link>
    <Link href="/contacts">{locales.contacts}</Link>
  </StNav>
);

export default Navbar;
