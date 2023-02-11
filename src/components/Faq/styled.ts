import { colors } from '@/constants/colors';
import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';

export const StFaq = styled.div`
  padding: 50px 0;
  .faq {
    &__img {
      float: right;
    }
    &__description {
      font-size: 20px;
      font-weight: ${FontWeight.bold};
      margin: 15px 0 51px;
      padding-right: 20px;
    }
    &__text {
      display: flex;
      font-size: 18px;
      font-weight: ${FontWeight.light};
      margin-bottom: 30px;
      &.question {
        background-color: ${colors.biege};
        display: inline-block;
        padding: 11px 18px;
      }
    }
  }
  @media(max-width: 1025px){
    .faq {
      &__img {
        img {
          max-width: 424px;
          height: 100%;
        }
      }
    }
  }
  @media(max-width: 769px){
    .faq {
      &__description,  &__text {
        font-size: 15px;
      }
      &__img {
        img {
          max-width: 324px;
          height: 100%;
        }
      }
    }
  }

  @media(max-width: 426px){
    .faq {
      &__img {
        display: none;
      }
    }
  }
`;
