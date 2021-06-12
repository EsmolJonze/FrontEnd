import React from 'react';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './buttons.module.css';

const Buttons = ({ downloadImport, imp, reportType }) => {
  const { id, name } = { ...imp };
  const fileName = reportType === 'IMPORT' ? name : `${name}_${reportType}`;
  return (
    <div className={styles._container}>
      <div className={styles._btnDownload} onClick={() => downloadImport(id, fileName, reportType)}>
        <Icon size={16} name="download" />
      </div>
    </div>
  );
};

export default Buttons;
