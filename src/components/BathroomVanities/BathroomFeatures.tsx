import { locales } from '@/constants/locales';
import React from 'react';
import Icon from '../common/Icon';

const BathroomFeatures: React.FC = () => (
  <div className="bathroom__features">
    <p>{locales.kitchen_cabinet_tagline}</p>
    <p>{locales.bathroom_features}</p>
    <Icon className="bathroom__cabinet" name="bathroom_cabinet" alt="bathroom_cabinet" fill />
  </div>
);

export default BathroomFeatures;
