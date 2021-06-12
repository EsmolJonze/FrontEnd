import React, { useState } from 'react';
import { IconButton, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import SaveEditModal from './saveEditModal';
import { saveEditActions } from './saveEditButton.types';
import styles from './saveEdit.module.css';
import { useMediaQuery } from '../../../../hooks';

const SaveEditButton = ({ editionMode }) => {
  const [showSaveEditModal, openSaveEditModal] = useState(false);
  const { isDesktop } = useMediaQuery();

  const icon = editionMode === saveEditActions.SAVE ? 'save' : 'edit';
  const title = editionMode === saveEditActions.SAVE ? 'Save' : 'Edit';

  return (
    <div className={styles._save_edit_container}>
      <IconButton name={icon} onClick={() => openSaveEditModal(true)}>
        {!isDesktop && (
          <Text size="s" color="peanut">
            {title}
          </Text>
        )}
      </IconButton>
      {showSaveEditModal && (
        <SaveEditModal handleCloseModal={() => openSaveEditModal(false)} mode={editionMode} />
      )}
    </div>
  );
};

export default SaveEditButton;
