import { locales, Locales } from '@/constants/locales';
import React from 'react';
import { IconNames } from '../common/Icon/types';
import Img from '../common/Img';

interface Props {
  itemKey: string;
}

const MeasureKitchenCabinetsExample: React.FC<Props> = ({ itemKey }) => (
  <div className="measure-kitchen__example">
    <p className="text">{locales[itemKey as Locales]}</p>
    <Img className="measure-kitchen__example_img" name={itemKey as IconNames} alt="example" />
  </div>
);

export default MeasureKitchenCabinetsExample;
