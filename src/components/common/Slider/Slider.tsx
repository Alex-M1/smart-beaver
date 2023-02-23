import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { ReactChild } from 'react';
import { StCarousel } from './styled';

interface Props {
  slides: Array<ReactChild>
  width?: string;
}

const Slider: React.FC<Props> = ({ slides, width }) => {
  const settings = {
    width,
    infiniteLoop: true,
    showStatus: false,
    showThumbs: false,
    swipeable: true,
    preventMovementUntilSwipeScrollTolerance: true,
  };
  return (
    <StCarousel {...settings}>
      {slides.map((slide) => slide)}
    </StCarousel>
  );
};

export default Slider;
