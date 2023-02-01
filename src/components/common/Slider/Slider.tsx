import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import Icon from '../Icon';
import { StCarousel } from './styled';

interface Props {

}

const Slider: React.FC<Props> = () => {
  const settings = {
    width: '852px',
    dynamicHeight: true,
    infiniteLoop: true,
    showStatus: false,
    showThumbs: false,
  };
  return (
    <StCarousel {...settings}>
      <div><Icon alt="example-1" name="slider_img1" width={852} height={576} /></div>
      <div><Icon alt="example-2" name="slider_img2" width={852} height={576} /></div>
      <div><Icon alt="example-3" name="slider_img3" width={852} height={576} /></div>
      <div><Icon alt="example-4" name="slider_img4" width={852} height={576} /></div>
    </StCarousel>
  );
};

export default Slider;
