import { FontWeight } from '@/constants/ui';
import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StWoodSpeciesExamples = styled.div`
  .ws-example {
    &__item {
      display: flex;
      align-items: center;
      flex-direction: column;
      ${imgSizeResponsive('&-img', '50%', 'auto')}  
      &-name {
        font-size: 15px;
        font-weight: ${FontWeight.semiBold};
        margin: 15px 0;
      }
      &-text {
        font-weight: ${FontWeight.light};
        font-size: 15px;
      }

      &-checkboxes {
        &-title {
          padding: 10px 0;
          font-size: 15px;
        }

        &-text {
          font-size: 15px;
        }
      }
    }

    @media (min-width: 768px) {
      &__items {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 90px;
      }

      &__item {
        padding: 30px 0;
        &-name {
          font-size: 18px;
        }
        &-checkboxes {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: end;
          padding: 10px;
          &-title {
            font-size: 18px;
          }
        }
      }
    }

    @media (min-width: 1440px) {
      &__items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 200px;
      }
      &__item-name, &__item-checkboxes-title {
        font-size: 20px;
      }
      &__item-checkboxes-text, &__item-text {
        font-size: 18px;
      }
    }
  }
`;
