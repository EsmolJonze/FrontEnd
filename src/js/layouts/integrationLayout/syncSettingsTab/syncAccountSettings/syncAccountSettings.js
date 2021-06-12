import styles from '../syncSettingsTab.module.css';
import { Select, TextArea } from '@bloobirds-it/bloobirds-platform-component-library';
import PropTypes from 'prop-types';
import React from 'react';

const AccountSyncSettings = ({
  activeIntegration,
  defaultValue,
  mappedSalesforceUsers,
  crm,
  handleAccountSettings,
  handleDisabled,
  disabled,
}) => {
  const isHubspot = crm === 'Hubspot';
  const title = isHubspot ? 'HubSpot API key' : 'Salesforce Consumer Key';
  return (
    <div className={styles._children_salesforce_account_container}>
      {activeIntegration && (
        <TextArea
          disabled={!isHubspot}
          placeholder={title}
          defaultValue={!isHubspot ? activeIntegration.clientId : activeIntegration.apiKey}
          onChange={value => {
            handleAccountSettings(value);
            handleDisabled({ ...disabled, isDisabledSalesforceAccount: false });
          }}
        />
      )}
      {activeIntegration && mappedSalesforceUsers && (
        <Select
          defaultValue={defaultValue}
          onChange={value => {
            handleDisabled({ ...disabled, isDisabledSalesforceAccount: false });
            handleAccountSettings(value);
          }}
          placeholder="Salesforce Admin Email"
          width="100%"
        >
          {mappedSalesforceUsers}
        </Select>
      )}
    </div>
  );
};
export default AccountSyncSettings;

AccountSyncSettings.propTypes = {
  activeIntegration: PropTypes.shape({
    clientId: PropTypes.string,
    hasError: PropTypes.bool,
    id: PropTypes.string,
    instanceHost: PropTypes.string,
    integrationId: PropTypes.string,
    isLoaded: PropTypes.bool,
    salesforceUser: PropTypes.string,
  }),
  crm: PropTypes.string,
  defaultValue: PropTypes.string,
  mappedSalesforceUsers: PropTypes.any,
};
