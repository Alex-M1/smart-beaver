import { FontWeight } from '@/constants/ui';
import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StEdgeProfiles = styled.div`
  .edge-profiles__title {
    font-size: 18px;
    font-weight: ${FontWeight.bold};
  }
  .edge-profiles__item-title {
    font-size: 15px;
    font-weight: ${FontWeight.semiBold};
    margin: 15px 0;
  }
  .edge-profiles-item {
    display: flex;
    align-items: center;
    flex-direction: column;

    &__items {
      margin: 15px 0;
      width: 40%;
    }
    &__items.raised {
      width: 90% !important;
    }

    ${imgSizeResponsive('&__img-wrapper', '100%', 'auto')};
    &__short-name , &__formfactor {
      text-align: center;
    }

    &__short-name {
      font-size: 25px;
      font-weight: ${FontWeight.bold};
      margin: 15px 0;
    }
    &__formfactor {
      font-size: 15px;
      font-weight: ${FontWeight.light};
    }
  }

  @media (min-width: 768px) {
    .edge-profiles__title {
      font-size: 20px;
    }
    .edge-profiles__item-title {
      font-size: 18px;
    }
    .edge-profiles-item {
      flex-direction: row;
      &__items {  
        width: 15%;
        margin-right: 15px;
      }
      &__short-name {
        font-size: 18px;
      }
    }
  }
  @media (min-width: 1440px) {
    .edge-profiles__item-title {
      font-size: 20px;
    }
    
    .edge-profiles-item {
      &__items {  
        width: 15%;
        margin-right: 15px;
      }

      &__short-name {
        font-size: 25px;
      }
      &__formfactor {
        font-size: 18px;
      }
    }
  }
`;
