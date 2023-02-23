import { colors } from '@/constants/colors';
import { FontWeight } from '@/constants/ui';
import { imgSizeResponsive } from '@/helpers/ui';
import styled from 'styled-components';

export const StPortfolioSlider = styled.div`
  background-color: ${colors.brownLight};
  padding: 50px 20px 0;
  display: flex;
  flex-direction: column-reverse;
  height: 1500px;
  justify-content: flex-end;
  .portfolio-slider {
    &__text {
      color: ${colors.white};
      font-size: 15px;
      font-weight: ${FontWeight.bold};
      white-space: pre-wrap;
      line-height: 30px;
    }
    ${imgSizeResponsive('&__img', '100%')}
    &__img-block {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .ps-img1, .ps-img2 {
    flex-basis: 50%;
  }
  .ps-img3, .ps-img4 {
    flex-basis: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 20px 90px;
    height: 1200px;
    .portfolio-slider {
      &__img-block {
        padding: 0 135px;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    height: 830px;
    .portfolio-slider {
      &__img-block {
        padding: 0;
      }
      &__text-wrapper {
        flex-basis: 60%;
      }
      &__img-block {
        flex-basis: 40%;
      }
      ${imgSizeResponsive('&__img', '50%', '15%')}
    }
  }

  @media (min-width: 1440px) {
    padding: 50px 40px 0;
    column-gap: 5%;
    .portfolio-slider {
      &__text {
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
`;

export const SliderWrapper = styled.div`
  margin: 20px 0;
  .carousel-slider {
    padding: 0;
  }
  .carousel .control-dots {
    top: auto;
    bottom: 100px;
  }
  .carousel.carousel-slider .control-arrow {
    bottom: 50px;
    top: auto;
  }
  .carousel.carousel-slider .control-arrow.control-next {
    left: 50%;
    transform: translateX(10%)
  }

  .carousel.carousel-slider .control-arrow.control-prev {
    left: 50%;
    transform: translateX(-110%)
  }

  @media (min-width: 768px){
    margin: 20px 20px 0;
    .carousel .control-dots {
      top: auto;
      bottom: 100px;
    }
    .carousel.carousel-slider .control-arrow {
      bottom: 0px;
      top: auto;
    }
    .carousel .slide {
      height: 1250px;
    }
  }

  @media (min-width: 1024px){
    margin: 20px 100px 0;

    .carousel .slide {
      height: fit-content;
      padding: 0 70px;
    }
    .carousel .control-dots {
      top: auto;
      bottom: 30px;
    }
    .carousel.carousel-slider .control-arrow {
      bottom: 50%;
      transform: translateY(-50%);
    }
    .carousel.carousel-slider .control-arrow.control-next {
      left: 770px;
    }

    .carousel.carousel-slider .control-arrow.control-prev {
      left: 55px;
    }
  }

  @media (min-width: 1440px){
    .carousel.carousel-slider .control-arrow.control-next {
      left: 1180px;
    }
  }
`;
