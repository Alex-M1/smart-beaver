import QuoteInput from '@/components/QuoteItems/QuoteInput';
import { locales } from '@/constants/locales';
import React from 'react';
import CornerCabinetsItem from './CornerCabinetsItem';
import { StCornerCabinets } from './styled';

const CornerCabinets: React.FC = () => (
  <StCornerCabinets>
    <CornerCabinetsItem type="base" />
    <CornerCabinetsItem type="wall" />
    <div className="cornet-cabinets__dimensions">
      <p className="ws-pre-line bold small-text t-center">{locales.corner_cabinets_note}</p>
      <div className="cornet-cabinets__dimensions-ipt">
        <QuoteInput inputType="cornerCabinetsDimensionsInput" />
      </div>
    </div>
  </StCornerCabinets>
);

export default CornerCabinets;
