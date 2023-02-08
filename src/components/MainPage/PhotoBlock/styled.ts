import styled from 'styled-components';

export const StPhotoBlock = styled.div`
  padding: 50px 18px;
  
  .photo-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1025px) {
    padding: 50px 0px;

    .photo-block {
      display: grid;
      grid-template-columns: 2fr 1fr 2fr;
      gap: 15px;
      align-items: center;
    }

    img {
      max-width: 100%;
      height: 100%;
    }
  }
`;
