import React from 'react';
import styles from './emptyImports.module.css';

const EmptyImportsTable = () => (
  <div className={styles._container}>
    <div className={styles._title}>You have not imported any files yet</div>
    <p className={styles._paragraph}>Once you have completed an import it will be shown here</p>
  </div>
);

export default EmptyImportsTable;
