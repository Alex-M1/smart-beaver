import React from 'react';
import { locales } from '@/constants/locales';
import Img from '../common/Img';
import { previewClassBuilder } from './utils';

const DoorsDrawersPreview: React.FC = () => (
  <div className={previewClassBuilder()}>
    <div className={previewClassBuilder('img-wrapper')}>
      <Img priority alt="door example" name="cabinet_doors_preview" />
    </div>
    <div className={previewClassBuilder('content')}>
      <p className={previewClassBuilder('descr')}>{locales.cabinet_doors_decr}</p>
      <p className={previewClassBuilder('recipe')}>{locales.cabinet_doors_peview_recipe}</p>
    </div>
  </div>
);

export default DoorsDrawersPreview;
