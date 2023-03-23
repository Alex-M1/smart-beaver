import { FontWeight } from '@/constants/ui';
import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StAvailableOptions = styled.div`
  .available-options {
    &__title {
    font-size: 15px;
    font-weight: ${FontWeight.semiBold};
    }
    &__items {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .available-options-item {
    margin: 15px 0;
    &__title {
      font-size: 18px;
      font-weight: ${FontWeight.semiBold};
      margin: 15px 0;
    }
    &__text {
      font-size: 15px;
      font-weight: ${FontWeight.light};
      text-align: center;
      margin-top: 15px;
    }
    ${imgSizeResponsive('&__img', '80%', 'auto')}
  }

  @media (min-width: 768px) {
    .available-options {
      &__title {
      font-size: 18px;
      }
      &__items {
        align-items: flex-start;
      }
    }
  }

  @media (min-width: 1440px) {
    .available-options {
      &__title {
        font-size: 20px;
      }
    }
    .available-options-item {
      &__title {
        font-size: 20px;
      }
      &__text {
        font-size: 18px;
      }
    }
  }
`;
