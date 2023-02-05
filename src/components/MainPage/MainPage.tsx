import React, { useRef } from 'react';
import Header from '../Header';
import SliderBlock from './SliderBlock';
import Advantages from './Advantages';
import BlockWithPhoto from './BlockWithPhoto';
import Steps from './Steps';
import Portfolio from './Portfolio';
import PhotoBlock from './PhotoBlock';
import ContactForm from '../common/ContactForm';
import OurProduction from './OurProduction';

interface Props {

}

const MainPage: React.FC<Props> = () => {
  const iconWrapper = useRef<HTMLDivElement>(null);

  return (
    <main>
      <Header iconRef={iconWrapper} />
      <SliderBlock iconRef={iconWrapper} />
      <Advantages />
      <BlockWithPhoto />
      <Steps />
      <Portfolio />
      <PhotoBlock />
      <ContactForm />
      <OurProduction />
    </main>
  );
};

export default MainPage;
