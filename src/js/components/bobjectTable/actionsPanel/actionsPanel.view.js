import PropTypes from 'prop-types';
import React from 'react';
import DownloadButton from './downloadButton';
import ResetButton from './resetButton';
import SaveEditButton from './saveEditButton';
import styles from './actionsPanel.module.css';
import { useBobjectTable } from '../../../hooks';

const ActionsPanel = ({ viewActions }) => {
  const { viewType, editionMode, isModified } = useBobjectTable();
  const showSaveButton = editionMode && (viewActions || (viewType === 'MEETINGS' && !!isModified));

  return (
    <div className={styles._actions_container}>
      <DownloadButton />
      <ResetButton />
      {showSaveButton && <SaveEditButton editionMode={editionMode} />}
    </div>
  );
};

ActionsPanel.propTypes = {
  viewActions: PropTypes.bool,
};

export default ActionsPanel;
