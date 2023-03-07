import { locales } from '@/constants/locales';
import React from 'react';
import Img from '../common/Img';
import Template from '../common/Template';
import MeasureButtons from '../MeasureItems/MeasureButtons';
import { StPureBond } from './styled';

const PureBond: React.FC = () => (
  <Template>
    <StPureBond>
      <div className="purebond__first-block">
        <div>
          <p className="text grey bold t-center">{locales.purebond_text1}</p>
          <p className="text bold t-center ws-pre-line">{locales.purebond_text2}</p>
        </div>
        <Img className="purebond__img" name="go_green" alt="go green" />
      </div>
      <Img name="purebond_logo" alt="purebond logo" className="purebond__logo" />
      <div className="block purebond__second-block">
        <Img className="purebond__img" name="purebond_img" alt="purebond_img" />
        <div>
          <p className="large-title bold">{locales.purebond_title}</p>
          <p className="text ws-pre-line bold">{locales.purebond_text3}</p>
        </div>
      </div>
      <div className="block">
        <p className="small-title bold">{locales.purebond_title2}</p>
        <p className="text">{locales.purebond_text4}</p>
      </div>
      <div className="block">
        <p className="small-title bold">{locales.purebond_title3}</p>
        <p className="text">{locales.purebond_text5}</p>
      </div>
      <div className="block">
        <p className="small-title bold">{locales.purebond_title4}</p>
        <p className="text  ws-pre-line">{locales.purebond_text6}</p>
      </div>
      <div className="block">
        <p className="large-title bold">{locales.purebond_title5}</p>
        <div className="purebond__third-block">
          <div>
            <p className="text bold">{locales.purebond_text7}</p>
            <p className="text">{locales.purebond_text8}</p>
          </div>
          <Img className="purebond__img" name="purebond_img2" alt="purebond img" />
        </div>
      </div>
      <div className="purebond__video">
        <p className="large-title bold ">{locales.purebond_title6}</p>
        <iframe width="971" height="506" src="https://www.youtube.com/embed/_nvkqmPVpSs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
      </div>
      <MeasureButtons url="start" />
    </StPureBond>
  </Template>
);

export default PureBond;
