import { FontWeight, fontFace } from '@/constants/ui';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: Gilroy, sans-serif;
    font-weight: ${FontWeight.medium}
  }

  .container {
    width: 1440px;
    margin: 0 auto;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding:0;
  }

  h1 {
    font-size: 65px;
  }
  h2 {
    font-size: 45px;
  }
  h3 { 
    font-size: 28px;
  }
  h4 {
    font-size: 24px;
  }
  h5 {
    font-size: 18px;
  }
  ${fontFace}

  @media screen and (max-width: 1366px) {
    .container {
      width: 100%;
      margin: 0 auto;
    }
  } 
`;
