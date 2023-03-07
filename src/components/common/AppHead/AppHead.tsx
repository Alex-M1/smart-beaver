import { locales, Locales } from '@/constants/locales';
import { capitalizeWords } from '@/helpers/ui';
import Head from 'next/head';
import React from 'react';

interface Props {
  title: Locales;
  desription: Locales;
}

const AppHead: React.FC<Props> = ({
  title,
  desription,
}) => (
  <Head>
    <title>{capitalizeWords(locales[title])}</title>
    <meta name="description" content={locales[desription]} />
  </Head>
);

export default AppHead;
