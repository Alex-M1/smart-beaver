import { transitionScale } from '@/components/common/styled/mixins';
import { colors } from '@/constants/colors';
import { FontWeight } from '@/constants/ui';
import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StPureBond = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  .guid_img {
    ${imgSizeResponsive('&', '70%')}
    ${transitionScale};
  }
  .pure-bond {
    &__img, &__link  {
      cursor: pointer;
      ${transitionScale};
    }
    &__title {
      font-size: 25px;
      font-weight: ${FontWeight.bold};
      margin: 20px 0 10px;
    }

    &__text {
      color: ${colors.darkGray};
      line-height: 27px;
      font-size: 18px;
      font-weight: ${FontWeight.semiBold};
    }
  }

  @media (min-width: 768px){ 
    padding: 30px 0;
    align-items: start;
    .pure-bond {
      &__title {
        margin: 30px 0;
      }
      &__text {
        margin-bottom: 30px;
      }
    }
  }
  @media (min-width: 1024px){ 
    padding: 30px 0;
    align-items: start;
    &__title {
      margin: 50px 0 30px;
    }
    .pure-bond {
      &__text {
        font-size: 20px;
      }
    }
  }
`;
