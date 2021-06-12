import React from 'react';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import ConnectIntegrationModal from './connectIntegrationModal/connectIntegrationModal';
import styles from './noIntegrationPage.module.css';
import { Disconnected } from '../../../../assets/svg';

const NoIntegrationPage = ({
  crm,
  link,
  defaultValues,
  children,
  error,
  handleError,
  onSubmit,
  isSubmiting,
}) => (
  <div className={styles._container}>
    <div className={styles._ellipse}>
      <Disconnected />
    </div>
    <Text size="xxl" weight="medium" color="peanut" align="center">
      {crm} is not connected
    </Text>
    <Text size="m" weight="regular" color="softPeanut" align="center">
      Connecting your {crm} will allow you to synchronise it with your Bloobirds data, such as the
      companies, leads, and activities.
    </Text>
    <Text size="m" weight="regular" color="softPeanut" align="center">
      Do you wish to connect your {crm}?
    </Text>
    <a href={link} target="_blank" rel="noreferrer">
      <Text size="m" weight="regular" color="bloobirds" align="center">
        Learn how to connect your {crm}.
      </Text>
    </a>
    <div>
      <ConnectIntegrationModal
        defaultValues={defaultValues}
        crm={crm}
        error={error}
        handleError={handleError}
        onSubmit={onSubmit}
        isSubmitting={isSubmiting}
      >
        {children}
      </ConnectIntegrationModal>
    </div>
  </div>
);
export default NoIntegrationPage;
