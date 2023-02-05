import { colors } from '@/constants/colors';
import styled from 'styled-components';

export const StInput = styled.input<{ margin?: string }>`
  background: ${colors.white_crime};
  border-radius: 100px;
  outline: none;
  padding: 15px 49px;
  border: none;
  margin: ${({ margin }) => margin};
`;
