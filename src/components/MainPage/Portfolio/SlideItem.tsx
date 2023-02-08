import React from 'react';
import Icon from '@/components/common/Icon';
import { StFlex } from '@/components/common/styled/Block';
import { locales } from '@/constants/locales';
import { StPortfolioSlider } from './styled';

const SlideItem: React.FC = () => (
  <StPortfolioSlider>
    <StFlex ai="center" className="content">
      <span className="portfolio-slider__text">{locales.portfolio_slide_text_1}</span>
    </StFlex>
    <StFlex className="portfolio-slider__img-block" flexDirection="column">
      <StFlex>
        <Icon fill name="portfolio_slide_1_1" alt="portfolio-example-1" ext="png" />
        <Icon fill name="portfolio_slide_1_2" alt="portfolio-example-2" ext="png" />
      </StFlex>
      <Icon fill name="portfolio_slide_1_3" alt="portfolio-example-3" ext="png" />
      <Icon fill name="portfolio_slide_1_4" alt="portfolio-example-4" ext="png" />
    </StFlex>
  </StPortfolioSlider>
);

export default SlideItem;
