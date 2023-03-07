import AppHead from '@/components/common/AppHead';
import Products from '@/components/Products';
import React from 'react';

const ProductsPage: React.FC = () => (
  <>
    <AppHead title="products" desription="description_text" />
    <Products />
  </>
);

export default ProductsPage;
