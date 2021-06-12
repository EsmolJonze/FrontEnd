import React, { useEffect, useState } from 'react';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useHubspotIntegration } from '../../../../hooks/useHubspotIntegration';
import SyncSettingsTab from '../../../../layouts/integrationLayout/syncSettingsTab';

const HubspotSyncSettings = () => {
  const { activeIntegration, disconnectIntegration } = useHubspotIntegration();
  const { webApi } = useBloobirdsApiStateContext();
  const [dealPipelines, setDealPipelines] = useState([]);
  const crm = 'Hubspot';
  useEffect(() => {
    webApi
      .request({
        url: '/hubspot/dealPipelines',
        method: 'GET',
      })
      .then(response => {
        setDealPipelines(response);
      });
  }, []);
  return (
    <>
      {dealPipelines && (
        <SyncSettingsTab
          crm={crm}
          activeIntegration={activeIntegration}
          activityTrigger="ACTIVITY__HUBSPOT"
          disconnectIntegration={disconnectIntegration}
          dealsPipeline={dealPipelines}
          meetingTrigger="MEETING__HUBSPOT"
          leadTrigger="LEAD__HUBSPOT"
        />
      )}
    </>
  );
};
export default HubspotSyncSettings;
