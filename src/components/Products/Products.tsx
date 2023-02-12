import { locales } from '@/constants/locales';
import { urls } from '@/constants/urls';
import Link from 'next/link';
import React from 'react';
import Icon from '../common/Icon';
import Template from '../common/Template';
import Title from '../common/Title';
import { StProducts } from './styled';
import { products } from './utils';

const Products: React.FC = () => (
  <Template>
    <StProducts className="container content">
      <Title text={locales.products} />
      <div className="products">
        {products.map((name) => (
          <Link href={urls[name]} key={name} className={`products-item products-item-${name}`}>
            <Icon className="products-item-icon " fill alt="prewiew" name={name} ext="png" />
            <span>{locales[name]}</span>
          </Link>
        ))}
      </div>
    </StProducts>
  </Template>
);

export default Products;
