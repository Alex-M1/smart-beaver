import Icon from '@/components/common/Icon';
import Title from '@/components/common/Title';

import { locales } from '@/constants/locales';
import React from 'react';
import { StOurProduction } from './styled';

const OurProduction: React.FC = () => (
  <StOurProduction className="container content">
    <Title text={locales.our_production} textAlign="right" />
    <div className="production__images">
      <Icon className="image-1" fill alt="production example 1" name="our_producrtion_1" ext="png" />
      <Icon className="image-2" fill alt="production example 2" name="our_producrtion_2" ext="png" />
      <Icon className="image-3" fill alt="production example 3" name="our_producrtion_3" ext="png" />
      <Icon className="image-4" fill alt="production example 4" name="our_producrtion_4" ext="png" />
    </div>
  </StOurProduction>
);

export default OurProduction;
