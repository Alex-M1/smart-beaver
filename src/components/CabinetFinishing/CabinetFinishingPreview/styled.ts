import { FontWeight } from '@/constants/ui';
import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StCabinetFinishingPreview = styled.div`
  margin: 20px 0;
  ${imgSizeResponsive('.cfp__img-wrapper', '100%', 'auto')};
  .cfp__title {
    font-size: 15px;
    font-weight: ${FontWeight.bold};
  }

  .cfp__item {
    display: flex;
    gap: 25px;
    padding: 10px 0;
    &-title {
      font-size: 15px;
      font-weight: ${FontWeight.bold};
    }

    &-text {
      font-size: 15px;
      font-weight: ${FontWeight.light};
      margin-top: 10px;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "title img" "items items";
    gap: 20px;
    .cfp__title {
      font-size: 18px;
      grid-area: title;
    }
    .cfp__img-wrapper{
      grid-area: img;
    }
    .cfp__content {
      grid-area: items;
    }
  }

  @media (min-width: 1024px) {
    grid-template-areas: "title img" "items img";
    .cfp__img-wrapper {
      img {
        height: 270px;
      }
    }
  }


  @media (min-width: 1440px) {
    .cfp__title {
    font-size: 20x;
    }
    .cfp__item {
      &-title {
        font-size: 20px;
      }

      &-text {
        font-size: 18px;
      }
    }
    .cfp__img-wrapper {
      img {
        height: 332px;
      }
    }
  }
`;
