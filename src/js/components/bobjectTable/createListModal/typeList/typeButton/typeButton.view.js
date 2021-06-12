import React from 'react';
import { Icon, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './typeButton.module.css';

const TypeButton = ({ icon, title, description, onClick }) => (
  <div onClick={onClick}>
    <div className={styles._container}>
      <div className={styles._header}>
        <div className={styles._icon}>
          <Icon name={icon} color="bloobirds" size="24" />
        </div>
        <div className={styles._title}>
          <Text size="l" weight="regular" color="bloobirds">
            {title}
          </Text>
        </div>
      </div>
      <div className={styles._body}>
        <Text size="s" weight="regular" color="softPeanut">
          {description}
        </Text>
      </div>
    </div>
  </div>
);

export default TypeButton;
