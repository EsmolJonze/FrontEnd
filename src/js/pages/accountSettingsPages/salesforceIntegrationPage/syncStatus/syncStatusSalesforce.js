import React, { useEffect, useState } from 'react';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import SyncStatusTab from '../../../../layouts/integrationLayout/syncStatusTabTemplate';
import { useSalesforceIntegration } from '../../../../hooks/useSalesforceIntegration';

const SyncStatusSalesforce = () => {
  const { webApi } = useBloobirdsApiStateContext();
  const { activeIntegration } = useSalesforceIntegration();
  const [apiUsage, setApiUsage] = useState({
    remaining: 0,
    max: 0,
  });
  const [refresh, isRefresh] = useState(false);
  const [fetching, isFetching] = useState(false);
  useEffect(() => {
    if (activeIntegration.isLoaded) {
      webApi
        .request({
          url: '/service/salesforceUsers/apiLimit',
          method: 'GET',
        })
        .then(response => {
          setApiUsage({
            remaining: response.Remaining,
            max: response.Max,
          });
        });
    }
  }, [refresh]);
  return (
    <>
      {apiUsage && activeIntegration.isLoaded && (
        <SyncStatusTab
          apiUsage={apiUsage}
          fetching={fetching}
          isFetching={isFetching}
          isRefresh={isRefresh}
          refresh={refresh}
          integrationType="SALESFORCE"
        />
      )}
    </>
  );
};
export default SyncStatusSalesforce;
