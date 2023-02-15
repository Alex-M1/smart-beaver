import Icon from '@/components/common/Icon';
import React from 'react';
import { StPureBond } from './styled';

interface Props {
  title: string;
  text: string;
}

const PureBond: React.FC<Props> = ({ text, title }) => (
  <StPureBond>
    <Icon name="pure_bond" ext="png" alt="pure_bond" />
    <p className="pure-bond__title">{title}</p>
    <p className="pure-bond__text">{text}</p>
    <div>
      <Icon quality={100} name="request_quote" ext="png" alt="request_quote" />
      <Icon quality={100} name="click_prices" ext="png" alt="click_prices" />
    </div>
  </StPureBond>
);

export default PureBond;
