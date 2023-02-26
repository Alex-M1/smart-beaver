import { colors } from '@/constants/colors';
import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';

export const StForm = styled.div`
  padding: 0 110px;
  margin: 20px 0;
  .form-text {
    font-size: 18px;
    color: ${colors.white_crime};
    font-weight: ${FontWeight.bold};
  }

  .contact-form {
    background-image: url(/icons/form_background.jpg);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 51px 10px 80px;

    &__description {
      margin: 35px 0 95px;
    }

    &__inputs {
      display: flex;
      flex-direction: column;
      width: 35%;
      margin-bottom: 35px;
    }

    button {
      text-transform: none;
    }

    h2 {
      color: ${colors.white_crime};
    }
  }

  @media (max-width: 1025px){
    padding: 0 80px;
  }

  @media (max-width: 769px){
    padding: 0 40px;

    .contact-form {
      &__inputs {
        width: 60%;
      }
    }

    .form-text {
      font-size: 15px;
      text-align: center;
    }
  }

  @media(max-width: 426px) {
    padding: 0;
    .contact-form {
      padding: 20px;
      &__inputs {
        width: 95%;
      }
      &__description {
        margin: 15px 0;
      }
    }
  }
`;

export const StQuoteForm = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  
  .quoteform__states {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 40px;
    .quoteform__states {
      gap: 10px;
    }
    .quote-el {
      flex-basis: 45%;

      &-last {
        width: 60%;
        margin: 0 auto;
        flex-basis: auto;
      }
    }
  }

  @media (min-width: 1440px) {
    padding: 0 100px;
    row-gap: 15px;
  }
`;
