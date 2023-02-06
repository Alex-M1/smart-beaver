import React, { useRef } from 'react';
import SliderBlock from './SliderBlock';
import Advantages from './Advantages';
import BlockWithPhoto from './BlockWithPhoto';
import Steps from './Steps';
import Portfolio from './Portfolio';
import PhotoBlock from './PhotoBlock';
import ContactForm from '../ContactForm';
import OurProduction from './OurProduction';
import Reviews from './Rewiews';
import Template from '../common/Template';

const MainPage: React.FC = () => {
  const iconWrapper = useRef<HTMLDivElement>(null);

  return (
    <Template iconRef={iconWrapper}>
      <main>
        {/* <SliderBlock iconRef={iconWrapper} />
        <Advantages />
        <BlockWithPhoto />
        <Steps />
        <Portfolio />
        <PhotoBlock />
        <ContactForm />
        <OurProduction />
        <Reviews /> */}
      </main>
    </Template>
  );
};

export default MainPage;
