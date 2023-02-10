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
        span {
          font-size: 20px;
          font-weight: ${FontWeight.bold};
          margin-left: 10px;
        }
      }
    }

    &__data {
      padding: 84px 100px 0;
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
`;
