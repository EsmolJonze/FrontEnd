import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@bloobirds-it/bloobirds-platform-component-library';
import { BloobirdsLogo } from './bloobirdsIcon';
import styles from './headerCompanyBlock.module.css';

const HeaderCompanyBlock = props => {
  const { accountName, toggleTaskSelector } = props;
  // With SUBHOMES toggleTaskSelector will be deprecated and the icon will disappear.
  return (
    <div className={styles._left_container}>
      <IconButton name="hamburgerList" onClick={() => toggleTaskSelector()} />
      <BloobirdsLogo />
      <span className={styles._account_text}>{accountName}</span>
    </div>
  );
};

HeaderCompanyBlock.propTypes = {
  accountName: PropTypes.string.isRequired,
  toggleTaskSelector: PropTypes.func.isRequired,
};

export { HeaderCompanyBlock };
