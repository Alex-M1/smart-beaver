import { colors } from '@/constants/colors';
import styled from 'styled-components';

export const StNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  button, a {
    text-transform: none;
    margin-right: 218px;
    font-size: 18px;
    color: ${colors.white};
    text-decoration: none;
    &:hover {
      opacity: .8;
    }
  }

    @media screen and (max-width: 1367px) {
      button, a{
        margin-right: 200px;
      }
    }
    @media screen and (max-width: 1025px) {
      button, a {
        margin-right: 150px;
      }
    }
    @media screen and (max-width: 769px) {
      button, a {
        margin-right: 70px;
      }
    }  
    @media screen and (max-width: 641px) {
      button, a {
        margin-right: 40px;
      }
    }  
`;
