import Img from '@/components/common/Img';
import { locales } from '@/constants/locales';
import React from 'react';
import { StMeasureImportant } from './styled';

const MeasureImportant: React.FC = () => (
  <StMeasureImportant>
    <p className="t-center small-title bold">{locales.tools_required}</p>
    <div className="measure-important__required-tools">
      <Img className="measure-important__required-tools_img" name="measure_tape" alt="measure_tape" />
      <Img className="measure-important__required-tools_img" name="notebook" alt="notebook" />
      <Img className="measure-important__required-tools_img" name="pencil" alt="pencil" />
    </div>
    <p className="large-title t-center bold">{locales.very_important}</p>
    <p className="text bold">{locales.very_important_text}</p>
  </StMeasureImportant>
);

export default MeasureImportant;
