import Title from '@/components/common/Title';
import { locales } from '@/constants/locales';
import React from 'react';
import Slider from '@/components/common/Slider';
import SlideItem from './SlideItem';

const Portfolio: React.FC = () => {
  const slides = [<SlideItem key="portfolio_slide_1" />];
  return (
    <div className="container">
      <div className="content"><Title text={locales.portfolio} textAlign="right" /></div>
      <Slider slides={slides} />
    </div>
  );
};

export default Portfolio;
