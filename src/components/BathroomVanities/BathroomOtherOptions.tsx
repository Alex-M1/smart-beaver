import { locales } from '@/constants/locales';
import React from 'react';
import Icon from '../common/Icon';

const BathroomOtherOptions: React.FC = () => (
  <div>
    <p className="bathroom__op-title">{locales.other_options_title}</p>
    <div className="bathroom__op-items">
      <div className="bathroom__op-item">
        <Icon quality={100} fill className="bathroom__op-item-icon" ext="png" name="raised_panel_end" alt="raised_panel_end" />
        <p className="bathroom__op-item-text">{locales.raised_panel_end}</p>
      </div>
      <div className="bathroom__op-item">
        <Icon quality={100} fill className="bathroom__op-item-icon" ext="png" name="furniture_post_corners" alt="post_corners" />
        <p className="bathroom__op-item-text">{locales.furniture_post_corners}</p>
      </div>
    </div>
  </div>
);

export default BathroomOtherOptions;
