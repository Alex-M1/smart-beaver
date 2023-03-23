import styled from 'styled-components';

export const StSubmitBlock = styled.div`
  padding: 30px 0 0;
  .submit-block {
    padding: 20px 0;
    &__buttons {
      display: flex;
      flex-direction: column;
      padding: 15px 0;
      gap: 15px;
    }
  }
  .quote-input {
    width: 100%;
  }

  @media (min-width: 768px) {
    .submit-block {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      &__buttons {
        padding: 0;
        align-self: flex-end;
      }
    }
  }
  @media (min-width: 1440px) {
    .submit-block {
      grid-template-columns: 30% 40%;
    }
  }
`;
