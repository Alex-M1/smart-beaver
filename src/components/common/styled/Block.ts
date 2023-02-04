import styled from 'styled-components';
import * as mixins from './mixins';
import {
  StGridProps,
  StDivProps,
  StFlexProps,
} from './types';

export const StFlex = styled.div < StFlexProps >`
  &&&& {
    ${mixins.flexStyles};
    ${mixins.sizeStyles};
    ${mixins.positionStyles};
    ${mixins.fontStyles};
    ${(props) => props.cursor && `cursor: ${props.cursor};`};
    ${(props) => props.noSelect && `${mixins.noSelect}`};
    ${(props) => props.hasEllipsis && `${mixins.ellipsisStyles};`};
    ${(props) => props.overflowX && `overflow-x: ${props.overflowX}`};
    ${({ bgColor }) => bgColor && `background-color: ${bgColor};`};
}
`;
export const StGrid = styled.div <StGridProps>`
  &&&& {
    display: grid;
    ${(props) => props.gap && `grid-gap: ${props.gap};`};
    ${(props) => props.columns && `grid-template-columns: ${props.columns};`}
    ${(props) => props.row && `grid-template-rows: ${props.row};`};
    ${(props) => props.align && `align-items: ${props.align};`};
    ${mixins.sizeStyles};
    ${mixins.positionStyles};
    ${mixins.fontStyles};
    ${({ bgColor }) => bgColor && `background-color: ${bgColor};`};
    a {
      ${(props) => !props.linkWithTextDecor && 'text-decoration: none;'};
    }
}`;

export const StDiv = styled.div <StDivProps>`
  &&&& {
    ${mixins.sizeStyles};
    ${mixins.positionStyles};
    ${mixins.fontStyles};
    ${(props) => props.hasEllipsis && `${mixins.ellipsisStyles};`};
    ${(props) => props.userSelect && `user-select: ${props.userSelect};`};
    ${(props) => props.alignSelf && `align-self: ${props.alignSelf};`}; 
    ${(props) => props.zIndex && `z-index: ${props.zIndex};`};
    ${(props) => props.cursor && `cursor: ${props.cursor};`};
    ${(props) => props.noSelect && `${mixins.noSelect}`};
    ${(props) => props.outline && `outline: ${props.outline}`};
    ${(props) => props.flexFull && 'flex: 1'};
    ${(props) => props.display && `display: ${props.display}`};
    ${({ bgColor }) => bgColor && `background-color: ${bgColor};`};
}`;
