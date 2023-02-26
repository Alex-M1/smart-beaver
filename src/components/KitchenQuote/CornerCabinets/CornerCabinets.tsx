import { locales } from '@/constants/locales';
import React from 'react';
import CornerCabinetsItem from './CornerCabinetsItem';
import { StCornerCabinets } from './styled';

const CornerCabinets: React.FC = () => (
  <StCornerCabinets>
    <CornerCabinetsItem type="base" />
    <CornerCabinetsItem type="wall" />
    <p className="ws-pre-line bold small-text t-center">{locales.corner_cabinets_note}</p>
  </StCornerCabinets>
);

export default CornerCabinets;
