import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StCabinetDoors = styled.div`
  .cabinet-doors {
    &__title {
      padding: 30px 0 15px;
    }
  }
  .cabinet-doors__item {
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${imgSizeResponsive('&-img', '60%')}
    &-title {
      display: flex;
      justify-content: start;
      align-items: center;
      width: 60%;
      padding-top: 10px;
    }
  }

  @media (min-width: 768px){
    .cabinet-doors {
      &__items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 15px;
      }
      &__item {
        ${imgSizeResponsive('&-img', '100%')}
        &-title {
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 1440px){
    .cabinet-doors {
      &__items {
        grid-template-columns: repeat(6, 1fr);
      }
    }
  }
`;
