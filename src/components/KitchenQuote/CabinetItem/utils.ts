import { IconNames } from '@/components/common/Icon/types';
import { locales } from '@/constants/locales';
import { InputTypes } from '@/state/types';

export type CabinetDataType = 'base_cabinets' | 'wall_cabinets' | 'pantry_cabinets';
type ReturnData = {
  title: string;
  text: string;
  inputType: InputTypes;
  img: IconNames;
  alt: string;
  pantry: string
}

export const getCabinetItemData = (type: CabinetDataType): ReturnData => {
  switch (type) {
  case 'base_cabinets':
    return {
      title: locales.base_cabinets_sizes,
      text: locales.base_cabinets_pre_input,
      inputType: 'baseCabinetsInput',
      img: 'base_cabinet_length',
      alt: 'base cabinet preview',
      pantry: '',
    };
  case 'wall_cabinets':
    return {
      title: locales.wall_cabinets_sizes,
      text: locales.wall_cabinets_pre_input,
      inputType: 'wallCabinetsInput',
      img: 'wall_cabinet_length',
      alt: 'wall cabinet preview',
      pantry: '',
    };
  case 'pantry_cabinets':
    return {
      title: locales.pantry_cabinets_sizes,
      text: locales.pantry_cabinets_pre_input,
      inputType: 'pantryCabinetsInput',
      img: 'pantry_cabinet_length',
      alt: 'pantry cabinet preview',
      pantry: 'pantry',
    };
  default: throw new Error('Invalid cabinet type');
  }
};
