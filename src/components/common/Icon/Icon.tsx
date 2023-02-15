import Image from 'next/image';
import React from 'react';
import { IconNames } from './types';
import { StDiv } from '../styled/Block';

interface Props {
  alt: string;
  ext?: 'jpg' | 'png' | 'svg';
  fill?: boolean;
  name: IconNames;
  width?: string;
  margin?: string;
  quality?: number;
  height?: number;
  padding?: string;
  className?: string;
  onClick?: (evt: React.MouseEvent<HTMLImageElement>) => void;
}

const Icon: React.FC<Props> = ({
  ext = 'png', width, margin, fill, quality = 75, className, padding, ...props
}) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const path = require(`public/icons/${props.name}.${ext}`).default;

  return fill ? (
    <StDiv className={className} padding={padding} width={width} position="relative">
      <Image {...props} quality={quality} src={path} style={{ width, margin, objectFit: 'contain' }} />
    </StDiv>
  )
    : <Image className={className} quality={quality} {...props} src={path} style={{ padding, width, margin }} />;
};

export default Icon;
