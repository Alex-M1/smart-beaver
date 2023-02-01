import { Property as CSS } from 'csstype';
import { colors } from 'src/constants/colors';

export interface FontProps {
  fontWeight?: CSS.FontWeight;
  fontSize?: string | number;
  lineHeight?: string | number;
  center?: boolean;
  noEllipses?: boolean;
  cursorPointer?: boolean;
  max2Lines?: boolean;
  textAlign?: CSS.TextAlign;
  textDecoration?: string;
  fontStyle?: CSS.FontStyle;
  lowercase?: boolean;
}

export type ColorType = keyof typeof colors;

export interface ColorsProps {
  backgroundColor?: ColorType;
  color?: ColorType;
  brColor?: ColorType;
  phColor?: ColorType;
  hwColor?: ColorType;
  hwBgColor?: ColorType;
  brColorTop?: ColorType;
  brColorLeft?: ColorType;
  brColorBottom?: ColorType;
  opacity?: number;
}

export interface SizesProps {
  width?: string | number;
  width1366?: string | number;
  padding?: string | number;
  margin?: string | number;
  top?: string | number;
  left?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  bxSizing?: string;
  minWidth?: string | number;
  maxWidth?: string | number;
  marginBottom?: string | number;
  minHeight?: string | number;
  mobileStatus?: string;
  hasAnimation?: boolean;
}
export interface PositionProps extends SizesProps {
  position?: CSS.Position;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  zIndex?: string | number;
  overflowY?: CSS.OverflowY;
  overflowX?: CSS.OverflowY;
}

export interface StFlexProps extends SizesProps, PositionProps, FontProps {
  jc?: CSS.JustifyContent;
  sb?: boolean;
  alignSelf?: CSS.AlignSelf;
  center?: boolean;
  justifyContent?: CSS.JustifyContent;
  alignItems?: CSS.AlignItems;
  alignContent?: CSS.AlignContent;
  ai?: CSS.AlignItems;
  direction?: CSS.Direction;
  flexDirection?: CSS.FlexDirection;
  wrap?: CSS.FlexWrap;
  hasEllipsis?: boolean;
  type?: string;
  hasMarginTop?: string;
  cursor?: string;
  fw?: string;
  noSelect?: boolean;
  flex?: string | number;
  overflowX?: CSS.OverflowY;
  bgColor?: string;
}
export interface StGridProps extends SizesProps, PositionProps, FontProps {
  columns1536?: string;
  columns1366?: string;
  columns?: string;
  gap?: string;
  row?: any;
  align?: CSS.AlignContent;
  linkWithTextDecor?: boolean;
  columns1600?: string;
  columns1650?: string;
  columns1750?: string;
  columns1700?: string;
  columns1800?: string;
  columns1440?: string;
}
export interface StDivProps extends SizesProps, PositionProps, FontProps {
  userSelect?: string;
  zIndex?: string;
  center?: boolean;
  hasEllipsis?: boolean;
  noSelect?: boolean;
  cursor?: string;
  alignSelf?: string;
  outline?: string;
  flexFull?: boolean;
  display?: string;
  bgColor?: string;
}

export interface StSpanProps extends SizesProps, ColorsProps, PositionProps, FontProps {
  userSelect?: string;
  capitalize?: boolean;
  display?: string;
  whiteSpace?: string;
  dataTest?: string;
}
