import React from 'react';
import Modal from './Modal';

const SuccessModal: React.FC = () => (
  <Modal
    icon="check"
    modalType="successModal"
    text="aplication_sent_text"
    title="application_sent_title"
  />
);

export default SuccessModal;
