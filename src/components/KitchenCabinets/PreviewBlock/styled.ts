import { colors } from '@/constants/colors';
import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';

export const StPreview = styled.div`
  padding: 50px 0;
  p {
    font-size: 15px;
  }
  .preview {
    &__icon-container {
      display: flex;
      justify-content: center;
    }
    &__description {
      font-weight: ${FontWeight.bold};
      margin-bottom: 15px;
    }

    &__tagline, &__end {
      color: ${colors.darkGray};
      font-weight: ${FontWeight.bold};
      margin-top: 15px;
    }
  }

  @media (min-width:768px){
    .preview {
      &__first-part {
        display: flex;
        flex-direction: row-reverse;
      }
      &__icon-container, &__description {
        width: 50%;
        justify-content: start;
      }
      &__description {
        font-size: 18px;
        padding-right: 15px;
      }
      &__second-part {
        display: flex;
        margin-top: 15px;
        & > div {
          width: 50%;
        }
      }
      &__tagline, &__end {
        margin-top: 0;
      }
    }
  }

  @media (min-width: 1440px) {
    p {
      font-size: 20px;
    }
    .preview {
      &__description {
        font-size: 25px;
        padding-right:100px;
      }
      &__icon {
        width: 574px;
        height: 332px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
