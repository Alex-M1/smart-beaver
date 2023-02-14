import React from 'react';
import Icon from '@/components/common/Icon';
import { locales } from '@/constants/locales';
import { StOtherOptions } from './styled';

const OtherOptions: React.FC = () => (
  <StOtherOptions>
    <p className="op-title">{locales.other_options_title}</p>
    <div className="other-option">
      <div className="other-option__item">
        <Icon fill className="other-option__item-icon" ext="png" name="raised_panel_end" alt="raised_panel_end" />
        <p className="other-option__item-text">{locales.raised_panel_end}</p>
      </div>
      <div className="other-option__item">
        <Icon fill className="other-option__item-icon" ext="png" name="post_corners" alt="post_corners" />
        <p className="other-option__item-text">{locales.post_corners}</p>
      </div>
      <div className="other-option__item matching_crown">
        <Icon fill className="other-option__item-icon" ext="png" name="matching_crown" alt="matching_crown" />
        <p className="other-option__item-text">{locales.matching_crown}</p>
      </div>
    </div>
  </StOtherOptions>
);

export default OtherOptions;
