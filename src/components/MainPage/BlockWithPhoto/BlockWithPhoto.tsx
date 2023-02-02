import Icon from '@/components/common/Icon';
import { StDiv, StFlex } from '@/components/common/styled/Block';
import { StSpan } from '@/components/common/styled/Text';
import { colors } from '@/constants/colors';
import { locales } from '@/constants/locales';
import React from 'react';

const BlockWithPhoto: React.FC = () => (
  <StFlex className="container" padding="27px 80px" ai="center">
    <StDiv bgColor={colors.brownDark} padding="112px 50px">
      <StSpan color="white">{locales.block_with_photo}</StSpan>
    </StDiv>
    <Icon alt="woman_carpenter" name="woman_carpenter" />
  </StFlex>
);

export default BlockWithPhoto;
