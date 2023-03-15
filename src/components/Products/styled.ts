import { colors } from '@/constants/colors';
import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';
import { transitionScale } from '../common/styled/mixins';

export const StProducts = styled.div`
  .products {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  }
  .products-item {
    display: inline-block;
    position: relative;
    text-decoration: none;
    margin-top: 15px;
    color: ${colors.black};
    ${transitionScale};

    span {
      display: inline-block;
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 4px;
      right: 0;
      width: 160px;
      height: 90px;
      backdrop-filter: blur(15.5px);
      font-weight: ${FontWeight.bold};
      padding-left: 4px;
    }
  }

  @media (min-width: 768px) {
    .products {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      &-item {
        display: inline-block;
        position: relative;
        text-decoration: none;
        margin-top: 15px;
        color: ${colors.black};
        &-icon {
          width: 175px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        span {
          width: 102px;
          height: 62px;
          font-size: 15px;
        }
        &-specialty_islands, &-cabinet_finishing, &-polities_and_terms {
          justify-self: center;
        }
        &-bathroom_vanities, &-wood_species {
          justify-self: end;
        }

        &-specialty_islands, &-cabinet_doors {
          span {
            font-size: 12px ;
          }
        }

        &-cabinet_doors, &-kitchen_cabinets {
          span {
            right: 54px;
          }
        }

        &-polities_and_terms {
          grid-column-start: 1;
          grid-column-end: 4;
          justify-self: center;
        }
      }
    }
  }

  @media (min-width:1024px) {
    .products {
      &-item {
        &-icon {
          width: 250px;
        }

        span {
          width: 160px;
          height: 70px;
          font-size: 18px ;
        }

        &-cabinet_doors, &-kitchen_cabinets {
          span {
            right: 38px;
          }
        }
      }
    }
  }

  @media (min-width:1440px) {
    .products {
      &-item {
        &-icon {
          width: 340px;
        }

        span {
          width: 210px;
          height: 100px;
        }

        &-cabinet_doors, &-kitchen_cabinets {
          span {
            right: 87px;
          }
        }
      }
    }
  }
`;
