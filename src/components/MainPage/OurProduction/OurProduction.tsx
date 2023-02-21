import Img from '@/components/common/Img';
import Title from '@/components/common/Title';

import { locales } from '@/constants/locales';
import React from 'react';
import { StOurProduction } from './styled';

const OurProduction: React.FC = () => (
  <StOurProduction className="container content">
    <Title text={locales.our_production} textAlign="right" />
    <div className="production__images">
      <div className="production__image image-1"><Img alt="production example 1" name="our_producrtion_1" /></div>
      <div className="production__image image-2"><Img alt="production example 2" name="our_producrtion_2" /></div>
      <div className="production__image image-3"><Img alt="production example 3" name="our_producrtion_3" /></div>
      <div className="production__image image-4"><Img alt="production example 4" name="our_producrtion_4" /></div>
    </div>
  </StOurProduction>
);

export default OurProduction;
