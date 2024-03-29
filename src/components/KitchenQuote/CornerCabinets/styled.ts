import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StCornerCabinets = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  padding: 10px 0;
  .corner-cabinets {
    ${imgSizeResponsive('&__img', '100%')}
    &__img {
      padding: 10px 0;
    }
  }

  @media (min-width: 768px) {
    padding: 40px 0 20px;
    gap: 10%;
    justify-content: space-between;
    .corner-cabinets {
      &__item {
        flex-basis: 40%;
        padding: 20px 0;
      }
    }
    .cornet-cabinets__dimensions {
      flex-basis: 100%;
      &-ipt {
        display: flex;
        justify-content: center;
        padding: 20px;
      }
    }
  }

  @media (min-width: 1440px) {
    gap: 5%;
    .corner-cabinets__item {
      flex-basis: 30%;
    }
    .cornet-cabinets__dimensions {
      flex-basis: 30%;
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &-ipt {
        display: block;
      }
    }
  }
`;
