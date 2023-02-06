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
    right: 50px;
  }
  .carousel.carousel-slider .control-arrow.control-prev {
    right: 130px;
    left: auto;
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
        width: 15px;
        height: 15px;
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
