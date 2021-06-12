import React, { useEffect, useState } from 'react';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import SyncStatusTab from '../../../../layouts/integrationLayout/syncStatusTabTemplate';
import { useHubspotIntegration } from '../../../../hooks/useHubspotIntegration';

const SyncStatusHubspot = () => {
  const { webApi } = useBloobirdsApiStateContext();
  const [apiUsage, setApiUsage] = useState({
    remaining: 0,
    max: 0,
  });
  const integrationType = 'HUBSPOT';
  const [refresh, isRefresh] = useState(false);
  const [fetching, isFetching] = useState(false);
  const { activeIntegration } = useHubspotIntegration();

  useEffect(() => {
    const requestParams = { apiKey: activeIntegration.apiKey };
    if (activeIntegration.apiKey) {
      webApi
        .request({
          url: '/hubspot/dailyUsage',
          requestParams,
          method: 'GET',
        })
        .then(response => {
          setApiUsage({
            remaining: response.usageLimit - response.currentUsage,
            max: response.usageLimit,
          });
        });
    }
  }, [refresh, activeIntegration]);
  return (
    <>
      {apiUsage && (
        <SyncStatusTab
          apiUsage={apiUsage}
          fetching={fetching}
          isRefresh={isRefresh}
          refresh={refresh}
          isFetching={isFetching}
          integrationType={integrationType}
        />
      )}
    </>
  );
};
export default SyncStatusHubspot;
