import styled from 'styled-components';

export const StKitchenQuote = styled.div`
  .quote-text {
    padding: 10px 0;
  }
  @media (min-width: 768px){
    .quote-text {
      padding: 20px 0;
    }
    .cabinets-items {
      display: flex;
      flex-wrap: wrap;
      column-gap: 10%;
    }
  }
  @media (min-width: 1440px) {
    .quote-text {
      padding: 30px 0;
    }
    .cabinets-items {
      column-gap: 5%;
    }
  }
`;
