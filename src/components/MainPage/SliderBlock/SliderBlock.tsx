import React, { RefObject, useEffect, useState } from 'react';
import { StDiv, StFlex, StGrid } from '@/components/common/styled/Block';
import Slider from '@/components/common/Slider';
import { colors } from '@/constants/colors';
import Icon from '@/components/common/Icon';
import { StSliderBackground } from './styled';
import Description from '../Description';

interface Props {
  iconRef?: RefObject<HTMLDivElement>;
}

const SliderBlock: React.FC<Props> = ({ iconRef }) => {
  const [width, setWidth] = useState<number>(200);
  useEffect(() => {
    setWidth(iconRef?.current?.getBoundingClientRect().width || width);
  }, [iconRef?.current?.getBoundingClientRect().width]);

  const slides = [
    <div key="slider_block_slide_1"><Icon alt="example-1" name="slider_img1" width="852px" height={576} /></div>,
    <div key="slider_block_slide_2"><Icon alt="example-2" name="slider_img2" width="852px" height={576} /></div>,
    <div key="slider_block_slide_3"><Icon alt="example-3" name="slider_img3" width="852px" height={576} /></div>,
    <div key="slider_block_slide_4"><Icon alt="example-4" name="slider_img4" width="852px" height={576} /></div>,
  ];

  return (
    <StFlex bgColor={colors.brownLight}>
      <StGrid className="container" columns={`${width}px auto`}>
        <StDiv height="100%" bgColor={colors.white} />
        <StSliderBackground>
          <Description />
          <Slider slides={slides} width="852px" />
        </StSliderBackground>
      </StGrid>
    </StFlex>
  );
};

export default SliderBlock;
