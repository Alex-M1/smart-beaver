import { colors } from '@/constants/colors';
import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';

export const StStepsNumber = styled.span`
  -webkit-text-stroke: 1px black;
  -webkit-text-fill-color: transparent;
  font-size: 150px;
  font-weight: ${FontWeight.semiBold};
  font-style: italic;
`;

export const StStepsTitle = styled.span<{ curHeight: number }>`
  font-weight: ${FontWeight.bold};
  font-size: 18px;
  position: relative;
  top: ${({ curHeight }) => `${-12 - curHeight}px`};
  margin-left: 12px;
  &::after {
    content: '';
    height:2px;
    background: ${colors.black};
    width: 69px;
    position: absolute;
    bottom: -12px;
    left: 0;
  }
`;
