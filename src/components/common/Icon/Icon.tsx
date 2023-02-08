import Image from 'next/image';
import React from 'react';
import { padding } from '@mui/system';
import { IconNames } from './types';
import { StDiv } from '../styled/Block';

interface Props {
  alt: string;
  ext?: 'jpg' | 'png' | 'svg';
  fill?: boolean;
  name: IconNames;
  width?: string;
  margin?: string;
  height?: number;
  padding?: string;
  className?: string;
  onClick?: (evt: React.MouseEvent<HTMLImageElement>) => void;
}

const Icon: React.FC<Props> = ({
  ext = 'jpg', width, margin, fill, className, padding, ...props
}) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const path = require(`public/icons/${props.name}.${ext}`).default;

  return fill ? (
    <StDiv className={className} padding={padding} width={width} position="relative">
      <Image {...props} src={path} style={{ width, margin, objectFit: 'contain' }} />
    </StDiv>
  )
    : <Image className={className} {...props} src={path} style={{ padding, width, margin }} />;
};

export default Icon;
