import React from 'react';
import { StTitle } from './styled';
import { StDiv } from '../styled/Block';

interface Props {
  text: string;
  textAlign?: 'left' | 'right'
  className?: string;
}

const Title: React.FC<Props> = ({
  text, textAlign = 'left', className,
}) => (
  <StDiv className={className} textAlign={textAlign}>
    <h1>
      {text.slice(0, 1)}
      <StTitle>{text.slice(1)}</StTitle>
    </h1>
  </StDiv>

);

export default Title;
