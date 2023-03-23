import React from 'react';
import { locales } from '@/constants/locales';
import Template from '../common/Template';
import { StMeasureKitchenCabinets } from './styled';
import MeasureImportant from '../MeasureItems/MeasureImportant';
import Img from '../common/Img';
import {
  firstPartMeasurement, minimumSpace, minimumSpace2, secondPartMeasurement, thirdPartMeasurement,
} from './utils';
import MeasureKitchenCabinetsExample from './MeasureKitchenCabinetsExample';
import MeasureKitchenTextItem from './MeasureKitchenTextItem';
import MeasureButtons from '../MeasureItems/MeasureButtons';

const MeasureKitchenCabinets: React.FC = () => (
  <Template>
    <StMeasureKitchenCabinets>
      <p className="large-title bold t-center">{locales.measure_kitchen_cabinet}</p>
      <p className="measure_kitchem_cabinet_text bold t-center">{locales.measure_kitchen_cabinet_text}</p>
      <MeasureImportant />
      <Img className="measure-kitchen__img" name="measure_kitchen_img" alt="measure from corner out" />
      {firstPartMeasurement.map((item) => <MeasureKitchenTextItem key={item.text} item={item} />)}
      <hr />
      <p className="small-title bold">
        {locales.point_g}
        <span className="red">{locales.xx}</span>
      </p>
      <div className="measure-kitchen__items">
        {minimumSpace.map((item) => (<MeasureKitchenCabinetsExample key={item} itemKey={item} />))}
      </div>
      <hr className="for-print" />
      {secondPartMeasurement.map((item) => <MeasureKitchenTextItem key={item.text} item={item} />)}
      <hr />
      <p className="small-title bold">
        {locales.point_k}
        <span className="red">{locales.xx}</span>
      </p>
      <div className="measure-kitchen__items">
        {minimumSpace2.map((item) => (<MeasureKitchenCabinetsExample key={item} itemKey={item} />))}
      </div>
      <hr />
      {thirdPartMeasurement.map((item) => <MeasureKitchenTextItem key={item.text} item={item} />)}
      <MeasureButtons url="kitchen_cabinets" />
    </StMeasureKitchenCabinets>
  </Template>
);

export default MeasureKitchenCabinets;
