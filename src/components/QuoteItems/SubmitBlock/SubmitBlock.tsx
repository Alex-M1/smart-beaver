import Button from '@/components/common/Button';
import { Locales, locales } from '@/constants/locales';
import { useAppStore } from '@/state/reducer';
import { reset, sendForm } from '@/state/selectors';
import { RequestType } from '@/state/types';
import React from 'react';
import QuoteInput from '../QuoteInput';
import { StSubmitBlock } from './styled';

interface Props {
  title: Locales;
  formType: RequestType;
}

const SubmitBlock: React.FC<Props> = ({ title, formType }) => {
  const resetForm = useAppStore(reset);
  const send = useAppStore(sendForm);

  const handleSend = () => send(formType);

  return (
    <StSubmitBlock>
      <p className="small-text bold">{locales[title]}</p>
      <div className="submit-block">
        <QuoteInput inputType="submitBlockInput" />
        <div className="submit-block__buttons">
          <Button onClick={handleSend} content={locales.submit} color="warning" borderRadius="100px" />
          <Button onClick={resetForm} content={locales.reset_form} color="warning" borderRadius="100px" />
        </div>
      </div>
    </StSubmitBlock>
  );
};

export default SubmitBlock;
