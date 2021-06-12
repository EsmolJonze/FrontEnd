import React, { useEffect, useState } from 'react';
import styles from './salesforceIntegrationPage.module.css';
import { TabGroup, Tab, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { useSalesforceIntegration } from '../../../hooks/useSalesforceIntegration';
import { useParams } from 'react-router';
import {
  APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_SYNC_STATUS,
  APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_MAPPING,
  APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_USERS,
  APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_SYNC_SETTINGS,
  APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_CONNECT,
} from '../../../app/_constants/routes';
import { useRouter } from '../../../hooks';
import SyncStatusSalesforce from './syncStatus/syncStatusSalesforce';
import SalesforceUsersTab from './users/salesforceUsersTab';
import SalesforceNoIntegrationPage from './noIntegration/salesforceNoIntegrationPage';
import SalesforceFieldMapping from './fieldMapping/salesforceFieldMapping';
import SalesforceSyncSettings from './syncSettings/salesforceSyncSettings';

const SalesforceIntegrationPage = () => {
  const { activeIntegration, isSubmitting } = useSalesforceIntegration();
  const [activeTab, setActiveTab] = useState('Sync Status');
  const { tab } = useParams();
  const { history } = useRouter();
  useEffect(() => {
    if (activeIntegration.isLoaded && !activeIntegration.hasError) {
      if (tab === 'connect') {
        history.push(APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_SYNC_STATUS);
      }
    } else if (tab !== 'connect' && isSubmitting) {
      history.push(APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_CONNECT);
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
        setActiveTab('Field mapping');
        break;
      default:
        break;
    }
  }, [tab]);

  const handleChangeTab = clickedTab => {
    switch (clickedTab) {
      case 'Sync Settings':
        history.push(APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_SYNC_SETTINGS);
        break;
      case 'Sync Status':
        history.push(APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_SYNC_STATUS);
        break;
      case 'Users':
        history.push(APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_USERS);
        break;
      case 'Field mapping':
        history.push(APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_MAPPING);
        break;
      default:
        break;
    }
  };
  return (
    <div className={styles._container}>
      <Text size="xl" weight="medium" color="peanut" align="left">
        Salesforce integration
      </Text>
      {activeIntegration.isLoaded && !activeIntegration.hasError && (
        <div className={styles._tab_group}>
          <TabGroup defaultValue="Sync Status" value={activeTab} onClick={handleChangeTab}>
            <Tab name="Sync Status">
              <SyncStatusSalesforce />
            </Tab>
            <Tab name="Sync Settings">
              <SalesforceSyncSettings />
            </Tab>
            <Tab name="Users">
              <SalesforceUsersTab />
            </Tab>
            <Tab name="Field mapping">
              <SalesforceFieldMapping />
            </Tab>
          </TabGroup>
        </div>
      )}
      {!isSubmitting && (!activeIntegration.isLoaded || activeIntegration.hasError) && (
        <SalesforceNoIntegrationPage />
      )}
    </div>
  );
};
export default SalesforceIntegrationPage;
