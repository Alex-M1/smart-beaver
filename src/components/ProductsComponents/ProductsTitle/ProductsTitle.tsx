import { locales } from '@/constants/locales';
import React from 'react';
import { StProductsTitle } from './styled';

interface Props {
  page: string;
}

const ProductsTitle: React.FC<Props> = ({ page }) => (
  <StProductsTitle>
    <h1>{locales.products}</h1>
    <span>{page}</span>
  </StProductsTitle>
);

export default ProductsTitle;
