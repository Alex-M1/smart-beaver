import { colors } from '@/constants/colors';
import styled from 'styled-components';

export const AdvantageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  padding: 15px 80px;
  .advanced-item {
    padding: 0 15px;
  }
  @media (max-width: 1025px) {
    padding: 15px 40px;
    .advanced-item {
      padding: 0;
    }
  }
`;

export const StAdvantagesH5 = styled.h5`
  color: ${colors.darkGray};
`;

export const StAdvantageText = styled.p`
  margin-top: 15px;
  color: ${colors.gray};

  @media (max-width: 769px) {
    font-size: 9px;
  }
`;
