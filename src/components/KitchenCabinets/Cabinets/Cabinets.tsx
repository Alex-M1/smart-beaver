import Icon from '@/components/common/Icon';
import { locales } from '@/constants/locales';
import React from 'react';
import { StCabinets } from './styled';
import { cabinetItems } from './utils';

const Cabinets: React.FC = () => (
  <StCabinets>
    <p className="cabinets__title">{locales.cabinet_decr}</p>
    <div className="cabinets__examples">
      {cabinetItems.map((name) => (
        <div key={name} className={`cabinets__item ${name}`}>
          <Icon quality={100} fill className="cabinets__item-icon" name={name} alt={name} ext="png" />
          <p className="cabinets__item-text">{locales[name]}</p>
        </div>
      ))}

    </div>
  </StCabinets>
);

export default Cabinets;
