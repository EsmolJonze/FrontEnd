import BusinessAsset from '../../../BussinesAsset';
import React, { useState } from 'react';
import styles from './leadsOverview.module.css';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useEntity } from '../../../../hooks/entities/useEntity';

export const LeadsOverview = ({ companyId }) => {
  const icps = useEntity('idealCustomerProfiles');
  const [leadCount, setLeadCount] = useState();
  const leadRequest = React.useMemo(
    () => ({
      query: {
        LEAD__COMPANY: [companyId],
      },
      aggregations: ['LEAD__ICP'],
      injectReferences: false,
      formFields: false,
      page: 0,
      pageSize: 5000,
    }),
    [companyId],
  );
  SubscriptionHooks.useBobjectAggSubscription('Lead', leadRequest, response => {
    const data = response.contents
      .map(x => ({ [x.fieldDataList[0].value]: x.value }))
      .reduce((a, b) => ({ ...a, ...b }), {});
    setLeadCount(data);
  });
  return (
    <div className={styles.LeadOverview_root}>
      {icps !== undefined &&
        leadCount !== undefined &&
        icps
          ?.all()
          .filter(x => leadCount[x.id] !== undefined)
          .map(x => (
            <BusinessAsset
              key={x.id}
              fontSize={16}
              size={32}
              entityClass={'idealCustomerProfiles'}
              entityId={x.id}
              count={leadCount[x.id]}
            />
          ))}
    </div>
  );
};
