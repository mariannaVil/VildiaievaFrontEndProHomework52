import { Modal } from '@mui/material';
import React from 'react';

const QuizModal = ({ children, isOpen, handleClose }) => (
  <Modal
    open={isOpen}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <div>
      {children}
    </div>
  </Modal>
);
export default QuizModal;
