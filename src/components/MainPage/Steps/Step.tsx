import React, {
  MutableRefObject, useEffect, useRef, useState,
} from 'react';
import Icon from '@/components/common/Icon';
import { StDiv, StFlex, StGrid } from '@/components/common/styled/Block';
import { IconNames } from '@/components/common/Icon/types';
import { StStepsNumber, StStepsTitle } from './styled';

interface Props {
  number: number;
  title: string;
  text: string;
  iconName: IconNames;
}

const Step: React.FC<Props> = ({
  number, title, text, iconName,
}) => {
  let top: number = 0;
  if (number === 3 || number === 5) top = 24;
  if (number === 6) top = 46;

  return (
    <div>
      <StFlex ai="baseline">
        <StStepsNumber>{number}</StStepsNumber>
        <StStepsTitle curHeight={top}>{title}</StStepsTitle>
      </StFlex>
      <StDiv marginBottom="130px">{text}</StDiv>
      <Icon alt={iconName} name={iconName} ext="png" />
    </div>
  );
};

export default Step;
