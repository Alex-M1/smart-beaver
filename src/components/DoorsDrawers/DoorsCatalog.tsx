import { locales } from '@/constants/locales';
import React from 'react';
import { catalogClassBuilder } from './utils';
import DoorsCatalogExampleItem from './DoorCatalogExampleItem';

const DoorsCatalog: React.FC = () => (
  <div className={catalogClassBuilder()}>
    <p className={catalogClassBuilder('title')}>{locales.cabinet_doors_catalog_title}</p>
    <DoorsCatalogExampleItem
      imgName="door_catalog_example1"
      title="solid_wood_doors"
      list={['solid_wood_list1', 'solid_wood_list2', 'solid_wood_list3']}
      text="solid_wood_text1"
      textList={['solid_wood_text2', 'solid_wood_text3', 'solid_wood_text4', 'solid_wood_text5', 'solid_wood_text6']}
    />

    <DoorsCatalogExampleItem
      imgName="door_catalog_example2"
      title="mdf_panel_title"
      list={['solid_wood_list1', 'solid_wood_list2', 'solid_wood_list3']}
      text="solid_wood_text1"
      textList={['solid_wood_text3', 'solid_wood_text4', 'solid_wood_text5', 'mdf_panel_text1']}
      isReverse
    />

    <DoorsCatalogExampleItem
      imgName="door_catalog_example3"
      title="drawer_fronts_title"
      list={['drawer_fronts_list1', 'drawer_fronts_list2']}
      text="drawer_fronts_text1"
      textList={['solid_wood_text2', 'solid_wood_text3', 'solid_wood_text4', 'solid_wood_text6']}
      isNote
    />
  </div>
);

export default DoorsCatalog;
