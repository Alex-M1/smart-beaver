import AppHead from '@/components/common/AppHead';
import MainPage from '@/components/MainPage';
import React from 'react';

export default function Home() {
  return (
    <>
      <AppHead title="company_name" desription="description_text" />
      <MainPage />
    </>
  );
}
