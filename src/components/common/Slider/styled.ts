import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

export const StCarousel = styled(Carousel)`
  .carousel-slider{
    padding-top: 100px;
  }
  .carousel.carousel-slider .control-arrow {
    top: 20px;
    background: orange;
    width: 48px;
    height: 48px;
    border-radius: 100%;
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
      box-shadow: 1px 1px 2px rgb(255 165 0 / 90%);
      background: rgb(255 165 0);
    }
  }
`;
