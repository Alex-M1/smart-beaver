import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';

export const StProductsTitle = styled.div`
  position: relative;
  display: inline-block;
  background: url('/icons/title_bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 25px;
  background-position-x: 25px;
  width: 100%;
  &::after {
    content: '';
    display: block;
    position: relative;
    top:-35px;
    right:-165px;
    height: 1px;
    width: 50px;
    background: #000;
  }
  &::before {
    content: '';
    position: absolute;
    height: 31px;
    width: 27px;
    background-color: rgba(84,79,64,.28);
    right:0px;
    top: 10px;
  }
  
  span {
    padding-left: 25px;
    font-size: 15px;
    font-weight: ${FontWeight.bold};
  }

  @media (min-width:768px){
    display: flex;
    align-items: baseline;
    width: fit-content;
    &::after {
      top: 0px;
      right: 180px;
    }
    span {
      padding-left: 45px;
      font-size: 15px;
    }
  }

  @media (min-width: 1440px){
    &::after {
      right: 310px;
    }
    span {
      font-size: 30px;
    }
  }
`;
