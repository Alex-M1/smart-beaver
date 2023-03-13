import React from 'react';
import Img from '@/components/common/Img';
import QuoteCheckBox from '@/components/QuoteItems/QuoteCheckBox';
import { locales } from '@/constants/locales';
import { StDrawerBox } from './styled';

const DrawerBox: React.FC = () => (
  <StDrawerBox>
    <p className="small-text bold">{locales.drawer_box_title}</p>
    <div className="drawer-box__items">
      <div className="drawer-box__item">
        <div>
          <Img className="drawer-box__img" name="back_end_notching" alt="example" />
          <QuoteCheckBox field="drawerBoxes" name="notched" textKey="notched" />
        </div>
        <div>
          <p className="small-text bold">{locales.drawer_box_back_end_notching}</p>
          <p className="small-text bold ws-pre-line">{locales.drawer_box_back_end_notching_text}</p>
        </div>
      </div>
      <div className="drawer-box__item">
        <div className="drawer-box__item_example">
          <div>
            <Img className="drawer-box__img-finish" name="finish_img1" alt="example" />
            <QuoteCheckBox field="drawerBoxes" name="quote_unfinished" textKey="quote_unfinished" />
          </div>
          <div>
            <Img className="drawer-box__img-finish" name="finish_img2" alt="example" />
            <QuoteCheckBox field="drawerBoxes" name="quote_natural" textKey="quote_natural" />
          </div>
        </div>
        <div>
          <p className="small-text bold">{locales.drawer_box_finish}</p>
          <p className="small-text bold ws-pre-line">{locales.drawer_box_finish_text}</p>
        </div>
      </div>
    </div>
  </StDrawerBox>
);

export default DrawerBox;
