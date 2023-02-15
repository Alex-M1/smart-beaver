import { locales } from '@/constants/locales';
import React from 'react';
import Icon from '../common/Icon';
import Template from '../common/Template';
import ContactForm from '../ContactForm';
import ProductsTitle from '../ProductsComponents/ProductsTitle';
import { StSpecialtyIslands } from './styled';
import { specialtyIslandsNames } from './utils';

const SpecialtyIslands: React.FC = () => (
  <Template>
    <div className="content container">
      <ProductsTitle page={locales.specialty_islands} />
      <StSpecialtyIslands>
        <div className="specialty__preview">
          <Icon className="specialty__img" name="specialty_islands_main_img" alt="preview" fill ext="png" />
          <p className="specialty__descr1">{locales.specialty_descr1}</p>
        </div>
        <p className="specialty__descr2">{locales.specialty_descr2}</p>

        <div className="specialty__items">
          {specialtyIslandsNames.map((name) => (
            <div key={name} className="specialty__item">
              <Icon className="specialty__item-icon" name={name} alt={name} ext="png" fill />
              <p className="specialty__item-text">{locales[name]}</p>
            </div>
          ))}
        </div>
      </StSpecialtyIslands>
    </div>
    <ContactForm />
  </Template>
);

export default SpecialtyIslands;
