import { FontWeight } from '@/constants/ui';
import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StWoodSpeciesPreview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${imgSizeResponsive('.wood-species-preview__img', '100%', 'auto')};
  padding: 15px 0;
  .wood-species-preview__text {
    font-weight: ${FontWeight.bold};
    font-size: 15px;
  }
  .wood-species-preview__text-block {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
    padding: 40px 0;
    .wood-species-preview__img {
      flex-basis: 50%;
      height: 80%;
    }
    .wood-species-preview__text-block {
      flex-basis: 50%;
    }
    .wood-species-preview__text {
      font-size: 18px;
    }
  }

  @media (min-width: 1440px) {
    gap: 85px;
    .wood-species-preview__text {
      font-size: 20px;
    }
    .wood-species-preview__text-block {
      gap: 40px;
    }
    .wood-species-preview__img {
      flex-basis: 45%;
    }
    .wood-species-preview__text-block {
      flex-basis: 55%;
    }
  }
`;
