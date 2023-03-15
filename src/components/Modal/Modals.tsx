import React from 'react';
import ErrorModal from './ErrorModal';
import SuccessModal from './SuccessModal';

const Modals: React.FC = () => (
  <>
    <SuccessModal />
    <ErrorModal />
  </>
);

export default Modals;
