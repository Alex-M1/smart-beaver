import Title from '@/components/common/Title';
import { locales } from '@/constants/locales';
import React from 'react';
import Slider from '@/components/common/Slider';
import SlideItem from './SlideItem';

interface Props {

}

const Portfolio: React.FC<Props> = ({ }) => {
  const slides = [<SlideItem />];
  return (
    <div className="container">
      <Title text={locales.portfolio} />
      <Slider slides={slides} />
    </div>
  );
};

export default Portfolio;
