import React from 'react';
import Template from '../common/Template';
import Title from '../common/Title';
import ContactForm from '../ContactForm';
import PreviewBlock from './PreviewBlock';
import StandartFeatures from './StandartFeatures';

const KitchenCabinets: React.FC = () => (
  <Template>
    <div className="content container">
      <Title text="Kb" />
      <PreviewBlock />
      <StandartFeatures />
    </div>
    <ContactForm />
  </Template>
);

export default KitchenCabinets;
