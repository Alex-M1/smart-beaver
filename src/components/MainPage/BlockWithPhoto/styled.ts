import { colors } from '@/constants/colors';
import styled from 'styled-components';

export const BlockWithPhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 27px 80px;

  .block-with-photo {
    &__bg {
      background-color: ${colors.brownDark};
      padding: 112px 50px;
    }

    &__text {
      font-size: 18px;
    }
  }

  @media (max-width: 769px) {
    padding: 27px 40px;
    img {
      width: 284px;
    }

    .block-with-photo {
      &__bg {
        background-color: ${colors.brownDark};
        padding: 60px 32px;
      }
      &__text {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 426px) {
    padding: 27px 0;
    flex-direction: column-reverse;

    .block-with-photo {
      &__img {
        height: 383px;
      }
    }

    img {
      height: auto;
    }
  }
`;
