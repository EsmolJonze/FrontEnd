import React, { useState } from 'react';
import { Icon, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import AddQcToLeadModal from '../addQcToLeadModal';
import styles from './emptyCard.module.css';

const EmptyCard = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  return (
    <>
      <div className={styles._container}>
        <div className={styles._add_button__container} onClick={() => setOpenAddModal(true)}>
          <Icon name="add" size="30" />
        </div>
        <Text size="s" color="bloobirds" uppercase>
          Add qualified company
        </Text>
      </div>
      <AddQcToLeadModal open={openAddModal} handleClose={() => setOpenAddModal(false)} />
    </>
  );
};

export default EmptyCard;
