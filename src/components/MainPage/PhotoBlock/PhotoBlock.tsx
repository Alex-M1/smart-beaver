import Icon from '@/components/common/Icon';
import { StDiv, StFlex, StGrid } from '@/components/common/styled/Block';
import { StSpan } from '@/components/common/styled/Text';
import { locales } from '@/constants/locales';
import { FontWeight } from '@/constants/ui';
import React from 'react';
import { StPhotoBlock } from './styled';

const PhotoBlock: React.FC = () => (
  <StPhotoBlock className="container">
    <StFlex flexDirection="column" ai="center" marginBottom="30px">
      <StSpan color="gray_light" fontSize="20px">{locales.photo_bock_descr}</StSpan>
      <StSpan color="darkGray" fontSize="40px" fontWeight={FontWeight.bold}>{locales.photo_block_company}</StSpan>
    </StFlex>
    <StGrid columns="2fr 1fr 2fr" gap="15px" align="center">
      <StFlex flexDirection="column">
        <Icon fill name="photo_block_1" alt="photo_block_1" ext="png" />
        <StFlex jc="space-between" margin="10px 0">
          <Icon padding="0 10px 0 0" className="a" fill name="photo_block_2" alt="photo_block_2" ext="png" />
          <Icon fill name="photo_block_3" alt="photo_block_3" ext="png" />
        </StFlex>
      </StFlex>

      <StDiv justifySelf="center">
        <Icon fill name="photo_block_4" alt="photo_block_4" ext="png" />
      </StDiv>

      <StFlex flexDirection="column">
        <StFlex jc="space-between" ai="end" marginBottom="10px">
          <Icon padding="0 10px 0 0" fill name="photo_block_5" alt="photo_block_5" ext="png" margin="0 30px 0 0" />
          <Icon fill name="photo_block_7" alt="photo_block_7" ext="png" />
        </StFlex>
        <StFlex jc="space-between">
          <Icon padding="0 10px 0 0" fill name="photo_block_6" alt="photo_block_6" ext="png" margin="0 30px 0 0" />
          <Icon fill name="photo_block_8" alt="photo_block_8" ext="png" />
        </StFlex>
      </StFlex>
    </StGrid>
  </StPhotoBlock>
);

export default PhotoBlock;
