import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { colors } from '@/constants/colors';

export const StCarousel = styled(Carousel)`
  .carousel-slider{
    padding-top: 100px;
  }
  .carousel.carousel-slider .control-arrow {
    top: 20px;
    background: ${colors.warning};
    width: 48px;
    height: 48px;
    border-radius: 100%;
    opacity: 1;
  }
  .carousel.carousel-slider .control-arrow.control-next {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    right: 50px;
    &::before {
      position: absolute;
      margin: 0;
      border-left: none;
      font-size: 20px;
      content: '❯';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .carousel .control-arrow:before, .carousel.carousel-slider .control-arrow:before {
    border-top:none; 
    border-bottom:none;
  }
  .carousel.carousel-slider .control-arrow.control-prev {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    right: 130px;
    left: auto;
    background: ${colors.white};
      &::before {
        position: absolute;
        border-right: none;
        font-size: 20px;
        color:${colors.warning};
        margin: 0;
        content: '❮';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
  }
  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid ${colors.warning};
  }
  .thumbs-wrapper {
    display: none;
  }
  .carousel .control-dots {
    top: 30px;
    bottom: auto;
    .dot {
      box-shadow: none;
      background:  ${colors.white};
      opacity: 1;
    }
    .dot.selected{
      box-shadow: none;
      background:  ${colors.warning};
      position: relative;
      &::before {
        content: '';
        width: 16px;
        height: 16px;
        border-radius: 100%;
        border: 1px solid ${colors.warning};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
