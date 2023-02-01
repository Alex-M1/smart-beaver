import React from 'react';
import { locales } from '@/constants/locales';
import { StDescription } from './styled';

const Description: React.FC = () => (
  <StDescription>
    <h1 className="description__company-name">
      {locales.company_name}
      -
    </h1>
    <span className="description__tagline">{locales.tagline}</span>
    <span className="description__text">{locales.description_text}</span>
  </StDescription>
);

export default Description;
