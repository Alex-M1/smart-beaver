import Image from 'next/image';
import React from 'react';
import { IconNames } from '../Icon/types';

interface Props {
  width?: number;
  height?: number;
  name: IconNames;
  alt: string;
  priority?: boolean;
  quality?: number;
  ext?: 'png' | 'jpg' | 'jpeg' | 'svg' | 'gif' | 'webp' | 'ico' | 'bmp' | 'tiff';
}

const Img: React.FC<Props> = ({
  alt,
  ext = 'png',
  name,
  width = 500,
  height = 500,
  quality = 75,
  priority = false,
}) => (
  <Image
    width={width}
    height={height}
    src={`/icons/${name}.${ext}`}
    alt={alt}
    priority={priority}
    quality={quality}
  />
);

export default Img;
