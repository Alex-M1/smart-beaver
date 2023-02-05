import React from 'react';
import MuiModal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { locales } from '@/constants/locales';
import { StSpan } from '../common/styled/Text';
import { CheckIcon, CloseIcon, ModalTitle } from './styled';
import Icon from '../common/Icon';

interface Props {
  open: boolean;
  onClose: () => void;
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 570,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  padding: '46px 37px 66px',
};

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
      <Box sx={style}>
        <CloseIcon onClick={onClose}><Icon alt="close" name="cross" ext="png" /></CloseIcon>
        <CheckIcon><Icon alt="check" name="check" ext="png" /></CheckIcon>
        <ModalTitle>
          {locales.application_sent_title}
        </ModalTitle>
        <StSpan>
          {locales.aplication_sent_text}
        </StSpan>
      </Box>
    </Fade>
  </MuiModal>
);

export default Modal;
