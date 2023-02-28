import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StQuoteWoodSpecies = styled.div`
  .quote-species {
    &__title {
      padding: 10px 0 20px;
    }
    &__items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 20px 0;
      gap: 15px;
    }
    &__item {
      ${imgSizeResponsive('&-img', '100%')}
      &-checkbox {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
  @media (min-width: 768px) {
    .quote-species {
      &__items {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 30px;
      }
    }
  }
  @media (min-width: 1440px) {
    .quote-species {
      &__items {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        column-gap: 88px;
      }
    }
  }
`;
