import React, { RefObject } from 'react';
import Link from 'next/link';
import Icon from '../common/Icon';
import { StFlex } from '../common/styled/Block';
import { StHeader, StLogoContainer, StNavContainer } from './styled';
import Navbar from './Navbar';
import Burger from './Burger';

interface Props {
  iconRef?: RefObject<HTMLDivElement>;
}

const Header: React.FC<Props> = ({ iconRef }) => (
  <StHeader>
    <StFlex className="container">
      <StLogoContainer ref={iconRef}>
        <Link href="/"><Icon fill alt="logo" name="logo" ext="png" /></Link>
      </StLogoContainer>
      <StNavContainer>
        <Burger />
        <Navbar />
      </StNavContainer>
    </StFlex>
  </StHeader>
);

export default Header;
