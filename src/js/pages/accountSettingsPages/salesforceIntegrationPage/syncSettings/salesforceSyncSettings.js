import React, { useMemo } from 'react';
import { useEntity } from '../../../../hooks/entities/useEntity';
import SyncSettingsTab from '../../../../layouts/integrationLayout/syncSettingsTab';
import { useSalesforceIntegration } from '../../../../hooks/useSalesforceIntegration';
import { Item } from '@bloobirds-it/bloobirds-platform-component-library';

const SalesforceSyncSettings = () => {
  const { activeIntegration, disconnectIntegration } = useSalesforceIntegration();
  const salesforceUsers = useEntity('salesforceUsers')?.all();
  const mappedSalesforceUsers = useMemo(
    () =>
      salesforceUsers?.map(salesforceUser => (
        <Item key={salesforceUser.salesforceUser} value={salesforceUser.salesforceUser}>
          {salesforceUser.salesforceUser}
        </Item>
      )),
    [salesforceUsers],
  );
  const crm = 'Salesforce';

  return (
    <>
      {salesforceUsers && (
        <SyncSettingsTab
          crm={crm}
          activeIntegration={activeIntegration}
          activityTrigger="ACTIVITY__SALESFORCE"
          disconnectIntegration={disconnectIntegration}
          companyTrigger="COMPANY__SALESFORCE"
          leadTrigger="LEAD__SALESFORCE"
          salesforceUsers={mappedSalesforceUsers}
        />
      )}
    </>
  );
};
export default SalesforceSyncSettings;
