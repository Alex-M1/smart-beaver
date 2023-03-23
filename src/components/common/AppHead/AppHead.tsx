import { locales, Locales } from '@/constants/locales';
import { capitalizeWords } from '@/helpers/ui';
import Head from 'next/head';
import React from 'react';

interface Props {
  title: Locales;
  isMain?: boolean;
  desription: Locales;
}

const AppHead: React.FC<Props> = ({
  title,
  isMain,
  desription,
}) => (
  <Head>
    {isMain
      ? <title>{capitalizeWords(locales[title])}</title>
      : <title>{`${locales.company_name} | ${capitalizeWords(locales[title])}`}</title>}
    <meta name="description" content={locales[desription]} />
  </Head>
);

export default AppHead;
