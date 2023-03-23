import { locales } from '@/constants/locales';
import React from 'react';
import StainFinishesItem from './StainFinishesItem';
import { StStainFinishes } from './styled';
import {
  cherryItems, glazeFinishesItems, mapleItems, oakItems, paintFinishesItems, quarterSawnOak,
} from './utils';

const StainFinishes: React.FC = () => (
  <StStainFinishes>
    <p className="stain-finishes__title">{locales.stain_finishes_title}</p>
    <div>
      <StainFinishesItem title={locales.maple_title} items={mapleItems} />
      <StainFinishesItem title={locales.cherry_title} items={cherryItems} />
      <StainFinishesItem title={locales.red_oak_title} items={oakItems} />
      <StainFinishesItem title={locales.quarter_sawn_oak_title} items={quarterSawnOak} />
      <StainFinishesItem title={locales.paint_finishes_title} items={paintFinishesItems} />
      <StainFinishesItem title={locales.paint_glaze_finishes_title} items={glazeFinishesItems} />
    </div>
  </StStainFinishes>
);

export default StainFinishes;
