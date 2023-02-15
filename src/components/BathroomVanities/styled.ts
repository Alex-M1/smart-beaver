import { colors } from '@/constants/colors';
import { FontWeight } from '@/constants/ui';
import { imgSize } from '@/helpers/ui';
import styled from 'styled-components';

export const StBathroom = styled.div`
  margin-top: 15px;
  .bathroom {
    &__preview {
      display: flex;
      flex-direction: column;
      align-items: center;
      ${imgSize('&-img', '319px', '181px')}
    }
    &__descr {
      margin: 15px 0;
      font-size: 15px;
      font-weight: ${FontWeight.bold};
    }


    &__cabinet {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__features {
      p {
        text-align: start;
        font-size: 15px;
        font-weight: ${FontWeight.bold};
        margin: 15px 0;
      }
      margin-bottom: 30px;
    }

    &__op {
      &-title {
        font-size: 18px;
        font-weight: ${FontWeight.bold};
        margin: 15px 0;
        color: ${colors.darkGray};
      }
      &-items {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &-item-text {
        font-size: 15px;
        margin: 15px 0;
        font-weight: ${FontWeight.light};
      }
      ${imgSize('&-item-icon', '290px', '173px')}
    }
  }

  @media (min-width: 768px){
    .bathroom {
      &__preview {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        ${imgSize('&-img', '374px', '220px')}
        &-img {grid-area: img;}
        &-text {grid-area: txt;}
        grid-template-areas: "txt img";
      }
      &__descr {
        font-size: 18px;
        margin-right: 20px;
      }
      &__features {
        p {
        font-size: 18px;
        }
      }

      &__op {
        &-title {
          margin: 15px 0 40px;
        }
        &-items {
          flex-direction: row;
          justify-content: space-evenly;
          align-items: baseline;
        }
        &-item-text {
          margin: 30px 0;
          max-width: 301px;
        }
        ${imgSize('&-item-icon', '290px', '173px')}
      }
    }
  }

  @media (min-width: 1024px) {
    .bathroom {
      &__preview {
        ${imgSize('&-img', '574px', '332px')}
      }

      &__descr {
        font-size: 20px;
        margin-right: 20px;
      }

      &__features {
        p {
        font-size: 20px;
        }
      }
      &__op {
        &-item-text {
          font-size: 18px;
          max-width: auto;
        }
        ${imgSize('&-item-icon', '446px', '272px')}
      }
    }
  }
`;
