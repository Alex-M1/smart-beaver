import Icon from '@/components/common/Icon';
import Img from '@/components/common/Img';
import { locales } from '@/constants/locales';
import Link from 'next/link';
import React from 'react';
import { StPureBond } from './styled';

interface Props {
  title: string;
  text: string;
  href: string;
  guideUrl?: string;
}

const PureBond: React.FC<Props> = ({
  text, title, href, guideUrl,
}) => (
  <StPureBond>
    <Icon name="pure_bond" ext="png" alt="pure_bond" />
    <p className="pure-bond__title">{title}</p>
    <p className="pure-bond__text">{text}</p>
    <Link href={href}>
      <Icon quality={100} name="request_quote" ext="png" alt="request_quote" />
    </Link>
    {guideUrl
      ? (
        <div>
          <p className="bold small-text">{locales.measure_help}</p>
          <Link href={guideUrl}>
            <Img className="guid_img" name="measure_guide" alt="measure_guide" />
          </Link>
        </div>
      )
      : null}
  </StPureBond>
);

export default PureBond;
