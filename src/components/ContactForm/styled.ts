import { colors } from '@/constants/colors';
import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';

export const StForm = styled.div`
  padding: 0 110px;
  
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
      padding: 20px 10px;
      &__inputs {
        width: 95%;
      }
      &__description {
        margin: 15px 0;
      }
    }
  }
`;
