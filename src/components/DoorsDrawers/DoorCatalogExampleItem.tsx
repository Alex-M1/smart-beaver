import { Locales, locales } from '@/constants/locales';
import React from 'react';
import { IconNames } from '../common/Icon/types';
import Img from '../common/Img';
import { catalogClassBuilder } from './utils';

interface Props {
  text: Locales;
  list: Locales[];
  title: Locales;
  imgName: IconNames;
  textList: Locales[];
  isReverse?: boolean;
  isNote?: boolean;
}

const DoorCatalogExampleItem: React.FC<Props> = ({
  text,
  list,
  title,
  isNote,
  imgName,
  textList,
  isReverse,
}) => (
  <div className={catalogClassBuilder(`example ${isReverse ? 'reverse' : ''}`)}>
    <div className={catalogClassBuilder('example-img-wrapper')}>
      <Img name={imgName} alt={imgName} />
    </div>
    <div className={catalogClassBuilder('example-block')}>
      <p className={catalogClassBuilder('example-title')}>{locales[title]}</p>
      <p className={catalogClassBuilder('example-text')}>{locales[text]}</p>
      <ul className={catalogClassBuilder('example-list')}>
        {list.map((item) => <li key={item}>{locales[item]}</li>)}
      </ul>
      {textList.map((item) => <p className={catalogClassBuilder('example-text-list')} key={item}>{locales[item]}</p>)}
      {isNote ? <p className={catalogClassBuilder('example-note')}>{locales.drawer_fronts_note}</p> : null}
    </div>
  </div>
);

export default DoorCatalogExampleItem;
