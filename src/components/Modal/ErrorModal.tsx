import React from 'react';
import Modal from './Modal';

const ErrorModal: React.FC = () => (
  <Modal
    icon="red_cross"
    title="oops"
    text="try_again"
    modalType="errorModal"
  />
);

export default ErrorModal;
