import { locales } from '@/constants/locales';
import React from 'react';
import HigleItem from './HigleItem';
import { StHigle } from './styled';

const Hingle: React.FC = () => (
  <StHigle>
    <p className="small-text bold ws-pre-line">{locales.quote_door_hingle}</p>
    <div className="higle__items">
      <HigleItem img="hingle_boring" txt="hingle_boring" />
      <HigleItem img="concealed" txt="concealed" />
    </div>
  </StHigle>
);

export default Hingle;
