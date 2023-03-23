import styled from 'styled-components';

export const StRecipe = styled.ul`
  padding-left: 15px;
  margin: 0;
  li, p {
    font-size: 15px;
  }

  @media (min-width: 1440px) {
    li, p {
    font-size: 20px;
    }
  }
`;
