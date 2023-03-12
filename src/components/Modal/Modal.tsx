import React from 'react';
import MuiModal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { locales } from '@/constants/locales';
import { useAppStore } from '@/state/reducer';
import { getModalState } from '@/state/selectors';
import { StSpan } from '../common/styled/Text';
import {
  CheckIcon,
  CloseIcon,
  ModalBox,
  ModalTitle,
} from './styled';
import Icon from '../common/Icon';

const Modal: React.FC = () => {
  const isOpen = useAppStore(getModalState('successModal'));
  const setModalState = useAppStore((state) => state.setModalState);

  const handleClose = () => setModalState({ modalType: 'successModal', value: false });
  return (
    <MuiModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <ModalBox>
          <CloseIcon onClick={handleClose}><Icon alt="close" name="cross" ext="png" /></CloseIcon>
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
};

export default Modal;
