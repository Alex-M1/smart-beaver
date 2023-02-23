import Icon from '@/components/common/Icon';
import Link from 'next/link';
import React from 'react';
import { StPureBond } from './styled';

interface Props {
  title: string;
  text: string;
  href: string;
}

const PureBond: React.FC<Props> = ({ text, title, href }) => (
  <StPureBond>
    <Icon name="pure_bond" ext="png" alt="pure_bond" />
    <p className="pure-bond__title">{title}</p>
    <p className="pure-bond__text">{text}</p>
    <Link href={href}>
      <Icon quality={100} name="request_quote" ext="png" alt="request_quote" />
    </Link>
  </StPureBond>
);

export default PureBond;
