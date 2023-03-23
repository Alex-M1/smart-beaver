import { locales } from '@/constants/locales';
import React from 'react';
import Icon from '../common/Icon';

const BathroomPreview: React.FC = () => (
  <div className="bathroom__preview">
    <Icon className="bathroom__preview-img" name="bathroom_img" alt="preview" fill />
    <div className="bathroom__preview-text">
      <p className="bathroom__descr">{locales.bathroom_descr1}</p>
      <p className="bathroom__descr">{locales.bathroom_descr2}</p>
    </div>
  </div>
);

export default BathroomPreview;
