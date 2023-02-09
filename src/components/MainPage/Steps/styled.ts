import { flexCenter } from '@/components/common/styled/mixins';
import { colors } from '@/constants/colors';
import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';

export const StStepWrapper = styled.div`
  padding: 62px 80px 94px;
  .steps {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 14px 200px;
    margin-top: 57px;
  }

  .step {
    &__number {
      -webkit-text-stroke: 1px black;
      -webkit-text-fill-color: transparent;
      font-size: 150px;
      font-weight: ${FontWeight.semiBold};
      font-style: italic;
    }

    &__text {
      margin-bottom: 80px;
      min-height: 120px;
    }

    &__title {
      font-weight: ${FontWeight.bold};
      font-size: 18px;
      position: relative;
      top: -50px;
      margin-left: 12px;
      &::after {
        content: '';
        height:2px;
        background: ${colors.black};
        width: 69px;
        position: absolute;
        bottom: -12px;
        left: 0;
      }
    }
  }

  @media(max-width: 1025px) {
    .steps {
      gap: 14px 50px;
    }
  }

  @media (max-width: 769px) {
    padding: 62px 40px 94px;
    .steps {
      gap: 14px 20px;
    }
    .step {
      &__number {
        font-size: 120px;
      }
      &__text {
        font-size: 15px;
        margin-bottom: 15px;
      }
      &__title {
        font-size: 15px;
        top: -40px;
      }
    }
    img {
      width: 164px;
    }
  }
  @media (max-width: 426px) {
    padding: 20px;
    .steps {
      ${flexCenter};
      flex-direction: column;
    }

    .step {
      &__wrapper-title {
        justify-content: center;
      }
      &__text {
        ${flexCenter}
        text-align: center;
        padding: 0 15px;
      }
      &__icon {
         ${flexCenter}
      }
    }
  }
`;
