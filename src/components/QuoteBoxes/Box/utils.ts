import { IconNames } from '@/components/common/Icon/types';
import { InputTypes } from '@/state/types';

export type ItemData = 'first' | 'third'
export type ReturnedData = {
  secondClassName: string;
  img: IconNames;
  input: InputTypes;
}
export const setBoxItemData = (itemData: ItemData): ReturnedData => (
  itemData === 'first' ? ({
    secondClassName: 'box__first-block',
    img: 'box_img1' as IconNames,
    input: 'boxInput1' as InputTypes,
  })
    : ({
      secondClassName: 'box__third-block',
      img: 'box_img2' as IconNames,
      input: 'boxInput2' as InputTypes,
    })
);
