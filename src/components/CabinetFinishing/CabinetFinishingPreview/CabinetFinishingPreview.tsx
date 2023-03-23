import Img from '@/components/common/Img';
import { locales } from '@/constants/locales';
import React from 'react';
import CabinetFinishingPreviewItem from './CabinetFinishingPreviewItem';
import { StCabinetFinishingPreview } from './styled';

const CabinetFinishingPreview: React.FC = () => (
  <StCabinetFinishingPreview>
    <div className="cfp__img-wrapper"><Img name="cabinet_finishing_preview" alt="preview" width={574} height={332} /></div>
    <p className="cfp__title">{locales.cabinet_finishing_description}</p>
    <div className="cfp__content">
      <CabinetFinishingPreviewItem itemKey="unfinished" />
      <CabinetFinishingPreviewItem itemKey="natural_clear_coat" />
      <CabinetFinishingPreviewItem itemKey="stainded_clear_coat" />
      <CabinetFinishingPreviewItem itemKey="painted" />
      <CabinetFinishingPreviewItem itemKey="painted_glaze" />
    </div>
  </StCabinetFinishingPreview>
);

export default CabinetFinishingPreview;
