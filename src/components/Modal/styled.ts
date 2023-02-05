import { colors } from '@/constants/colors';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

export const CheckIcon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  border-radius: 100%;
  background: ${colors.white};
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.1);
  font-size: 70px;
  color: ${colors.warning};
`;

export const ModalTitle = styled.h3`
  margin: 38px 0 34px 0;
`;

export const CloseIcon = styled(IconButton)`
  position: absolute;
  top: 20px;
  right: 20px;
`;
