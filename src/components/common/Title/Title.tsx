import React from 'react';
import { StTitle } from './styled';

interface Props {
  text: string;
  posX?: string;
}

const Title: React.FC<Props> = ({ text, posX = '40px' }) => (
  <StTitle posX={posX}>
    <h1>
      {text}
    </h1>
  </StTitle>
);

export default Title;
