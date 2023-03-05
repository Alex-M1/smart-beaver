import { locales } from '@/constants/locales';
import React from 'react';
import { IconNames } from '../common/Icon/types';
import Img from '../common/Img';

interface Props {
  title: string;
  icon: IconNames;
  stepC: string;
  example: string;
}

const MesureCabinetDoorsItem: React.FC<Props> = ({
  title, icon, stepC, example,
}) => (
  <div>
    <p className="text t-center ws-pre-line measure-doors__items_title">{title}</p>
    <Img className="measure-doors__items_img" name={icon} alt="example" />
    <div className="measure-doors__items_text">
      <p className="text">{locales.measure_step_a}</p>
      <p className="text">{locales.measure_step_b}</p>
      <p className="text">{stepC}</p>
      <p className="text t-center bold">{locales.example}</p>
      <p className="text">{example}</p>
    </div>
  </div>
);

export default MesureCabinetDoorsItem;
