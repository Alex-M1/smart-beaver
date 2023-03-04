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
    font-weight: ${FontWeight.medium};
  }
  .bold {
    font-weight: ${FontWeight.bold};
  }
  .t-center {
    text-align: center;
  }
  
  .ws-pre-line {
    white-space: pre-line;
  }

  .container {
    width: 1440px;
    margin: 0 auto;
  }

  .content {
    padding: 0 80px;
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
    font-size: 25px;
  }
  h5 {
    font-size: 18px;
  }

  label {
    cursor: pointer;
  }
  
  p.quote-title {
    font-weight: ${FontWeight.bold};
    font-size: 25px;
    padding: 50px 0;
    text-align: center;
  }
  .small-text {
    font-size: 18px;
  }
  p {
    line-height: 150%;
  }
  ${fontFace}

  @media (max-width: 1366px) {
    .container {
      width: 100%;
      margin: 0 auto;
    }
  } 
  @media (max-width: 769px) {
    .content {
      padding: 0 40px;
    }
    h1 {
      font-size: 42px;
    }
    h2 {
      font-size: 40px;
    }
    h3 { 
      font-size: 18px;
    }
    h4 {
      font-size: 18px;
    }
    h5 {
      font-size: 13px;
    }
    p.quote-title {
    font-size: 20px;
    padding: 30px 0;
    }
    .small-text {
      font-size: 15px;
    }
  }

  @media(max-width: 426px) {
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 28px;
    }
    h3 { 
      font-size: 28px;
    }
    h5 {
      font-size: 13px;
    }
    h4 {
      font-size: 15px;
    }
    .content {
      padding: 0 20px;
    }
    p.quote-title {
      font-size: 18px;
      padding: 20px 0;
    }
  }

  .text-25-18 {
    font-size: 18px;
    @media (min-width: 1140px){
      font-size: 25px;
    }
  }
`;
