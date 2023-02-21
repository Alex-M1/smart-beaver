import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StOurProduction = styled.div`
  padding: 40px 0 0;
  .image {
    &-1, &-4{ 
      flex-basis: 100%;
    }
    &-2, &-3{
      flex-basis:45%;
    }
  }
  .production {
    ${imgSizeResponsive('&__image', '100%')}
    &__images {
      padding: 40px 0 0;
      display: flex;
      flex-wrap: wrap;
      column-gap: 10%;
    }
  }
  @media (min-width: 768px) {
    padding: 80px 0 0;
    .image {
      &-1, &-4{ 
        flex-basis: 70%;
      }
      &-2, &-3{
        flex-basis:20%;
      }
    }
  }
  @media (min-width: 1140px) {
    padding: 140px 0 0;
  }
`;
