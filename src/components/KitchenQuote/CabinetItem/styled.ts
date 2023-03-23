import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StCabinetItem = styled.div`
  padding: 10px 0;
  .cabinet-item {
    &__text {
      padding: 10px 0;
      white-space: pre-line;
    }
    ${imgSizeResponsive('&__img', '100%')}
    ${imgSizeResponsive('&__img.pantry', '65%')}
    &__input {
      width: 90%;
    }
  }

  @media (min-width: 768px) {
    flex-basis: 45%;
    .cabinet-item {
      &__text {
        padding: 20px 0;
      }
      &__input {
        width: 100%;
      }
    }
    &.pantry {
      flex-basis: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      & > p {grid-area: text;}
      .cabinet-item__img {
        grid-area: img;
        justify-self: end;
      }
      .cabinet-item__inputs-block {
        grid-area: input;
        align-self: flex-end;
      }
      grid-template-areas: "text img" "input img";
    }
  }
  @media (min-width: 1366px) {
    flex-basis: 20%;
    &.pantry {
      flex-basis: 50%;
    }
  }
`;
