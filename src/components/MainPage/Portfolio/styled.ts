import { colors } from '@/constants/colors';
import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';

export const StPortfolioSlider = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  background-color: ${colors.brownLight};
  padding: 36px 40px;

  .portfolio-slider {
    &__text {
      text-align: left;
      padding-right: 60px;
      white-space: pre-wrap;
      font-size: 18px;
      color: ${colors.white};
      font-weight: ${FontWeight.bold};
      line-height: 30px;
    }
  }

  @media(max-width: 769px){
    display: flex;
    flex-direction: column;

    .portfolio-slider {
      &__text {
        font-size: 16px;
      }

      &__img-block {
        align-items: center;
        padding: 25px 0;
      }
    }
  }

  @media(max-width: 426px) {
    padding: 36px 20px;
    flex-direction: column-reverse;
    .portfolio-slider {
      &__text {
        padding-right: 0;
      }
      &__img-block {
        align-items: space-between;;
        padding: 25px 0;
      }
    }
  }
`;
