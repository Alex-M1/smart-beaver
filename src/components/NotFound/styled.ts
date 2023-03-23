import { colors } from '@/constants/colors';
import { FontWeight, headerHeight } from '@/constants/ui';
import styled from 'styled-components';

export const StNotFound = styled.div`
  background-image: url('/icons/not_found_bg.jpg');
  background-size: cover;
  height: calc(100vh - ${headerHeight.large}px) ;
  .not-found {
    padding: 170px 0 0;
    width: 527px;
    &__description {
      background-color: ${colors.white};
      /* opacity: .6; */
      border: 1px solid ${colors.black};
      padding: 41px 22px;
      &-title {
        font-size: 66px;
        font-weight: ${FontWeight.bold};
      }
      &-question {
        font-size: 45px;
        font-weight: ${FontWeight.bold};
      }
      &-text {
        font-size: 25px;
        font-weight: ${FontWeight.regular};
      }
    }
    &__btn {
      display: flex;
      justify-content: space-around;
      margin-top: 87px;
      button {
        padding: 5px 60px;
        text-transform: none;
      }
      a {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 769px){
    height: calc(100vh - ${headerHeight.medium}px);
    .not-found {
      padding: 80px 57px 40px 22px;
      width: 464px;

      &__description {
        &-question {
          font-size: 42px;
        }
        &-text {
          font-size: 20px;
        }
      }

      &__btn {
        margin-top: 40px;
        button {
          padding: 5px 40px;
        }
      }
    }
  }

  @media (max-width: 426px){
    height: calc(100vh - ${headerHeight.small}px);
    background-image: url('/icons/not_found_bg-small.jpg');

    .not-found {
      width: 255px;
      padding: 150px 0 0;
      &__description {
        padding: 20px;
      &-title {
        font-size: 45px;
      }
        &-question {
          font-size: 30px;
        }
        &-text {
          font-size: 15px;
        }
      }

      &__btn {
        margin-top: 40px;
        button {
          padding: 5px 40px;
        }
      }

      &__btn {
        flex-direction: column;
        &-main {
          margin-bottom: 20px;
        }
      }
    }
  }
`;
