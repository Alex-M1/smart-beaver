import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StHigle = styled.div`
  .higle__item {
    ${imgSizeResponsive('&_img', '60%')}
    label {
      display: flex;
      align-items: center;
    }
  }
  @media (min-width: 768px) {
    padding: 20px 0;
    .higle__items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 20px 0;
    }
  }
`;
