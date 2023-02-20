import { locales } from '@/constants/locales';
import React from 'react';
import Img from '../common/Img';

const GeneralDoor: React.FC = () => (
  <div className="general-door">
    <p className="general-door__title">{locales.general_door}</p>
    <div className="general-door__img">
      <Img quality={100} name="general_door" alt="door schema" />
    </div>
  </div>
);

export default GeneralDoor;
