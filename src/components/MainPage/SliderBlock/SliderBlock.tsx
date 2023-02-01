import React, { RefObject, useEffect, useState } from 'react';
import { StDiv, StFlex, StGrid } from '@/components/common/styled/Block';
import Slider from '@/components/common/Slider';
import { colors } from '@/constants/colors';
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

  return (
    <StFlex bgColor={colors.brownLight}>
      <StGrid className="container" columns={`${width}px auto`}>
        <StDiv height="100%" bgColor={colors.white} />
        <StSliderBackground>
          <Description />
          <Slider />
        </StSliderBackground>
      </StGrid>
    </StFlex>
  );
};

export default SliderBlock;
