import { FontWeight } from '@/constants/ui';
import styled from 'styled-components';

export const StCabinetFinishingText = styled.div`
  p {
    font-size: 15px;
    font-weight: ${FontWeight.bold};
    margin: 20px 0;
  }
  .cf__semi {
    font-weight: ${FontWeight.semiBold};
  }

  @media (min-width: 768px) {
    p {
      font-size: 18px;
    }
  }
  @media (min-width: 1440px) {
    p {
      font-size: 20px;
      margin: 30px 0;
    }
  }
`;
