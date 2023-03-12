import { GlobalStyle } from '@/components/common/styled/Global';
import Modal from '@/components/Modal';
import type { AppProps } from 'next/app';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Modal />
      <Component {...pageProps} />
    </>
  );
}
