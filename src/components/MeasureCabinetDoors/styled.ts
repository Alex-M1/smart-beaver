import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';
import { measureMixins } from '../MeasureItems/styled';

export const StMesureCabinetDoors = styled.div`
  ${measureMixins}
  .measure-doors {
    &__replacing-door {
      ${imgSizeResponsive('&_img', '100%')}
      &_descr {
        display: grid;
        grid-template-columns: 5fr 1fr;
        column-gap: 10%;
        align-items: center;
      }
    }
    &__items {
      display: flex;
      column-gap: 20%;
      ${imgSizeResponsive('&_img', '100%')}
      &_title {
        height: 100px;
      }
      &_text {
        display: flex;
        flex-direction: column;
        padding: 10% 0;
        p {
          padding: 3% 0;
        }
      }
    }
  }
`;
