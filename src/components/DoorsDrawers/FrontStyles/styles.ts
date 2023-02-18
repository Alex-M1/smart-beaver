import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';

export const StFrontStyles = styled.div`
  .frontstyles__title {
    font-size: 18px;
    font-weight: ${FontWeight.bold};
    margin: 15px 0;
  }
  .frontstyles-item {
    &__title {
      font-size: 15px;
      font-weight: ${FontWeight.semiBold};
    }

    &__example {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px 0;
    }

    &__text {
      font-size: 15px;
      font-weight: ${FontWeight.light};
      margin-top: 15px;
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    .frontstyles__title{
      font-size: 20px;
    }
    .frontstyles-item {
      &__title {
        font-size: 18px;
      }
      &__items {
        display: flex;
        flex-wrap: wrap;
      }
      &__example {
        width: 33%;
      }
    }
  }

  @media (min-width: 1140px) {
    .frontstyles-item {
      &__items {
        display: flex;
        flex-wrap: wrap;
      }
      &__text {
        font-size: 18px;
      }
      &__items {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
      }
      &__example {
        width: auto;
      }
    }
  }
`;
