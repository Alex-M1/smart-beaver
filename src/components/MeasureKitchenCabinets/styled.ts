import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';
import { measureMixins } from '../MeasureItems/styled';

export const StMeasureKitchenCabinets = styled.div`
  ${measureMixins}
  ${imgSizeResponsive('.measure-kitchen__img ', '100%')}
  .measure-kitchen {
    &__example {
      ${imgSizeResponsive('&_img', '100%')}
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__items {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 10%;
      padding: 1% 0;
    }
  }
  @media print {
    .for-print {
      margin-top: 150px;
    }
  }
`;
