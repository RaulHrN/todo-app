import React from 'react'

// Styles
import styles from "./modal.module.css";

interface Props {
    children: React.ReactNode;
}

export const Modal = (props: Props) => {
  return (
  <div className={styles.modal}>
    <div className={styles.modal_body}>
        {props.children}
    </div>
    </div>
  )
}
