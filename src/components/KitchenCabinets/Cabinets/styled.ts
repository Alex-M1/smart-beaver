import { FontWeight } from '@/constants/ui';
import { imgSize } from '@/helpers/ui';
import styled from 'styled-components';

export const StCabinets = styled.div`
  .cabinets {
    &__title {
      font-size: 18px;
      font-weight: ${FontWeight.bold};
      margin-bottom: 20px;
    }
    &__item{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 7px 0;
      &-text {
        text-align: center;
        font-size: 15px;
        margin-top: 10px;
      }
    }
  }
  .pantry_cabinets  {
    ${imgSize('.cabinets__item-icon', '258px', '562px')}
  }
  .corner_base {
    ${imgSize('.cabinets__item-icon', '394px', '332px')}
  }
  .corner_wall {
    ${imgSize('.cabinets__item-icon', '394px', '332px')}
  }
  .wall_cabinets, .base_cabinets {
    ${imgSize('.cabinets__item-icon', '394px', '416px')}
  }

  @media (min-width: 768px) {
    .cabinets {
      &__examples {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
    .pantry_cabinets {
      grid-row-start: 1;
      grid-row-end: 3;
      .cabinets__item-icon {
        width: 199px;
        max-height: 599px;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
    .corner_base {
      ${imgSize('.cabinets__item-icon', '263px', '206px')}
    }
    .corner_wall {
      align-self: flex-end;
      ${imgSize('.cabinets__item-icon', '364px', ' 280px')}
    }
    .wall_cabinets, .base_cabinets {
      align-self: flex-end;
      ${imgSize('.cabinets__item-icon', '284px', '376px')}
    }
  }

  @media (min-width: 1440px) {
    .cabinets {
      &__examples {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
    .pantry_cabinets {
      .cabinets__item-icon {
        width: 307px;
        max-height: 938px;
      }
    }
    .corner_base {
      align-self: flex-end;
      ${imgSize('.cabinets__item-icon', '394px', '332px')}
    }
    .corner_wall {
      ${imgSize('.cabinets__item-icon', '394px', '332px')}
    }
    .wall_cabinets, .base_cabinets {
      ${imgSize('.cabinets__item-icon', '394px', '416px')}
    }
  }
`;
