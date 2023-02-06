import { colors } from '@/constants/colors';
import styled from 'styled-components';

export const StNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    text-transform: none;
    margin-right: 218px;
    font-size: 16px;
    color: ${colors.white};
    text-decoration: none;
  }
`;
