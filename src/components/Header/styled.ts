import styled from 'styled-components';
import { colors } from '@/constants/colors';
import { headerHeight } from '@/constants/ui';
import { imgSizeResponsive } from '@/helpers/ui';
import { flexCenter } from '../common/styled/mixins';

export const StHeader = styled.header`
  display: flex;
  background-color: ${colors.brownPrimary};    
  height: ${headerHeight.large}px;
  width: 100%;
  @media (max-width: 769px) {
    height: ${headerHeight.medium}px;
  }   

  @media (max-width: 550px) {
    height: ${headerHeight.small}px;
  }  
  @media print {
    display: none;
  }
`;

export const StNavContainer = styled.div`
  ${flexCenter}
  width: 100%;
  .burger-menu {
    display: none;
  }
  @media (max-width: 550px) {
    justify-content: end;
    margin-right: 20px;

    .navigations {
      display: none;
    }
    .burger-menu {
      display: block;
    }
  }  
`;

export const StLogoContainer = styled.div`
  ${flexCenter}
  background-color: ${colors.white};
  padding: 0 57px;
  ${imgSizeResponsive('.header__logo-img', '100%')}
  .header__logo-img {
    display: inline-block;
  }
  @media (max-width: 1025px) {
    padding: 0 40px;
  }
  @media (max-width: 769px) {
    padding: 0 30px;
  }
  @media (max-width: 550px) {
    padding: 0 20px;
    img {
      width: 39px;
      height: 27px;
    }
  }        
`;
