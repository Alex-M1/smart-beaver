import { locales } from '@/constants/locales';
import React from 'react';
import Img from '../common/Img';
import Template from '../common/Template';
import ContactForm from '../ContactForm';
import ProductsTitle from '../ProductsComponents/ProductsTitle';
import PolitiesAndTermsItem from './PolitiesAndTermsItem';
import PolitiesAndTermsQuote from './PolitiesAndTermsQuote';
import { StPolitiesAndTerms } from './styled';
import { policiesItems, quotes } from './utils';

const PolitiesAndTerms: React.FC = () => (
  <Template>
    <div className="content container">
      <ProductsTitle page={locales.polities_and_terms} />
      <StPolitiesAndTerms>
        <div className="pt__img-block reverse">
          <div className="pt__img"><Img name="policies_and_terms1" alt="polities preview" /></div>
          <PolitiesAndTermsItem titleKey="quotes" textKey="polities_and_terms_quotes_text" />
        </div>

        <div className="pt__quotes">
          {quotes.map((quote) => <PolitiesAndTermsQuote key={quote.title} {...quote} />)}
        </div>

        <div className="pt__img-block">
          <div className="pt__img"><Img name="policies_and_terms2" alt="polities preview" /></div>
          <PolitiesAndTermsItem titleKey="placing_an_order" textKey="placing_an_order_text" />
        </div>

        <div>
          {policiesItems.map((item) => <PolitiesAndTermsItem key={item.titleKey} {...item} />)}
        </div>
      </StPolitiesAndTerms>
    </div>
    <ContactForm />
  </Template>
);

export default PolitiesAndTerms;
