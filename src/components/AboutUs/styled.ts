import { colors } from '@/constants/colors';
import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';

export const StAboutUs = styled.main`
  padding: 100px 80px 50px;
  .about-us {
    display: flex;
    justify-content: end;

    &__container {
      position: relative;
    }
    
    &__text {
      background-color: ${colors.brownDark};
      margin-left: 400px;
      padding: 50px 30px 50px 216px;
    }

    &__image {
      position: absolute;
      left: -30px;
      top: 50%;
      transform: translate(0, -50%);
    }

    &__str {
      font-size: 18px;
      font-weight: ${FontWeight.semiBold};
      color: ${colors.white};
      margin-bottom: 50px;
    }
  }

  @media(max-width: 1025px){
    padding: 30px 40px 50px;
    .about-us {
      &__container {
        padding-top: 20px;
        width: 100%;
        display:grid;
        grid-template-columns: 1fr;
      }
      &__image{
        position: static;
        left: 0;
        top: 0;
        transform: translate(0,0);
        justify-self: start;
        img {
          height: 100%;
        }
        
      }
      &__text {
        width: 600px;
        margin: 0;
        padding: 30px 20px 0;
        justify-self: end;
      }
    }
  }

  @media (max-width: 769px){
    .about-us {
      &__text {
        width: 550px;
        padding: 20px 20px 0;
      }
      &__str {
        font-size: 15px;
        margin-bottom: 30px;
      }
    }
  }
  
  @media (max-width: 426px){
    padding: 30px 0;
    .about-us {
      &__image {
        justify-self: center;
        img {
          width: 319px;
        }
      }
      &__text {
        width: auto;
        justify-self: center;
      }
    }
  }
`;
