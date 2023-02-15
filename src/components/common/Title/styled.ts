import styled from 'styled-components';

export const StTitle = styled.div`
  position: relative;
  display: inline-block;
  background: url('/icons/title_bg.png');
  background-repeat: no-repeat;
  background-position-y: 25px;
  background-size: 100% auto;
  padding-right: 25px;
  &::before {
    content: '';
    position: absolute;
    height: 31px;
    width: 27px;
    background-color: rgba(84,79,64,.28);
    right:0;
    top: 10px;
  } 
`;
