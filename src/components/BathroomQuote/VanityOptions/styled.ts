import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StVanityOptions = styled.div`
  .vanity-options__item {
    padding: 20px 0;
    ${imgSizeResponsive('&_img', '100%')}
    &_input-block {
      display: flex;
      align-items: center;
    }
    &_input {
      width: 100%;
      margin-left: 10px;
    }
    &_text-block {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
  @media (min-width: 768px) {
    .vanity-options__item {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 100px;
    }
    &_text-block {
      gap: 0px;
      justify-content: space-between;
    }
  }
  @media (min-width: 1440px) {
    .vanity-options__item {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 150px;
    }
  }
`;
