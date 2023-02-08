import styled from 'styled-components';

export const StPhotoBlock = styled.div`
  padding: 50px 18px;
  
  @media (max-width: 1025px) {
    padding: 50px 0px;
    img {
      max-width: 100%;
      height: 100%;
    }
  }
`;
