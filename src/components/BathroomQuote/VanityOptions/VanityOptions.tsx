import { locales } from '@/constants/locales';
import React from 'react';
import { StVanityOptions } from './styled';
import VanityOptionsItem from './VanityOptionsItem';

const VanityOptions: React.FC = () => (
  <StVanityOptions>
    <p className="bold text-small">{locales.vanity_options}</p>
    <VanityOptionsItem isFirst />
    <VanityOptionsItem />
  </StVanityOptions>
);

export default VanityOptions;
