import { FontWeight } from '@/constants/ui';
import { imgSize } from '@/helpers/ui';
import styled from 'styled-components';

export const StSpecialtyIslands = styled.div`
  .specialty {
    ${imgSize('&__img', '320px')}

    &__descr1 {
      font-size: 15px;
      font-weight: ${FontWeight.bold};
      margin: 15px 0;
    }
    &__descr2 {
      font-size: 18px;
      font-weight: ${FontWeight.bold};
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 30px 0;
      &-text {
        font-weight: ${FontWeight.light};
        font-size: 15px;
        text-align: center;
        margin-top: 15px;
      }
    }
  }

  @media (min-width: 768px) {
    .specialty {
      &__preview {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 20px 0;
      }

      &__descr1 {
        font-size: 18px;
      }

      &__items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: baseline;
      }
    }
  }

  @media (min-width: 1024px) {
    .specialty {
      &__items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: baseline;
      }
    }
  }

  @media (min-width:1440px){
    .specialty {
      &__descr1 {
        font-size: 20px;
      }
      &__descr2 {
        font-size: 25px;
      }
      ${imgSize('&__img', '524px')}
    }
  }
`;
