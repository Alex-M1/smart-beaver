import React from 'react';
import MuiModal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { Locales, locales } from '@/constants/locales';
import { useAppStore } from '@/state/reducer';
import { getModalState } from '@/state/selectors';
import { ModalNames } from '@/state/types';
import { StSpan } from '../common/styled/Text';
import {
  CheckIcon,
  CloseIcon,
  ModalBox,
  ModalTitle,
} from './styled';
import Icon from '../common/Icon';
import { IconNames } from '../common/Icon/types';

interface Props {
  modalType: ModalNames;
  title: Locales;
  text: Locales;
  icon: IconNames;
}

const Modal: React.FC<Props> = ({
  modalType, text, title, icon,
}) => {
  const isOpen = useAppStore(getModalState(modalType));
  const setModalState = useAppStore((state) => state.setModalState);

  const handleClose = () => setModalState({ modalType, value: false });
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
          <CheckIcon><Icon fill alt={icon} name={icon} ext="png" /></CheckIcon>
          <ModalTitle>
            {locales[title]}
          </ModalTitle>
          <StSpan>
            {locales[text]}
          </StSpan>
        </ModalBox>
      </Fade>
    </MuiModal>
  );
};

export default Modal;
