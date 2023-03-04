import { locales } from '@/constants/locales';
import React from 'react';
import DrawerFrontStyleItem from './DrawerFrontStyleItem';
import { StDrawerFrontStyle } from './styled';
import { drawerFrontStyles } from './utils';

const DrawerFrontStyle: React.FC = () => (
  <StDrawerFrontStyle>
    <p className="small-text bold">{locales.quote_door_drawer_front}</p>
    <div className="drawer-fronts__items">
      {drawerFrontStyles.map((el) => <DrawerFrontStyleItem key={el.name} {...el} />)}
    </div>
  </StDrawerFrontStyle>
);

export default DrawerFrontStyle;
