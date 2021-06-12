import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import Modal from '@material-ui/core/Modal';
import TypeList from './typeList';
import styles from './createListModal.module.css';

const CreateListModal = ({ handleCloseModal }) => (
  <Modal open onClose={handleCloseModal}>
    <div className={styles._container}>
      <div className={styles._header}>
        <div className={styles._title}>
          <Text size="xl" weight="regular">
            Create List
          </Text>
        </div>
        <div className={styles._close_button}>
          <IconButton name="cross" onClick={handleCloseModal} color="bloobirds" size="40" />
        </div>
      </div>
      <div>
        <TypeList handleCloseModal={handleCloseModal} />
      </div>
    </div>
  </Modal>
);

CreateListModal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default CreateListModal;
