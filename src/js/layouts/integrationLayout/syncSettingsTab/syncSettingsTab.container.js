import React, { useEffect, useMemo, useState } from 'react';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import SyncSettingsTab from './syncSettingsTab.view';
import { useActiveUser, usePicklistValues } from '../../../hooks';
import { useEntity } from '../../../hooks/entities/useEntity';

const SyncStatusTabContainer = ({
  activityTrigger,
  leadTrigger,
  companyTrigger,
  meetingTrigger,
  salesforceUsers,
  dealsPipeline,
  crm,
  disconnectIntegration,
  activeIntegration,
}) => {
  const { restApi } = useBloobirdsApiStateContext();
  const { activeAccount } = useActiveUser();
  const [accountTriggers, setAccountTriggers] = useState(undefined);
  const [refreshTriggers, setRefreshTriggers] = useState(true);

  const leadStatus = usePicklistValues({ picklistLogicRole: 'LEAD__STATUS' });
  const callResults = usePicklistValues({ picklistLogicRole: 'ACTIVITY__CALL_RESULT' });
  const reducedCallResults = useMemo(
    () =>
      callResults?.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.value]: { name: curr.value, logicRole: curr.logicRole },
        }),
        {},
      ),
    [callResults],
  );
  const filteredLeadStatus = useMemo(() => leadStatus?.filter(status => status.enabled), [
    leadStatus,
  ]);
  const standardTriggers = useEntity('standardTriggers')
    ?.all()
    .reduce(
      (acc, curr) => ({
        ...acc,
        [curr.name]: curr.id,
      }),
      {},
    );

  useEffect(() => {
    if (refreshTriggers) {
      restApi
        .service('accountBobjectTriggers')
        .search({ query: { accountId: activeAccount.id } })
        .then(response => {
          setAccountTriggers(response?._embedded.accountBobjectTriggers);
          setRefreshTriggers(false);
        });
    }
  }, [refreshTriggers]);
  const handleSubmit = save => {
    if (standardTriggers) {
      const triggers = accountTriggers.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.standardTrigger]: {
            jsonConfig: JSON.parse(curr.jsonConfig),
            id: curr.id,
          },
        }),
        {},
      );
      if (save.triggerLead) {
        const triggerLead = triggers[standardTriggers[leadTrigger]];
        const triggerCompany = triggers[standardTriggers[companyTrigger]];
        restApi
          .service('accountBobjectTriggers')
          .partialUpdate(triggerLead.id, { jsonConfig: JSON.stringify(save.triggerLead) })
          .then(() => {
            if (triggerCompany) {
              restApi
                .service('accountBobjectTriggers')
                .partialUpdate(triggerCompany.id, {
                  jsonConfig: JSON.stringify({ ...triggerCompany.jsonConfig, ...save.triggerLead }),
                })
                .then(() => {
                  setRefreshTriggers(true);
                });
            }
            setRefreshTriggers(true);
          });
      }

      if (save.triggerActivities) {
        const triggerActivity = triggers[standardTriggers[activityTrigger]];

        restApi
          .service('accountBobjectTriggers')
          .partialUpdate(triggerActivity.id, {
            jsonConfig: JSON.stringify(save.triggerActivities),
          })
          .then(() => {
            setRefreshTriggers(true);
          });
      }
      if (save.triggerMeeting) {
        const triggerMeeting = triggers[standardTriggers[meetingTrigger]];
        restApi
          .service('accountBobjectTriggers')
          .partialUpdate(triggerMeeting.id, {
            jsonConfig: JSON.stringify(save.triggerMeeting.jsonConfig),
            active: save.triggerMeeting.active,
          })
          .then(() => {
            setRefreshTriggers(true);
          });
      }
      if (save.userEmail) {
        if (crm === 'Salesforce') {
          restApi
            .service('integrationSalesforces')
            .partialUpdate(activeIntegration.id, {
              salesforceUser: save.userEmail,
            })
            .then(() => {
              setRefreshTriggers(true);
            });
        } else {
          restApi
            .service('integrationHubspots')
            .partialUpdate(activeIntegration.id, { legacyToken: save.userEmail })
            .then(() => {
              setRefreshTriggers(true);
            });
        }
      }
    }
  };

  return (
    <>
      {standardTriggers && accountTriggers && (
        <SyncSettingsTab
          handleSubmit={handleSubmit}
          accountTriggers={accountTriggers.reduce(
            (acc, curr) => ({
              ...acc,
              [curr.standardTrigger]: {
                jsonConfig: JSON.parse(curr.jsonConfig),
                id: curr.id,
                active: curr.active,
              },
            }),
            {},
          )}
          standardTriggers={standardTriggers}
          salesforceUsers={salesforceUsers}
          leadStatus={filteredLeadStatus}
          callResults={reducedCallResults}
          dealPipeline={dealsPipeline}
          disconnectIntegration={disconnectIntegration}
          activeIntegration={activeIntegration}
          triggerActivity={activityTrigger}
          triggerLead={leadTrigger}
          crm={crm}
          triggerMeeting={meetingTrigger}
        />
      )}
    </>
  );
};
export default SyncStatusTabContainer;
