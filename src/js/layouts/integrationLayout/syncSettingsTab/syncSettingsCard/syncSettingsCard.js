import styles from '../syncSettingsTab.module.css';
import { Button, Icon, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import DisconnectIntegrationModal from '../disconnectIntegrationModal/disconnectIntegrationModal';
import React from 'react';

const SyncSettingsCard = ({
  icon,
  title,
  onSave,
  isDisabled,
  children,
  email,
  disconnectIntegration,
  crm,
}) => (
  <div className={styles._sync_settings_card}>
    <div className={styles._sync_settings_card_title}>
      <Icon name={icon} size="24" />
      <Text size="l" weight="medium" color="peanut">
        {title}
      </Text>
    </div>
    <div className={styles._sync_settings_card_children}>{children}</div>
    <div className={styles._sync_settings_card_button}>
      <Button onClick={onSave} uppercase disabled={isDisabled}>
        save
      </Button>
      {email && (
        <DisconnectIntegrationModal disconnectIntegration={disconnectIntegration} crm={crm} />
      )}
    </div>
  </div>
);
export default SyncSettingsCard;
