import styled from 'styled-components';
import { StSpanProps } from './types';
import * as mixins from './mixins';

export const StSpan = styled.span<StSpanProps>`
  &&&& {
    ${mixins.sizeStyles};
    ${mixins.colorsStyles};
    ${mixins.fontStyles};
    ${({ capitalize }) => capitalize && 'text-transform: capitalize'};
    ${({ display }) => display && `display: ${display}`};
    ${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace};`};
  }
`;
