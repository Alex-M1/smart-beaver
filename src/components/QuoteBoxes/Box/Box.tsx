import { locales } from '@/constants/locales';
import React from 'react';
import BoxItem from './BoxItem';
import { StBox } from './styled';

const Box: React.FC = () => (
  <StBox>
    <p className="small-text bold ws-pre-line">{locales.box_title}</p>
    <p className="small-text bold ws-pre-line t-center">{locales.box_text}</p>
    <div className="box">
      <BoxItem itemData="first" />
      <div className="box__second-block">
        <p className="small-text bold ws-pre-line t-center">{locales.box_text2}</p>
        <p className="small-text bold ws-pre-line t-center">{locales.box_text3}</p>
      </div>
      <BoxItem itemData="third" />
    </div>
  </StBox>
);

export default Box;
