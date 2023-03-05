import React from 'react';
import { locales } from '@/constants/locales';
import Img from '../common/Img';
import Template from '../common/Template';
import MeasureButtons from '../MeasureItems/MeasureButtons';
import MeasureImportant from '../MeasureItems/MeasureImportant';
import MesureCabinetDoorsItem from './MesureCabinetDoorsItem';
import MesureCabinetDoorsItemsTitle from './MesureCabinetDoorsItemsTitle';
import { StMesureCabinetDoors } from './styled';

const MeasureCabinetDoors: React.FC = () => (
  <Template>
    <StMesureCabinetDoors>
      <p className="large-title t-center bold">{locales.mesure_cabinet_doors}</p>
      <hr />
      <MeasureImportant />
      <div className="measure-doors__replacing-door">
        <p className="large-title t-center bold">{locales.replacing_doors}</p>
        <div className="measure-doors__replacing-door_descr">
          <p className="text">{locales.replacing_doors_text}</p>
          <Img className="measure-doors__replacing-door_img" name="replacing_door" alt="replacing_door" />
        </div>
      </div>
      <div>
        <p className="large-title t-center bold">{locales.replacing_full_overlay_doors}</p>
        <p className="text">{locales.replacing_full_overlay_doors_text}</p>
        <hr />
      </div>
      <p className="text bold">{locales.measure_doors_note}</p>
      <MesureCabinetDoorsItemsTitle title={locales.measure_items_title1} />
      <div className="measure-doors__items">
        <MesureCabinetDoorsItem
          icon="measure_single_doors"
          title={locales.measure_single_door}
          stepC={locales.measure_step_c_1}
          example={locales.measure_example_1}
        />
        <MesureCabinetDoorsItem
          icon="measure_split_doors"
          title={locales.measure_split_door}
          stepC={locales.measure_step_c_2}
          example={locales.measure_example_2}
        />
      </div>
      <MesureCabinetDoorsItemsTitle title={locales.measure_items_title2} />
      <div className="measure-doors__items">
        <MesureCabinetDoorsItem
          icon="measure_single_doors"
          title={locales.measure_single_door}
          stepC={locales.measure_step_c_3}
          example={locales.measure_example_3}
        />
        <MesureCabinetDoorsItem
          icon="measure_split_doors"
          title={locales.measure_split_door}
          stepC={locales.measure_step_c_4}
          example={locales.measure_example_4}
        />
      </div>
      <MeasureButtons url="cabinet_doors" />
    </StMesureCabinetDoors>
  </Template>
);

export default MeasureCabinetDoors;
