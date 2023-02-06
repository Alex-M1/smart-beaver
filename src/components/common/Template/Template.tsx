import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { RefObject } from 'react';

interface Props extends React.PropsWithChildren {
  iconRef?: RefObject<HTMLDivElement>;
}

const Template: React.FC<Props> = ({ iconRef, children }) => (
  <>
    <Header iconRef={iconRef} />
    {children}
    {/* <Footer /> */}
  </>
);

export default Template;
