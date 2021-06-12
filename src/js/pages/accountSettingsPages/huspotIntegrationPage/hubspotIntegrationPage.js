import React, { useEffect, useState } from 'react';
import styles from '../salesforceIntegrationPage/salesforceIntegrationPage.module.css';
import { TabGroup, Tab, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { useParams } from 'react-router';
import {
  APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_SYNC_SETTINGS,
  APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_SYNC_STATUS,
  APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_USERS,
  APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_MAPPING,
  APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_CONNECT,
} from '../../../app/_constants/routes';
import { useRouter } from '../../../hooks';
import { useHubspotIntegration } from '../../../hooks/useHubspotIntegration';
import SyncStatusHubspot from './syncStatus/syncStatusHubspot';
import HubspotUsersTab from './usersTab/hubspotUsersTab';
import HubspotNoIntegrationPage from './noIntegrationPage/hubspotNoIntegrationPage';
import HubspotFieldMapping from './fieldMapping/hubspotFieldMapping';
import HubspotSyncSettings from './syncSettings/hubspotSyncSettings';

const HubspotIntegrationPage = () => {
  const { activeIntegration, isSubmitting } = useHubspotIntegration();
  const [activeTab, setActiveTab] = useState('Sync Status');
  const { tab } = useParams();
  const { history } = useRouter();
  useEffect(() => {
    if (activeIntegration.isLoaded && !activeIntegration.hasError) {
      if (tab === 'connect') {
        history.push(APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_SYNC_STATUS);
      }
    } else if (tab !== 'connect' && isSubmitting) {
      history.push(APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_CONNECT);
    }
  }, [activeIntegration]);

  useEffect(() => {
    switch (tab) {
      case 'settings':
        setActiveTab('Sync Settings');
        break;
      case 'sync':
        setActiveTab('Sync Status');
        break;
      case 'users':
        setActiveTab('Users');
        break;
      case 'mapping':
        setActiveTab('Mapping');
        break;
      default:
        break;
    }
  }, [tab]);

  const handleChangeTab = pointerTab => {
    switch (pointerTab) {
      case 'Sync Settings':
        history.push(APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_SYNC_SETTINGS);
        break;
      case 'Sync Status':
        history.push(APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_SYNC_STATUS);
        break;
      case 'Users':
        history.push(APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_USERS);
        break;
      case 'Mapping':
        history.push(APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_MAPPING);
        break;
      default:
        break;
    }
  };
  return (
    <div className={styles._container}>
      <Text size="xl" weight="medium" color="peanut" align="left">
        HubSpot integration
      </Text>
      {activeIntegration.isLoaded && !activeIntegration.hasError && (
        <div className={styles._tab_group}>
          <TabGroup defaultValue="Sync Status" value={activeTab} onClick={handleChangeTab}>
            <Tab name="Sync Status">
              <SyncStatusHubspot />
            </Tab>
            <Tab name="Sync Settings">
              <HubspotSyncSettings />
            </Tab>
            <Tab name="Users">
              <HubspotUsersTab />
            </Tab>
            <Tab name="Mapping">
              <HubspotFieldMapping />
            </Tab>
          </TabGroup>
        </div>
      )}
      {!isSubmitting && (!activeIntegration.isLoaded || activeIntegration.hasError) && (
        <HubspotNoIntegrationPage />
      )}
    </div>
  );
};
export default HubspotIntegrationPage;
