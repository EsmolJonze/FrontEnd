import React, { useState, useEffect, useMemo } from 'react';
import { useEntity } from '../../../../hooks/entities/useEntity';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useActiveUser, usePicklistValues } from '../../../../hooks';
import MappingHubspotCallResultsView from './mappingHubspotCallResults.view';

const MappingHubspotCallResultsContainer = () => {
  const [hubspotCallResults, setHubspotCallResults] = useState([]);
  const [accountTriggers, setAccountTriggers] = useState(undefined);
  const [refreshTriggers, setRefreshTriggers] = useState(true);
  const [descending, setDescending] = useState(false);
  const { restApi, webApi } = useBloobirdsApiStateContext();
  const { activeAccount } = useActiveUser();

  const standardTriggers = useEntity('standardTriggers')
    ?.all()
    .reduce(
      (acc, curr) => ({
        ...acc,
        [curr.name]: curr.id,
      }),
      {},
    );
  const callResults = usePicklistValues({ picklistLogicRole: 'ACTIVITY__CALL_RESULT' });

  const reducedCallResults = useMemo(
    () =>
      callResults
        ?.sort((a, b) => {
          if (descending) {
            return a.value < b.value ? 1 : -1;
          }
          return a.value > b.value ? 1 : -1;
        })
        .reduce(
          (acc, curr) => ({
            ...acc,
            [curr.value]: { name: curr.value, logicRole: curr.logicRole },
          }),
          {},
        ),
    [callResults, descending],
  );
  useEffect(() => {
    webApi
      .request({
        url: '/hubspot/callResults',
        method: 'GET',
      })
      .then(response => {
        response.map(hubspotCallResult => delete hubspotCallResult.deleted);
        setHubspotCallResults(response);
      });
    if (refreshTriggers) {
      restApi
        .service('accountBobjectTriggers')
        .search({ query: { accountId: activeAccount.id } })
        .then(response => {
          setAccountTriggers(
            response?._embedded.accountBobjectTriggers.reduce(
              (acc, curr) => ({
                ...acc,
                [curr.standardTrigger]: {
                  jsonConfig: JSON.parse(curr.jsonConfig),
                  id: curr.id,
                },
              }),
              {},
            ),
          );
          setRefreshTriggers(false);
        });
    }
  }, [refreshTriggers]);

  const activityTrigger = useMemo(
    () => accountTriggers && accountTriggers[standardTriggers.ACTIVITY__HUBSPOT],
    [accountTriggers, standardTriggers],
  );
  const leadTrigger = useMemo(
    () => accountTriggers && accountTriggers[standardTriggers.LEAD__HUBSPOT],
    [accountTriggers, standardTriggers],
  );

  const handleSaveConfig = (config, logicRole) => {
    leadTrigger.jsonConfig.hubspotCallResultsMapping[logicRole] = config;
    activityTrigger.jsonConfig.hubspotCallResultsMapping[logicRole] = config;
    restApi
      .service('accountBobjectTriggers')
      .partialUpdate(leadTrigger.id, { jsonConfig: JSON.stringify(leadTrigger.jsonConfig) })
      .then(() => {
        restApi
          .service('accountBobjectTriggers')
          .partialUpdate(activityTrigger.id, {
            jsonConfig: JSON.stringify(activityTrigger.jsonConfig),
          })
          .then(() => {
            setRefreshTriggers(true);
          });
      });
  };

  return (
    <>
      {standardTriggers && accountTriggers && hubspotCallResults && (
        <MappingHubspotCallResultsView
          activityTrigger={activityTrigger}
          handleSaveConfig={handleSaveConfig}
          hubspotCallResults={hubspotCallResults}
          callResults={reducedCallResults}
          handleSorting={setDescending}
          descending={descending}
        />
      )}
    </>
  );
};
export default MappingHubspotCallResultsContainer;
