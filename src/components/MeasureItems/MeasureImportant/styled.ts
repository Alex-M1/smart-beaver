import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StMeasureImportant = styled.div`
  .measure-important {
    &__required-tools {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      &_img {
        ${imgSizeResponsive('&', '100%', '100%')};
        flex-basis: 12%;
      }
    }
  }
`;
