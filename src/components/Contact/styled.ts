import { colors } from '@/constants/colors';
import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';

export const StContact = styled.div`
  .contact {
    padding: 30px 0;
    &__contacts-block {
      display: flex;
      justify-content: space-between;
      &-item {
        display: flex;
        align-items: center;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
          color: ${colors.black};
        }

        span {
          font-size: 30px;
          font-weight: ${FontWeight.bold};
          margin-left: 10px;
          color:${colors.black}
        }
      }
    }

    &__data {
      padding: 84px 180px 0;
    }

    &__schedule {
      background-color: ${colors.brownLight};
      padding: 50px 77px 34px;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        font-size: 20px;
      }

      &-title {
        text-transform: uppercase;
        font-weight: ${FontWeight.bold};
        color: ${colors.white};
        margin-bottom: 50px;
      }

      &-hours, &-questions {
        color: ${colors.white};
        font-weight: ${FontWeight.light};
      }

      &-day-off {
        color: ${colors.black};
        font-weight: ${FontWeight.bold};
        margin: 12px 0;
      }
    }

    &__form {
      background-color: ${colors.bg_black};
      padding: 55px 115px;
      display: flex;
      flex-direction: column;
      margin-top: 36px;
      &-ipt-row {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }

      &-ipt {
        width: 45%;
        margin-bottom: 32px;
      }
      &-btn {
        margin-top: 32px;
      }
    }
  }

  @media (max-width:1025px) {
    .contact {
      &__contacts-block {
        flex-direction: column;
        &-item {
          &:first-child {
            margin-bottom: 20px;
          }
          span {
            font-size: 20px;
          }
        }
      }
      &__data {
        padding: 84px 40px 0;
      }

      &__schedule {
        padding: 50px 40px 34px;
        p {
          font-size: 18px;
        }
      }

      &__form {
        padding: 55px 66px;
      }
    }
  }

  @media (max-width: 426px) {
    .contact {
      &__data {
        padding: 40px 0;
      }
      &__schedule {
        padding: 50px 20px 34px;
        p {
          text-align: center;
          font-size: 18px;
        }
      }
      &__form {
        padding: 55px 20px;
        &-ipt-row {
          flex-direction: column;
        }
        &-ipt {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 325px) {
    .contact {
      &__contacts-block {
        flex-direction: column;
        &-item {
          span {
            font-size: 15px;
          }
        }
      }
    }
  }
`;
