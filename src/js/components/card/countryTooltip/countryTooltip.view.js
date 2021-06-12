import React from 'react';
import { Tooltip } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './countryTooltip.module.css';

const CountryTooltip = ({ country, timezone }) => (
  <div className={styles._container}>
    <Tooltip title={`${country}${timezone ? ` (${timezone})` : ''}`} position="top">
      {country}
    </Tooltip>
  </div>
);

export default CountryTooltip;
