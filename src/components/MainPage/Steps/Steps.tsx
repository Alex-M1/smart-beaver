import { StDiv, StGrid } from '@/components/common/styled/Block';
import React from 'react';
import { locales } from '@/constants/locales';
import { ICON_NAMES } from '@/components/common/Icon/types';
import Title from '@/components/common/Title';
import Step from './Step';

const Steps: React.FC = () => {
  const items = [
    { title: locales.measurements_title, text: locales.measures_text, iconName: ICON_NAMES.roulette },
    { title: locales.project_design_title, text: locales.project_design_text, iconName: ICON_NAMES.kitchen_design },
    { title: locales.cost_calc_title, text: locales.cost_calc_text, iconName: ICON_NAMES.calculator },
    { title: locales.prepayment_title, text: locales.prepayment_text, iconName: ICON_NAMES.credit_card },
    { title: locales.furniture_title, text: locales.furniture_text, iconName: ICON_NAMES.woodmaker },
    { title: locales.delivery_title, text: locales.delivery_text, iconName: ICON_NAMES.delivery },
  ];
  return (
    <StDiv className="container" padding="62px 80px 94px 80px">
      <Title text={locales.work_order} posX="62px" />
      <StGrid columns="1fr 1fr 1fr" gap="14px 200px" margin="57px 0 0 0">
        {items.map((item, i) => <Step {...item} number={i + 1} key={item.iconName} />)}
      </StGrid>
    </StDiv>

  );
};

export default Steps;
