import React from 'react';
import Img from '@/components/common/Img';
import QuoteInput from '@/components/QuoteItems/QuoteInput';
import { locales } from '@/constants/locales';
import { StCabinetDoorsDimensions } from './styled';

const CabinetDoorsDimensions: React.FC = () => (
  <StCabinetDoorsDimensions>
    <p className="small-text bold">{locales.quote_cabinet_door}</p>
    <p className="small-text bold">{locales.quote_cabinet_door_text}</p>
    <div className="door-dimensions__items">
      <div className="door-dimensions__item">
        <Img className="door-dimensions__item_img" name="door_quote_img1" alt="door example" />
        <div className="door-dimensions__item_ipt">
          <p className="small-text bold">{locales.quote_cabinet_ipt1}</p>
          <QuoteInput inputType="cabinetDoorsDimensionsInput" />
        </div>
        <p className="small-text bold">{locales.quote_cabinet_door_sizes}</p>
      </div>
      <div className="door-dimensions__draweritem">
        <Img className="door-dimensions__item_img" name="door_quote_img2" alt="door example" />
        <div className="door-dimensions__item_ipt">
          <p className="small-text bold">{locales.quote_cabinet_ipt2}</p>
          <QuoteInput inputType="cabinetDrawersDimensionsInput" />
        </div>
      </div>
    </div>
  </StCabinetDoorsDimensions>
);

export default CabinetDoorsDimensions;
