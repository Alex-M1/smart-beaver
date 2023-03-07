import { colors } from '@/constants/colors';
import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StPureBond = styled.div`
  padding: 40px 80px;
  p {
    padding-bottom: 15px;
  }
  .block {
    padding: 15px 0;
  }
  .text {
    font-size: 20px;
  }
  .large-title {
    font-size: 40px;;
  }
  .grey {
    color: ${colors.darkGray}
  }
  .small-title {
    font-size: 30px;
  }
  .purebond {
    &__first-block {
      display: grid;
      grid-template-columns: 6fr 1fr;
      column-gap: 40px;
      align-items: center;
    }
    &__second-block {
      display: grid;
      grid-template-columns: 1fr 4fr;
      column-gap: 40px;
      align-items: center;
    }
    &__third-block {
      display: grid;
      grid-template-columns: 4fr 1fr;
      column-gap: 40px;
      align-items: center;
    }
    &__video {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;
    }
    &__img {
      ${imgSizeResponsive('&', '100%')};
    }
    &__logo {
      ${imgSizeResponsive('&', '40%')};
      margin: 0 auto;
      padding: 20px 0;
    }
  }
  @media (max-width: 769px) {
    padding: 20px 40px;
    .large-title, .small-title {font-size: 25px;}
    .text {font-size: 15px;}
  }
`;
