import { colors } from '@/constants/colors';
import Link from 'next/link';
import styled from 'styled-components';

interface LinkType {
  color?: keyof typeof colors;
  margin?: string;
  fontSize?: string;
}

export const StLink = styled(Link) <LinkType>`
    text-transform: none;
    margin: ${({ margin }) => margin};
    font-size:  ${({ fontSize }) => fontSize};
    color: ${({ color }) => colors[color || 'white']};
    text-decoration: none;
`;
