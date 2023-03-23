import { locales } from '@/constants/locales';
import React from 'react';
import { StCabinetFinishingText } from './styled';

const CabinetFinishingText: React.FC = () => (
  <StCabinetFinishingText>
    <p>{locales.cabinet_finishing_text1}</p>
    <p>{locales.cabinet_finishing_text2}</p>
    <p>{locales.cabinet_finishing_text3}</p>
    <p className="cf__semi">{locales.cabinet_finishing_text4}</p>
    <p className="cf__semi">{locales.cabinet_finishing_text5}</p>
    <p className="cf__semi">{locales.cabinet_finishing_text6}</p>
  </StCabinetFinishingText>
);

export default CabinetFinishingText;
