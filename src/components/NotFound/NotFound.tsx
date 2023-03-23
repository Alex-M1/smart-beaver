import { locales } from '@/constants/locales';
import { urls } from '@/constants/urls';
import Link from 'next/link';
import React from 'react';
import Button from '../common/Button';
import Header from '../Header';
import { StNotFound } from './styled';

const NotFound: React.FC = () => (
  <>
    <Header />
    <StNotFound>
      <div className="container content">
        <div className="not-found">
          <div className="not-found__description">
            <p className="not-found__description-title">{locales.not_found}</p>
            <p className="not-found__description-question">{locales.smth_went_wrong}</p>
            <p className="not-found__description-text">{locales.not_found_text}</p>
          </div>
          <div className="not-found__btn">

            <Link className="not-found__btn-main" href="/">
              <Button borderRadius="100px" color="primary">
                {locales.to_main}
              </Button>
            </Link>
            <Link className="not-found__btn-contact" href={urls.contact}>
              <Button borderRadius="100px" color="warning">
                {locales.contact}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </StNotFound>
  </>
);

export default NotFound;
