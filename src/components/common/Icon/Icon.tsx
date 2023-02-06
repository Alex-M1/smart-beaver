import Image from 'next/image';
import React from 'react';
import { IconNames } from './types';
import { StDiv } from '../styled/Block';

interface Props {
  alt: string;
  ext?: 'jpg' | 'png' | 'svg';
  fill?: boolean;
  name: IconNames;
  margin?: string;
  width?: string;
  height?: number;
  onClick?: (evt: React.MouseEvent<HTMLImageElement>) => void;
}

const Icon: React.FC<Props> = ({
  ext = 'jpg', width, margin, fill, ...props
}) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const path = require(`public/icons/${props.name}.${ext}`).default;

  return fill ? (
    <StDiv width={width} position="relative">
      <Image {...props} src={path} style={{ width, margin }} />
    </StDiv>
  )
    : <Image {...props} src={path} style={{ width, margin }} />;
};

export default Icon;
