import React from 'react';
import { locales } from '@/constants/locales';
import AdvantageItem from './AdvantageItem';
import { AdvantageWrapper } from './styled';

const Advantages: React.FC = () => (
  <AdvantageWrapper className="container">
    <AdvantageItem name="expert_craft" title={locales.expert_craft_title} text={locales.expert_craft_text} />
    <AdvantageItem name="design_no_limit" title={locales.design_no_limit_title} text={locales.design_no_limit_text} />
    <AdvantageItem name="superior_qauality" title={locales.superior_quality_title} text={locales.superior_quality_text} />
    <AdvantageItem name="unsurpassed_value" title={locales.unsurpassed_value_title} text={locales.unsurpassed_value_text} />
  </AdvantageWrapper>
);

export default Advantages;
