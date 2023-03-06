import Button from '@/components/common/Button';
import Img from '@/components/common/Img';
import { locales } from '@/constants/locales';
import { urls, Urls } from '@/constants/urls';
import { useRouter } from 'next/router';
import React from 'react';
import { StMesureButtons } from './styled';

interface Props {
  url: Urls;
}

const MeasureButtons: React.FC<Props> = ({ url }) => {
  const { push } = useRouter();
  const handlePrintPage = () => window.print();
  const handlePrevPage = () => push(urls[url]);
  return (
    <>
      <hr />
      <StMesureButtons>
        <Button padding="10px 100px" color="warning" content={locales.previos_page} borderRadius="100px" onClick={handlePrevPage} />
        <Button padding="10px 100px" startIcon={<Img name="print" alt="print" ext="svg" width={18} height={18} />} color="warning" content={locales.print_page} borderRadius="100px" onClick={handlePrintPage} />
      </StMesureButtons>
    </>
  );
};

export default MeasureButtons;
