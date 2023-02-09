import { colors } from '@/constants/colors';
import styled from 'styled-components';

export const StSliderBackground = styled.div`
  display: flex;
  justify-content: right;
  position: relative;
  align-items: center;
  background: ${colors.brownLight};

  .slider-wrapper-main {
    width: 852px
  }
  @media (max-width: 1025px) {
    .slider-wrapper-main {
      width: 700px;
    }
  }  
  @media (max-width: 769px) {
    position: static;
    height:690px;
    width: 100%;
    .slider-wrapper-main {
      position: absolute;
      width: 100%;
    }
    img {
      width: auto;
      height: 461px;
    }
    .carousel-slider{
      padding-bottom: 80px;
    }
    .carousel .control-dots {
      top: 580px;
    }
    .carousel.carousel-slider .control-arrow  {
      top: 580px;
    }
  }  
  @media (max-width: 426px) {
    position: static;
    height:690px;
    width: 100%;
    .slider-wrapper-main {
      position: absolute;
      top: 250px;
      width: 90%;
      left: 50%;
      transform: translatex(-50%);
    }
    img {
      height: 196px;
    }
    .carousel-slider{
      padding-bottom: 80px;
    }
    .carousel .control-dots {
      top: 60px;
    }
    .carousel.carousel-slider .control-arrow  {
      top:310px;
      left:200px;
    }
    .carousel.carousel-slider .control-arrow.control-prev {
      left: 130px; 
      right: auto; 
    }
  }  
  @media (max-width: 376px) {
    .carousel.carousel-slider .control-arrow  {
      top:310px;
      left:180px;
    }
    .carousel.carousel-slider .control-arrow.control-prev {
      left: 110px; 
      right: auto; 
    }
  }
`;
