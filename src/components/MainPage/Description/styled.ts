import { StFlex } from '@/components/common/styled/Block';
import { colors } from '@/constants/colors';
import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';

export const StDescription = styled(StFlex)`
  left: -140px;
  width: 493px;
  height: 297px;
  border: 1px solid black;
  position: absolute;
  z-index: 10;
  background-color: ${colors.white_opacity};
  flex-direction: column;
  padding: 37px 0 0 20px;
  color: ${colors.gray};
  backdrop-filter: blur(15.5px);
  .description {
    &__company-name {
      color: ${colors.darkGray};
      font-weight: ${FontWeight.bold};
    }
    &__tagline {
      font-size: 24px;
      margin: 12px 0;
      font-weight: ${FontWeight.regular};
    }
    &__text {
      font-size: 20px;
      font-weight: ${FontWeight.medium};
    }
  }
  @media (max-width: 769px) {
    top: 57px;
    width: 329px;
    height: 251px;
    left: 50%;
    transform: translatex(-50%);
    .description {
      &__tagline {
        font-size: 20px;
        margin: 12px 0;
        font-weight: ${FontWeight.regular};
      }
      &__text {
        font-size: 18px;
        font-weight: ${FontWeight.medium};
      }
  }
  } 
`;
