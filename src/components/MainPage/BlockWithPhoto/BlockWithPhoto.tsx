import Icon from '@/components/common/Icon';
import { StSpan } from '@/components/common/styled/Text';
import { locales } from '@/constants/locales';
import React from 'react';
import { BlockWithPhotoWrapper } from './styled';

const BlockWithPhoto: React.FC = () => (
  <BlockWithPhotoWrapper className="container">
    <div className="block-with-photo__bg">
      <StSpan className="block-with-photo__text" color="white">{locales.block_with_photo}</StSpan>
    </div>
    <Icon className="block-with-photo__img" fill alt="woman_carpenter" name="woman_carpenter" />
  </BlockWithPhotoWrapper>
);

export default BlockWithPhoto;
