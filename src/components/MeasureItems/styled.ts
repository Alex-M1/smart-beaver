import { colors } from '@/constants/colors';
import { css } from 'styled-components';

export const measureMixins = css`
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
