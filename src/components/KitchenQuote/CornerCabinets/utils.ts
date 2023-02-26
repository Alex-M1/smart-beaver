import { IconNames } from '@/components/common/Icon/types';
import { locales } from '@/constants/locales';

type Return = {
  text: string;
  img: IconNames;
  alt: string;
}

export const checkData = (type: 'base' | 'wall'): Return => {
  switch (type) {
  case 'base':
    return {
      text: locales.corner_base_cabinets,
      img: 'corner_cabinets_base',
      alt: 'corner cabinet base example',
    };
  case 'wall':
    return {
      text: locales.corner_wall_cabinets,
      img: 'corner_cabinets_wall',
      alt: 'corner cabinet wall example',
    };
  default: throw new Error('Invalid type');
  }
};
