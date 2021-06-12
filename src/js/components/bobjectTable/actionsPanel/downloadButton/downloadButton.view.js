import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Spinner, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './downloadButton.module.css';
import { useMediaQuery } from '../../../../hooks';

const DownloadButtonView = ({ handleDownload, isDisabled, isLoading }) => {
  const { isDesktop } = useMediaQuery();

  return (
    <div className={styles._download_button_container}>
      <IconButton disabled={isDisabled} name="download" onClick={handleDownload}>
        {!isDesktop &&
          (isLoading ? (
            <Spinner size={20} />
          ) : (
            <Text size="s" color="peanut">
              Download
            </Text>
          ))}
      </IconButton>
    </div>
  );
};

DownloadButtonView.propTypes = {
  handleDownload: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default DownloadButtonView;
