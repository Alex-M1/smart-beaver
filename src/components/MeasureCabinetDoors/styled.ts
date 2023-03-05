import { colors } from '@/constants/colors';
import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StMesureCabinetDoors = styled.div`
  padding: 5% 5% 7%;
  max-width: 1440px;
  margin: 0 auto;
  .large-title {
    font-size: 25px;
    color: ${colors.dark_red};
    padding: 0.8%;
  }
  .small-title {
    font-size: 20px;
    padding: 0.8% 0;
  }
  .text {
    font-size: 18px;
    padding: 0.8% 0;
  }
  .red {
    color: ${colors.dark_red};
  }

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

  @media (max-width: 769px) {
    .large-title {
      font-size: 22px;
    }
    .small-title {
      font-size: 18px;
    }
    .text {
      font-size: 15px;
    }
  }
  @media (max-width: 426px) {
    .large-title {
      font-size: 20px;
    }
    .small-title {
      font-size: 16px;
    }
    .text {
      font-size: 12px;
    }
  }
  @media print {
      @page {
        size: A4;
        margin: 0;
      }
    }
`;
