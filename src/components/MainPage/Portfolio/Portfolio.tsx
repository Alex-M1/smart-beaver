import Title from '@/components/common/Title';
import { locales } from '@/constants/locales';
import React from 'react';
import Slider from '@/components/common/Slider';
import SlideItem from './SlideItem';
import { SliderWrapper } from './styled';

const Portfolio: React.FC = () => {
  const slides = [
    <SlideItem key="portfolio_slide_1" index={1} />,
    <SlideItem key="portfolio_slide_2" index={2} />,
    <SlideItem key="portfolio_slide_3" index={3} />,
  ];
  return (
    <div className="container">
      <div className="content"><Title text={locales.portfolio} textAlign="right" /></div>
      <SliderWrapper>
        <Slider slides={slides} />
      </SliderWrapper>
    </div>
  );
};

export default Portfolio;
