import { FontWeight } from '@/constants/ui';
import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StDoorsDrawers = styled.div`
  .cabinet-doors {
    &__preview {  
      display: flex;
      flex-direction: column;
      align-items: center;
      &_descr {
        font-size: 15px;
        font-weight: ${FontWeight.bold};
        margin-bottom: 15px;
      }
      &_preview-recipe {
        font-size: 15px;
        font-weight: ${FontWeight.light};
        margin-bottom: 15px;
      }
      ${imgSizeResponsive('&_img-wrapper', '100%')}
    }

    &__catalog {
      &_title {
        font-size: 20px;
        font-weight: ${FontWeight.bold};
        margin: 20px 0;
      }
      ${imgSizeResponsive('&_example-img-wrapper', '100%')}

      &_example {
        &-title {
          font-size: 18px !important;
          font-weight: ${FontWeight.bold} !important;
          margin-bottom: 10px;
        }
        &-img-wrapper {
          margin: 15px 0;
        }
        ul ,p {
          line-height: 150%;
          font-weight: ${FontWeight.light};
          font-size: 15px;
        }
        &-list {
          list-style-type: none;
          margin: 0;
        }
      }
    }
  }

  .general-door {
    margin: 20px 0;
    &__title {
      font-size: 18px;
      font-weight: ${FontWeight.bold};
    }
    ${imgSizeResponsive('&__img', '100%')}
    &__img {
      margin: 15px 0;
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    .cabinet-doors {
      &__preview {
        margin: 15px 0;
        flex-direction: row-reverse;
        &_img-wrapper {
          flex-basis: 50%;
        }
        &_descr {
          font-size: 18px;
        }
        &_content {
          flex-basis: 50%;
          margin-right: 15px;
        }
      }

      &__catalog {
        &_example {
          display: flex;
          gap: 20px;
          &-img-wrapper {
            flex-basis: 50%;
            align-self: start;
          }
          &-block {
            flex-basis: 50%;
          }
          &.reverse {
            flex-direction: row-reverse;
          }
          &-note{
            margin-top: 15px;
          }
        }
      }
    }
    .general-door {
      &__img {
        width: 80%;
      }
    }
  }

  @media (min-width: 1024px) {
    .cabinet-doors {
      &__preview {
        margin: 50px 0;
        &_img-wrapper {
          flex-basis: 40%;
        }
        &_content {
          flex-basis: 60%;
        }
        &_descr {
          font-size: 20px;
        }
        &_preview-recipe {
          font-size: 18px;
        }
      }
      &__catalog {
        &_example {
          gap: 40px;
          &-title {
            font-size: 20px !important;
          }
          ul ,p {
            font-size: 18px;
          }
          &-note{
            margin-top: 30px;
          }
        }
      }
    }
    .general-door {
      &__title {
        font-size: 20px;
      }
      &__img {
        width: 60%;
      }
    }
  }
  @media (min-width: 1440px) {
    .cabinet-doors {
      &__catalog {
        &_example {
          gap: 290px;
        }
      }
    }
  }
`;
