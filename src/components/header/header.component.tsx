import React from 'react';

//styles
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.header_title}>To Do App</p>
    </header>
  );
};
