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
  h1::after {
    content: '';
    display: block;
    position: relative;
    top:-10px;
    left: 170px;
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
  
  p {
    padding-left: 25px;
    font-size: 15px;
    font-weight: ${FontWeight.bold};
  }

  @media (min-width:768px){
    display: flex;
    align-items: baseline;
    width: fit-content;
    max-width: 400px;
    h1::after {
      top: -10px;
      left: 170px;
    }
    p {
      padding-left: 45px;
      font-size: 15px;
    }
  }

  @media (min-width: 1024px) {
    max-width: 640px;
    h1::after {
      top: -15px;
      left: 260px;
    }
  }

  @media (min-width: 1440px){
    &::after {
      right: 310px;
    }
    p {
      font-size: 30px;
    }
  }
`;
