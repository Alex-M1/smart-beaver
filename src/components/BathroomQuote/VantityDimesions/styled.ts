import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StVantityDimesions = styled.div`
  .vanity-dimensions {
    ${imgSizeResponsive('&__img', '100%')}
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    &__input {
      margin: 20px 0 40px;
      width: 100%;
    }
    & > p {
      white-space: pre-wrap;
    }
  }

  @media (min-width: 768px) {
    .vanity-dimensions {
      &__img {grid-area: img;}
      &__input-block {grid-area: input;}
      & > p {grid-area: textstr;}
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "img textstr" "img input";
      column-gap: 100px;
      padding: 30px 0 50px;
    }
  }
  @media (min-width: 1440px) {
    .vanity-dimensions {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas: "img textstr input";
      column-gap: 120px;
    }
  }
`;
