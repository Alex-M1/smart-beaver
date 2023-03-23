import Link from 'next/link';
import React from 'react';
import Img from '../common/Img';

interface Props {
  title: string;
  url: string;
}

const PolitiesAndTermsQuote: React.FC<Props> = ({ title, url }) => (
  <div className="pt__quote">
    <p className="pt__quote-title">{title}</p>
    <Link href={url} className="pt__quote-img">
      <Img name="request_quote" alt="request quote" width={252} height={86} />
    </Link>
  </div>
);

export default PolitiesAndTermsQuote;
