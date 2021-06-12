import React from 'react';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './showMore.css';

const ShowMore = ({ value, onClick }) => (
  <a className={styles._container} onClick={() => onClick(!value)}>
    <Text color="bloobirds" size="s" htmlTag="span">
      See {value ? 'less' : 'more'}...
    </Text>
  </a>
);

ShowMore.defaultProps = {
  value: false,
};

export default ShowMore;
