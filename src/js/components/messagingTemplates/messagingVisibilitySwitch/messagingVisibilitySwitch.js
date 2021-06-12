import React from 'react';
import { Switch, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './messagingVisibilitySwitch.module.css';
import { useActiveMessagingVisibilityFilter } from '../../../hooks/useActiveMessagingFilters';

const MessagingVisibilitySwitch = () => {
  const [visibility, setVisibility] = useActiveMessagingVisibilityFilter();
  return (
    <div className={styles.container}>
      <Switch
        checked={visibility === 'PRIVATE'}
        onChange={isPrivate => setVisibility(isPrivate ? 'PRIVATE' : 'PUBLIC')}
      />
      <div className={styles.text}>
        <Text size="s" inline color="peanut">
          Show only mine
        </Text>
      </div>
    </div>
  );
};

export default MessagingVisibilitySwitch;
