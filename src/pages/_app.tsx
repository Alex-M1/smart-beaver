import { GlobalStyle } from '@/components/common/styled/Global';
import type { AppProps } from 'next/app';
import React from 'react';
import Modals from '@/components/Modal/Modals';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Modals />
      <Component {...pageProps} />
    </>
  );
}
