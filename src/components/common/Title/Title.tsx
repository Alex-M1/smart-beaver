import React from 'react';
import { StTitle } from './styled';
import { StDiv } from '../styled/Block';

interface Props {
  text: string;
  posX?: string;
  textAlign?: 'left' | 'right'
}

const Title: React.FC<Props> = ({ text, posX = '40px', textAlign = 'left' }) => (
  <StDiv textAlign={textAlign}>
    <StTitle posX={posX}>
      <h1>
        {text}
      </h1>
    </StTitle>
  </StDiv>

);

export default Title;
