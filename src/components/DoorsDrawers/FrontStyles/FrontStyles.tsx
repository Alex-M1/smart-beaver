import { locales } from '@/constants/locales';
import React from 'react';
import FrontStylesItem from './FrontStylesItem';
import { StFrontStyles } from './styles';
import {
  drawerFrontArray, flatPanelArray, raisedPanelArray, shakerArray,
} from './utils';

const FrontStyles: React.FC = () => (
  <StFrontStyles>
    <p className="frontstyles__title">{locales.front_styles_title.toUpperCase()}</p>
    <FrontStylesItem itemArray={flatPanelArray} title={locales.fp_title} />
    <FrontStylesItem itemArray={raisedPanelArray} title={locales.rp_title} />
    <FrontStylesItem itemArray={shakerArray} title={locales.sd_title} />
    <FrontStylesItem itemArray={drawerFrontArray} title={locales.df_title} />
  </StFrontStyles>
);

export default FrontStyles;
