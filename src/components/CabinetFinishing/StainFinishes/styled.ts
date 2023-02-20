import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';

export const StStainFinishes = styled.div`
  padding: 15px 0;
  .stain-finishes__title {
    font-size: 15px;
    font-weight: ${FontWeight.bold};
  }

  .paint_glaze_finishes_text{
    font-weight: ${FontWeight.semiBold};
    font-size: 18px;
    padding-bottom: 20px;
  }
  .stain-finishes__examples {
    &-title {
      font-size: 15px;
      font-weight: ${FontWeight.bold};
      margin: 15px 0;
    }

    &-items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      column-gap: 108px;
    }
    &-item {
      max-width: 106px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-text {
        font-size: 15px;
        text-align: center;
      }
    }
  }

  @media (min-width: 768px) {
    .stain-finishes__title {
      font-size: 20px;
    }
    .stain-finishes__examples {
      &-title {
        font-size: 18px;
      }
      &-items {
        column-gap: 80px;
      }
    }
  }

  @media (min-width: 1440px) {
    .paint_glaze_finishes_text{
      font-size: 20px;
    }
    .stain-finishes__examples {
      &-title {
        font-size: 20px;
      }
      &-items {
        column-gap: 60px;
      }
      &-items.glaze {
        justify-content: flex-start;
      }
      &-item {
        &-text {
          font-size: 18px;
        }
      }
    }
  }
`;
