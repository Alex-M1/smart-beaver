import Icon from '@/components/common/Icon';
import { StDiv, StFlex } from '@/components/common/styled/Block';
import React from 'react';
import { IconNames } from '@/components/common/Icon/types';
import { StAdvantageText, StAdvantagesH5 } from './styled';

interface Props {
  name: IconNames;
  title: string;
  text: string;
}

const AdvantageItem: React.FC<Props> = ({ name, text, title }) => (
  <StFlex padding="0 15px">
    <Icon alt={name} name={name} ext="png" />
    <StDiv margin="5px 10px">
      <StAdvantagesH5>{title}</StAdvantagesH5>
      <StAdvantageText>
        {text}
      </StAdvantageText>
    </StDiv>
  </StFlex>
);

export default AdvantageItem;
