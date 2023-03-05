import { locales } from '@/constants/locales';
import React from 'react';

interface Props {
  title: string;
}

const MesureCabinetDoorsItemsTitle: React.FC<Props> = ({ title }) => (
  <div>
    <hr />
    <p className="small-titler red bold">{title}</p>
    <p className="text">{locales.measure_items_text}</p>
    <hr />
  </div>
);

export default MesureCabinetDoorsItemsTitle;
