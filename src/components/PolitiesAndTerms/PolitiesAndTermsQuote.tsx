import React from 'react';
import Img from '../common/Img';

interface Props {
  title: string;
}

const PolitiesAndTermsQuote: React.FC<Props> = ({ title }) => (
  <div className="pt__quote">
    <p className="pt__quote-title">{title}</p>
    <div className="pt__quote-img">
      <Img name="request_quote" alt="request quote" width={252} height={86} />
    </div>
  </div>
);

export default PolitiesAndTermsQuote;
