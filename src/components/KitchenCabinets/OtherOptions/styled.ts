import { FontWeight } from '@/constants/ui';
import { imgSize } from '@/helpers/ui';
import styled from 'styled-components';

export const StOtherOptions = styled.div`
  .op-title {
    font-size: 18px;
    font-weight: ${FontWeight.bold};
    margin-bottom: 30px;
  }
  .other-option {
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      ${imgSize('.other-option__item-icon', '284px', '138px')}
      &-text {
        text-align: center;
        font-size: 15px;
        margin-top: 15px;
      }
    } 
  }
  @media (min-width: 768px){

    .other-option {
      display: grid;
      grid-template-columns: 1fr 1fr;
      &__item {
        ${imgSize('.other-option__item-icon', '308px', '179px')}
      } 
    }
  }

  @media (min-width: 1024px){
    .other-option {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1440px){
    padding: 30px 0;
    .op-title {
      font-size: 25px;
    }
    .other-option {
      &__item {
        ${imgSize('.other-option__item-icon', '387px', '225px')}
      } 
    }
  }
`;
