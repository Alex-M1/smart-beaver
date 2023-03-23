import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StDrawerFrontStyle = styled.div`
  label {
    display: flex;
    align-items: center;
  }
  .drawer-fronts {
    &__item {
      ${imgSizeResponsive('&_img', '100%')}
      padding: 10px 0;
    }
  }

  @media (min-width: 768px) {
    padding: 40px 0;
    .drawer-fronts {
      &__items {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 90px;
      }
    }
  }

  @media (min-width: 1440px) {
    .drawer-fronts {
      &__items {
        padding-top: 50px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
    }
  }
`;
