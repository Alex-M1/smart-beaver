import React from 'react';
import MuiModal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { locales } from '@/constants/locales';
import { StSpan } from '../common/styled/Text';
import {
  CheckIcon, CloseIcon, ModalBox, ModalTitle,
} from './styled';
import Icon from '../common/Icon';

interface Props {
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ open, onClose }) => (
  <MuiModal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={open}
    onClose={onClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <ModalBox>
        <CloseIcon onClick={onClose}><Icon alt="close" name="cross" ext="png" /></CloseIcon>
        <CheckIcon><Icon fill alt="check" name="check" ext="png" /></CheckIcon>
        <ModalTitle>
          {locales.application_sent_title}
        </ModalTitle>
        <StSpan>
          {locales.aplication_sent_text}
        </StSpan>
      </ModalBox>
    </Fade>
  </MuiModal>
);

export default Modal;
