import styled from 'styled-components';

export const StUploadFileBlock = styled.div`
  .upload__text {
    padding: 15px 0;
  }

  @media( min-width: 1140px) {
    .upload__text {
      padding: 25px 0;
    }
    .upload__content {
      display: flex;
      gap: 100px;
    }
  }
`;
