import Image from 'next/image';
import React from 'react';
import { IconNames } from './types';

interface Props {
  alt: string;
  ext?: 'jpg' | 'png' | 'svg';
  name: IconNames;
  width?: number;
  height?: number;
  onClick?: (evt: React.MouseEvent<HTMLImageElement>) => void;
}

const Icon: React.FC<Props> = ({ ext = 'jpg', ...props }) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const path = require(`public/icons/${props.name}.${ext}`).default;

  return <Image {...props} src={path} />;
};

export default Icon;
