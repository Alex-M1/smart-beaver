import { locales } from '@/constants/locales';
import React from 'react';
import AvailableOptionsItem from './AvailableOptionsItem';
import { StAvailableOptions } from './styled';

const AvailableOptions: React.FC = () => (
  <StAvailableOptions>
    <p className="available-options__title">{locales.available_options_title}</p>
    <div className="available-options__items">
      <AvailableOptionsItem imgName="door_drawers_available1" title="door_drawers_available_title1" text="door_drawers_available_text1" />
      <AvailableOptionsItem imgName="door_drawers_available2" title="door_drawers_available_title2" text="door_drawers_available_text2" />
    </div>
  </StAvailableOptions>
);

export default AvailableOptions;
