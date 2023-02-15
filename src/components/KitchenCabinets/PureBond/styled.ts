import { colors } from '@/constants/colors';
import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';

export const StPureBond = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  .pure-bond {
    &__title {
      font-size: 25px;
      font-weight: ${FontWeight.bold};
      margin: 20px 0 10px;
    }

    &__text {
      color: ${colors.darkGray};
      line-height: 27px;
      font-size: 18px;
      font-weight: ${FontWeight.semiBold};
    }
  }

  @media (min-width: 768px){ 
    padding: 30px 0;
    align-items: start;
    .pure-bond {
      &__text {
        margin-bottom: 30px;
      }
    }
  }
  @media (min-width: 1024px){ 
    padding: 30px 0;
    align-items: start;
    .pure-bond {
      &__text {
        font-size: 20px;
      }
    }
  }
`;
