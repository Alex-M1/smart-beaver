import { colors } from '@/constants/colors';
import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';

export const StStandartFeatures = styled.div`
  .st-features {
    &__title {
      font-size: 18px;
      font-weight: ${FontWeight.bold};
      color: ${colors.darkGray};
      margin-bottom: 15px;
    }
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 7px 0;
      &-text {
        margin-top: 15px;
        font-size: 15px;
        font-weight: ${FontWeight.light};
        text-align: center;
      }
    }

    @media (min-width: 768px) {
      &__content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 10px;
      }
      &__item-icon {
        max-width: 150px;
        max-height: 73px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    @media (min-width: 1440px) {
      &__title {
        font-size: 25px;
      }

      &__item {
        &-icon {
          max-width: 100%;
          max-height: 100%;
        }
        &-text {
          font-size: 18px;
        }
      }
    }
  }
`;
