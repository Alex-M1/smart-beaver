import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GlobalStyle } from '@/components/common/styled/Global';
import type { AppProps } from 'next/app';
import Modals from '@/components/Modal/Modals';
import { initializeTagManager, trackPageView } from '@/helpers/tagManager';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  useEffect(initializeTagManager, []);
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);
  return (
    <>
      <GlobalStyle />
      <Modals />
      <Component {...pageProps} />
    </>
  );
}
