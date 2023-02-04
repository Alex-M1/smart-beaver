import Image from 'next/image';
import React from 'react';
import { IconNames } from './types';

interface Props {
  alt: string;
  ext?: 'jpg' | 'png' | 'svg';
  name: IconNames;
  margin?: string;
  width?: string;
  height?: number;
  onClick?: (evt: React.MouseEvent<HTMLImageElement>) => void;
}

const Icon: React.FC<Props> = ({
  ext = 'jpg', width, margin, ...props
}) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const path = require(`public/icons/${props.name}.${ext}`).default;

  return <Image {...props} src={path} style={{ width, margin }} />;
};

export default Icon;
