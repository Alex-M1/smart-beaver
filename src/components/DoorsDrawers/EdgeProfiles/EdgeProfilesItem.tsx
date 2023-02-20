import { Locales, locales } from '@/constants/locales';
import React from 'react';
import { IconNames } from '@/components/common/Icon/types';
import Img from '@/components/common/Img';

interface Props {
  quantity: number;
  name: string;
}

const EdgeProfilesItem: React.FC<Props> = ({ name, quantity }) => {
  const array = new Array(quantity).fill(name);
  const setClass = (className: string) => `edge-profiles-item__${className}`;
  return (
    <div className="edge-profiles-item">
      <p className={setClass('title')}>{locales[`${name}_title` as Locales]}</p>
      {array.map((el, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={setClass(`items ${name === 'raised_panel' ? 'raised' : ''}`)} key={`${el}${i}`}>
          <div className={setClass('img-wrapper')}>
            <Img name={`${name}_profile${i + 1}` as IconNames} alt={name} width={200} height={200} />
          </div>
          <p className={setClass('short-name')}>{`${locales[`${name}` as Locales]}${i + 1}`}</p>
          <p className={setClass('formfactor')}>{locales[`${name}_profile${i + 1}` as Locales]}</p>
        </div>
      ))}
    </div>
  );
};

export default EdgeProfilesItem;
