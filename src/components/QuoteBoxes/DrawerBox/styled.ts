import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StDrawerBox = styled.div`
  padding: 15px 0;
  ${imgSizeResponsive('.drawer-box__img', '100%')}
  ${imgSizeResponsive('.drawer-box__img-finish', '75%')}
  .drawer-box__item {
    padding: 15px 0;
  }
  @media (min-width: 768px) {
    .drawer-box__items {
      display: flex;
      flex-direction: column;
    }
    .drawer-box__item {
      display: flex;
      flex-direction: column;
      &_example {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
    ${imgSizeResponsive('.drawer-box__img', '40%')}
  }
  @media (min-width: 1440px) {
    .drawer-box__items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 100px;
    }
    .drawer-box__item {
      &_example {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
    ${imgSizeResponsive('.drawer-box__img', '70%')}
  }
`;
