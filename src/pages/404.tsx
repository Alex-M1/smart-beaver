import AppHead from '@/components/common/AppHead';
import NotFound from '@/components/NotFound';
import React from 'react';

const NotFoundPage: React.FC = () => (
  <>
    <AppHead title="page_not_found" desription="page_not_found" />
    <NotFound />
  </>
);

export default NotFoundPage;
