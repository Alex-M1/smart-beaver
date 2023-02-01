import React, { RefObject } from 'react';
import { colors } from '@/constants/colors';
import Icon from '../common/Icon';
import { StFlex } from '../common/styled/Block';
import { StHeader } from './styled';
import Navbar from './Navbar';

interface Props {
  iconRef?: RefObject<HTMLDivElement>;
}

const Header: React.FC<Props> = ({ iconRef }) => (
  <StHeader>
    <StFlex className="container">
      <StFlex center bgColor={colors.white} padding="0 57px" ref={iconRef}>
        <Icon alt="logo" name="logo" ext="png" />
      </StFlex>
      <StFlex center width="100%">
        <Navbar />
      </StFlex>
    </StFlex>
  </StHeader>
);

export default Header;
