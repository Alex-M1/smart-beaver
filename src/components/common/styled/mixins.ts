import { colors } from 'src/constants/colors';
import { css } from 'styled-components';
import {
  StFlexProps,
  FontProps,
  SizesProps,
  PositionProps,
  ColorsProps,
} from './types';

export const ellipsisStyles = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const truncateStyle = css`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
`;
export const max2LinesStyle = css`
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const flexStyles = css < StFlexProps >`
  display: flex;
  ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection};`};
  ${(props) => props.alignItems && `align-items: ${props.alignItems};`};
  ${(props) => props.ai && `align-items: ${props.ai};`};
  ${(props) => props.justifyContent && `justify-content: ${props.justifyContent};`};
  ${(props) => props.jc && `justify-content: ${props.jc};`};
  ${(props) => props.sb && 'justify-content: space-between;'};
  ${(props) => props.center && 'justify-content: center; align-items: center'};
  ${(props) => props.fw && `flex-wrap: ${props.fw}`};
  ${(props) => props.flex && `flex: ${props.flex}`};
`;

export const fontStyles = css < FontProps >`
  &&&& {
    ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}!important;`};
    ${(props) => props.fontSize && `font-size: ${props.fontSize};`};
    ${(props) => props.lineHeight && `line-height: ${props.lineHeight};`};
    ${(props) => props.cursorPointer && 'cursor: pointer;'};
    ${(props) => props.textAlign && `text-align: ${props.textAlign};`};
    ${(props) => props.textDecoration && `text-decoration: ${props.textDecoration};`};
    ${(props) => props.lowercase && 'text-transform: lowercase;'};
    ${(props) => props.max2Lines && max2LinesStyle};
    ${(props) => props.fontStyle && `font-style: ${props.fontStyle};`};
  }
`;
export const sizeStyles = css < SizesProps >`
  ${(props) => props.width && `width: ${props.width};`};  
  ${(props) => props.height && `height: ${props.height};`};
  ${(props) => props.padding && `padding: ${props.padding};`};
  ${(props) => props.margin && `margin: ${props.margin};`};
  ${(props) => props.minWidth && `min-width: ${props.minWidth};`};
  ${(props) => props.bxSizing && `box-sizing: ${props.bxSizing}`}
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`};
  ${(props) => props.minHeight && `min-height: ${props.minHeight};`};
  ${(props) => props.maxHeight && `max-height: ${props.maxHeight};`};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom};`};
`;
export const positionStyles = css < PositionProps >`
  ${(props) => props.overflowY && `overflow-y: ${props.overflowY};`}; 
  ${(props) => props.overflowX && `overflow-x: ${props.overflowX};`}; 
  ${(props) => props.position && `position: ${props.position};`}; 
  ${(props) => props.top && `top: ${props.top};`};
  ${(props) => props.bottom && `bottom: ${props.bottom};`};
  ${(props) => props.left && `left: ${props.left};`};
  ${(props) => props.right && `right: ${props.right};`}; 
  ${(props) => props.zIndex && `z-index: ${props.zIndex};`}; 
`;
export const noSelect = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const colorsStyles = css<ColorsProps>`
  ${({ backgroundColor }) => backgroundColor && `background-color: ${colors[backgroundColor]};`};
  ${({ color }) => color && `color: ${colors[color]}; text-decoration-color:${colors[color]};`};
  ${(props) => props.opacity && `opacity: ${props.opacity};`};
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
