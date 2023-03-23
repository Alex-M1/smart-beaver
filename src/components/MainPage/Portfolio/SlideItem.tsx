import React from 'react';
import { StFlex } from '@/components/common/styled/Block';
import { Locales, locales } from '@/constants/locales';
import { IconNames } from '@/components/common/Icon/types';
import Img from '@/components/common/Img';
import { StPortfolioSlider } from './styled';

interface Props {
  index: number;
}

const SlideItem: React.FC<Props> = ({ index }) => {
  const setIconName = (iconNum: number) => `portfolio_slide_${index}_${iconNum}` as IconNames;
  return (
    <StPortfolioSlider>
      <StFlex ai="center" className="portfolio-slider__text-wrapper">
        <span className="portfolio-slider__text">{locales[`portfolio_slide_text_${index}` as Locales]}</span>
      </StFlex>
      <div className={`portfolio-slider__img-block index-${index}`}>
        <Img className="portfolio-slider__img ps-img1" name={setIconName(1)} alt="portfolio-example-1" />
        <Img className="portfolio-slider__img ps-img2" name={setIconName(2)} alt="portfolio-example-2" />
        <Img className="portfolio-slider__img ps-img3" name={setIconName(3)} alt="portfolio-example-3" />
        <Img className="portfolio-slider__img ps-img4" name={setIconName(4)} alt="portfolio-example-4" />
      </div>
    </StPortfolioSlider>
  );
};

export default SlideItem;
