import { colors } from '@/constants/colors';
import styled from 'styled-components';

export const ReviewContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 30px;

  .rewiew {
    &__content-wrap {
      display: grid;
      grid-template-columns: 1fr 2fr;
      margin-top: 50px;
      gap: 100px;
    }
    &__items {
      justify-content: space-evenly;
    }

    &__title {
      font-size: 40px;
      color: ${colors.darkGray};
    }

    &__text {
      font-size: 16px;
      color: ${colors.gray_light};
      margin: 10px 0;
    }
  }

  @media (max-width:1025px) {
    .rewiew {
      &__content-wrap {
        gap: 70px;
      }
      &__items {
        justify-content: space-between;
      }
    }
  }

  @media (max-width: 769px){
    .rewiew {
      &__content-wrap {
        display: flex;
        flex-direction: column;
      }
      &__items {
        align-items: center;
      }
      &__title {
        font-size: 30px;
      }

      &__text {
        font-size: 15px;
      }
    }
  }

  @media(max-width:426px) {
    .rewiew{
      &__items {
        flex-direction: column;
      }

      &__title {
        font-size: 28px;
      }
    }
  }
`;

export const StReviewItem = styled.div`
  padding: 44px 48px 15px ;
  background-color: ${colors.swamp_green};
  border-radius: 60px;
  display: flex;
  flex-direction: column;
  width: 337px;
  height: 433px;

  @media(max-width: 1025px){
    padding: 30px 30px 15px;
    width: 300px;
    height: 400px;
    margin-right: 5px;
  }
  @media(max-width:426px) {
    margin-bottom: 10px;
  }
`;
