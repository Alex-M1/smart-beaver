import { locales, Locales } from '@/constants/locales';
import React from 'react';
import { StSmallTitle } from './styled';

interface Props {
  titleKey: Locales
}

const SmallTitle: React.FC<Props> = ({ titleKey }) => <StSmallTitle>{locales[titleKey]}</StSmallTitle>;

export default SmallTitle;
