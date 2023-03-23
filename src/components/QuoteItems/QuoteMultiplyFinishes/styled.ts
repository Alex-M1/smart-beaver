import styled from 'styled-components';
import { imgSizeResponsive } from '@/helpers/ui';

export const StQuoteMultiplyFinishes = styled.div`
  & > p {
    padding: 40px 0 20px;
  }
  .multiply-finishes {
    ${imgSizeResponsive('&__img', '100%')};
    &__label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }
  @media (min-width: 768px) {
    .multiply-finishes {
      display: flex;
      column-gap: 40px;
      &__img {
        flex-basis: 50%;
      }
    }
  }
  @media (min-width: 1440px) {
    .multiply-finishes {
      &__img {
        flex-basis: 40%;
      }
    }
  }
`;
