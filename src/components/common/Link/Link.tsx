import React, { PropsWithChildren } from 'react';
import { urls } from '@/constants/urls';
import { colors } from '@/constants/colors';
import { StLink } from './styled';

interface Props extends PropsWithChildren {
  href: keyof typeof urls;
  color?: keyof typeof colors;
  margin?: string;
  fontSize?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

const Link: React.FC<Props> = ({
  href, color, margin, children, fontSize, target,
}) => (
  <StLink target={target} href={urls[href]} fontSize={fontSize} color={color} margin={margin}>{children}</StLink>
);

export default Link;
