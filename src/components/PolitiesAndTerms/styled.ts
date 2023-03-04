import { FontWeight } from '@/constants/ui';
import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StPolitiesAndTerms = styled.div`
  padding: 20px 0;
  .pt {
    ${imgSizeResponsive('&__img', '100%', 'auto')}  
    &__quote {
      padding-top: 10px;
      &-title {
        font-size: 18px;
        font-weight: ${FontWeight.bold};
      }
    }
    &__quotes {
      padding: 20px 0;
    }
    &__item-text {
      font-size: 15px;
      font-weight: ${FontWeight.light};
    }
  }
    @media (min-width: 768px) {
      padding: 40px 0;
      .pt {
        &__img-block {
          display: flex;
          gap: 30px;
        }
        &__img-block.reverse {
          display: flex;
          flex-direction: row-reverse;
        }
        &__img, &__item  {
          flex-basis: 50%;
        }

        &__quotes {
          display: flex;
          flex-wrap: wrap;
          column-gap: 20px;
          padding: 40px 0;
        }

        &__quote {
          flex-basis: 30%;
          ${imgSizeResponsive('&-img', '100%', 'auto')} 
          &-img {
            display: block;
          }
        }
      }
    }

    @media (min-width: 1440px) {
      padding: 80px 0;
      .pt {
        &__img-block {
          gap: 150px;
        }
        &__item-text {
          font-size: 18px;
        }

        &__quotes {
          column-gap: 200px;
        }
        &__quote {
          flex-basis: 20%;
          &-title {
            font-size: 25px;
          }
        }
      }
    }
`;
