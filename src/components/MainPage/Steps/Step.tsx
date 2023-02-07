import React from 'react';
import Icon from '@/components/common/Icon';
import { StFlex } from '@/components/common/styled/Block';
import { IconNames } from '@/components/common/Icon/types';
import { StStepsTitle } from './styled';

interface Props {
  number: number;
  title: string;
  text: string;
  iconName: IconNames;
}

const Step: React.FC<Props> = ({
  number, title, text, iconName,
}) => (
  <div className="step">
    <StFlex ai="baseline">
      <span className="step__number">{number}</span>
      <StStepsTitle serialNum={number}>{title}</StStepsTitle>
    </StFlex>
    <div className="step__text">{text}</div>
    <Icon className="step__icon" fill alt={iconName} name={iconName} ext="png" />
  </div>
);

export default Step;
