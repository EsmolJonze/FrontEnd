import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { Icon, IconButton, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { removeAttachedFileFromNylas } from '../emailModal.service';
import styles from './attachedFile.module.css';

const removeAttachedFile = (event, fileId, removeAttachedFileFromUI, webApi) => {
  event.preventDefault();
  event.stopPropagation();

  removeAttachedFileFromUI(fileId);
  removeAttachedFileFromNylas(fileId, webApi);
};

const AttachedFile = ({ fileName, fileId, removeAttachedFile: removeAttachedFileFromUI }) => {
  const [onHover, setOnHover] = useState(false);
  const { webApi } = useBloobirdsApiStateContext();

  return (
    <div
      className={styles._container}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Icon name="file" color="softPeanut" />
      <div className={styles._text__container}>
        <Text size="xs" color="softPeanut">
          {fileName}
        </Text>
      </div>
      {onHover && (
        <IconButton
          name="cross"
          size={16}
          color="softPeanut"
          onClick={event => removeAttachedFile(event, fileId, removeAttachedFileFromUI, webApi)}
        />
      )}
    </div>
  );
};

AttachedFile.propTypes = {
  fileId: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
};

export default AttachedFile;
