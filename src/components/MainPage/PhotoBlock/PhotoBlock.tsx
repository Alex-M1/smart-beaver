import Icon from '@/components/common/Icon';
import { StDiv, StFlex } from '@/components/common/styled/Block';
import { StSpan } from '@/components/common/styled/Text';
import { locales } from '@/constants/locales';
import { FontWeight } from '@/constants/ui';
import React from 'react';

interface Props {

}

const PhotoBlock: React.FC<Props> = ({ }) => (
  <StDiv className="container" padding="50px 0">
    <StFlex flexDirection="column" ai="center" marginBottom="30px">
      <StSpan color="gray_light" fontSize="20px">{locales.photo_bock_descr}</StSpan>
      <StSpan color="darkGray" fontSize="40px" fontWeight={FontWeight.bold}>{locales.photo_block_company}</StSpan>
    </StFlex>
    <StFlex jc="space-between" ai="center">
      <StFlex flexDirection="column">
        <Icon name="photo_block_1" alt="photo_block_1" ext="png" />
        <StFlex jc="space-between" margin="10px 0">
          <Icon name="photo_block_2" alt="photo_block_2" ext="png" />
          <Icon name="photo_block_3" alt="photo_block_3" ext="png" />
        </StFlex>
      </StFlex>

      <Icon name="photo_block_4" alt="photo_block_4" ext="png" />

      <StFlex flexDirection="column">
        <StFlex jc="space-between" ai="end" marginBottom="10px">
          <Icon name="photo_block_5" alt="photo_block_5" ext="png" margin="0 30px 0 0" />
          <Icon name="photo_block_7" alt="photo_block_7" ext="png" />
        </StFlex>
        <StFlex jc="space-between">
          <Icon name="photo_block_6" alt="photo_block_6" ext="png" margin="0 30px 0 0" />
          <Icon name="photo_block_8" alt="photo_block_8" ext="png" />
        </StFlex>
      </StFlex>
    </StFlex>
  </StDiv>
);

export default PhotoBlock;
