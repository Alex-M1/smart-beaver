import React from 'react';
import { StGrid } from '@/components/common/styled/Block';
import { locales } from '@/constants/locales';
import AdvantageItem from './AdvantageItem';

const Advantages: React.FC = () => (
  <StGrid className="container" columns="1fr 1fr 1fr 1fr" padding="15px 80px">
    <AdvantageItem name="expert_craft" title={locales.expert_craft_title} text={locales.expert_craft_text} />
    <AdvantageItem name="design_no_limit" title={locales.design_no_limit_title} text={locales.design_no_limit_text} />
    <AdvantageItem name="superior_qauality" title={locales.superior_quality_title} text={locales.superior_quality_text} />
    <AdvantageItem name="unsurpassed_value" title={locales.unsurpassed_value_title} text={locales.unsurpassed_value_text} />
  </StGrid>
);

export default Advantages;
