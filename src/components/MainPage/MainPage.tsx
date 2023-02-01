import React, { useRef } from 'react';
import Header from '../Header';
import SliderBlock from './SliderBlock';
import Advantages from './Advantages';

interface Props {

}

const MainPage: React.FC<Props> = () => {
  const iconWrapper = useRef<HTMLDivElement>(null);

  return (
    <main>
      <Header iconRef={iconWrapper} />
      <SliderBlock iconRef={iconWrapper} />
      <Advantages />
    </main>
  );
};

export default MainPage;
