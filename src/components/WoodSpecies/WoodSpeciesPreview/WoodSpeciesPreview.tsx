import Img from '@/components/common/Img';
import { locales } from '@/constants/locales';
import React from 'react';
import { StWoodSpeciesPreview } from './styled';

const WoodSpeciesPreview: React.FC = () => (
  <StWoodSpeciesPreview>
    <div className="wood-species-preview__img">
      <Img name="wood_species_preview_img" alt="preview" width={574} height={332} />
    </div>
    <div className="wood-species-preview__text-block">
      <p className="wood-species-preview__text">{locales.wood_species_preview_text1}</p>
      <p className="wood-species-preview__text">{locales.wood_species_preview_text2}</p>
      <p className="wood-species-preview__text">{locales.wood_species_preview_text3}</p>
    </div>
  </StWoodSpeciesPreview>
);

export default WoodSpeciesPreview;
