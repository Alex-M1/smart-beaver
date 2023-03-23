import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StBox = styled.div`
  p.t-center {
    padding: 20px 0;
  }
  .box__item {
    ${imgSizeResponsive('&_img', '100%')}
    padding: 20px 0;
    .quote-input {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .box {
      &__first-block {grid-area: first-block;}
      &__second-block {grid-area: second-block;}
      &__third-block {grid-area: third-block;}
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "first-block third-block" "second-block second-block";
      column-gap: 70px;
    }
  }

  @media (min-width: 1440px) {
    .box {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas: "first-block second-block third-block";
      column-gap: 30px;
    }
  }
`;
