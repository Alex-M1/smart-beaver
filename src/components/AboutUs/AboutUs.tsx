import { locales } from '@/constants/locales';
import React from 'react';
import Icon from '../common/Icon';
import Template from '../common/Template';
import Title from '../common/Title';
import { StAboutUs } from './styled';

const AboutUs: React.FC = () => (
  <Template>
    <div className="container">
      <StAboutUs>
        <Title text={locales.about_us} />
        <div className="about-us">
          <div className="about-us__container">
            <div className="about-us__image">
              <Icon name="about_us_photo" alt="about us" ext="png" />
            </div>
            <div className="about-us__text">
              <p className="about-us__str p-1">{locales.about_us_p1}</p>
              <p className="about-us__str p-2">{locales.about_us_p2}</p>
              <p className="about-us__str p-3">{locales.about_us_p3}</p>
              <p className="about-us__str p-4">{locales.about_us_p4}</p>
            </div>
          </div>
        </div>
      </StAboutUs>
    </div>

  </Template>
);

export default AboutUs;
