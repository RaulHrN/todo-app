import React from 'react';

// Styles
import styles from './modal.module.css';

import { Box, Modal } from '@mui/material';

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export const BasicModal = ({ children, open, onClose }: Props) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box className={styles.modal_body}>{children}</Box>
    </Modal>
  );
};
