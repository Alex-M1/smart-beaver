import { Locales, locales } from '@/constants/locales';
import React from 'react';
import CabinetDoorsStyleItem from './CabinetDoorsStyleItem';
import { StCabinetDoors } from './styled';
import { flatPanelsItems, raisedPanelsItems, shakerItems } from './utils';

interface Props {
  title: Locales;
}

const CabinetDoorsStyle: React.FC<Props> = ({ title }) => (
  <StCabinetDoors>
    <p className="small-text bold cabinet-doors__title">{locales[title]}</p>
    <p className="small-text bold">{locales.flat_panel_doors}</p>
    <div className="cabinet-doors__items">
      {flatPanelsItems.map((item) => <CabinetDoorsStyleItem key={item} itemKey={item} />)}
    </div>
    <p className="small-text bold">{locales.raised_panel_doors}</p>
    <div className="cabinet-doors__items">
      {raisedPanelsItems.map((item) => <CabinetDoorsStyleItem key={item} itemKey={item} />)}
    </div>
    <p className="small-text bold">{locales.shaker_doors}</p>
    <div className="cabinet-doors__items">
      {shakerItems.map((item) => <CabinetDoorsStyleItem key={item} itemKey={item} />)}
    </div>
  </StCabinetDoors>
);

export default CabinetDoorsStyle;
