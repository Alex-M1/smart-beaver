import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StCabinetDoorsDimensions = styled.div`
  p {
    white-space: pre-line;
  }
  & > p {
    padding: 10px 0;
  }
  .door-dimensions__item {
    ${imgSizeResponsive('&_img', '100%')}
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;
    &_block {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
  .quote-input {
    margin-top: 20px;
    width: 100%;
  }
  @media (min-width: 768px) {
    .door-dimensions__item {
      &_img { grid-area: img; }
      &_ipt{ grid-area: ipt; }
      & > p { grid-area: txt;}
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-areas:'img txt' 'ipt ipt';
      column-gap: 100px;
      .quote-input {
        margin-top: 20px;
        width: 50%;
      }
    }
    .door-dimensions__draweritem {
      padding: 20px 0 40px;
      ${imgSizeResponsive('.door-dimensions__item_img', '70%')}
      .door-dimensions__item_img {
        margin-bottom: 20px;
      }
      .quote-input {
        margin-top: 20px;
        width: 50%;
      }
    }
  }
  @media (min-width: 1440px) {
    .door-dimensions__items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
    .door-dimensions__draweritem {
      ${imgSizeResponsive('.door-dimensions__item_img', '100%')};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px 0;
    }
  }
`;
