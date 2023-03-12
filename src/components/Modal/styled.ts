import { colors } from '@/constants/colors';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 570px;
  border-radius: 10px;
  text-align: center;
  padding: 46px 37px 66px;
  background: #fff;

  @media (max-width: 426px) {
    width: 360px;
  }
  @media (max-width: 376px) {
    width: 300px;
  }
`;

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
  @media (max-width: 426px) {
    width: 71px;
    height: 71px;
    img {
      max-width: 34px;
    }
  }
`;

export const ModalTitle = styled.h3`
  margin: 38px 0 34px 0;
`;

export const CloseIcon = styled(IconButton)`
  position: absolute !important;
  top: 20px;
  right: 20px;
`;
