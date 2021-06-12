import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useFileUpload } from './uploadFile.hook';
import { Button, Spinner, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import isEqual from 'lodash/isEqual';
import styles from './attachFilesButton.module.css';

const AttachFilesButton = ({ appendAttachedFile, setIsAttachingFile }) => {
  const { data, status, message, setFileData } = useFileUpload('/email/file');
  const inputFileRef = useRef(null);
  const isLoading = status === 'loading';
  const isError = status === 'error';

  useEffect(() => {
    if (!isEqual(data, {})) appendAttachedFile(data);
  }, [data]);

  useEffect(() => setIsAttachingFile(isLoading), [status]);

  return (
    <div className={styles._container}>
      <input
        type="file"
        hidden
        ref={inputFileRef}
        onChange={event => {
          setFileData(event.target.files[0]);
        }}
      />
      <Button
        variant="clear"
        iconLeft="paperclip"
        onClick={() => inputFileRef.current.click()}
        color={isError ? 'tomato' : 'bloobirds'}
        disabled={isLoading}
      >
        Attach
      </Button>
      {isLoading && <Spinner name="loadingCircle" size={16} />}
      {isError && (
        <Text color="tomato" size="s" inline>
          {message}
        </Text>
      )}
    </div>
  );
};

AttachFilesButton.propTypes = {
  appendAttachedFile: PropTypes.func.isRequired,
  setIsAttachingFile: PropTypes.func.isRequired,
};

export default AttachFilesButton;
