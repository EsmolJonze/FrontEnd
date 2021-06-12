import React, { useEffect, useState } from 'react';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import SessionManagerFactory from '../../../../misc/session';
import { intervalDaysOfMonthWithFormat } from '../../../../utils/dates.utils';
import styles from './metricItem.module.css';

const SessionManager = SessionManagerFactory();
const formatDateQuery = 'yyyy-MM-dd';

const Metric = ({ title, searchQuery }) => {
  const [queryResult, setQueryResult] = useState(undefined);

  SubscriptionHooks.useBobjectSubscription('Company', searchQuery, response =>
    setQueryResult(response.totalMatching),
  );

  return (
    <div className={styles._content}>
      <Text htmlTag="span" color="peanut" size="m">
        {title}
      </Text>
      <span className={styles._item}>{queryResult}</span>
    </div>
  );
};

const Wrapper = ({ title, date, source }) => {
  const [searchQuery, setSearchQuery] = useState();
  const dates = intervalDaysOfMonthWithFormat({ date, format: formatDateQuery });

  useEffect(() => {
    setSearchQuery({
      query: {
        COMPANY__SOURCE: [`COMPANY__SOURCE__${source}`],
        COMPANY__STATUS__CHANGED_DATE_ON_PROSPECTION: dates,
        COMPANY__ASSIGNED_TO: [SessionManager?.getUser()?.id],
      },
      formFields: true,
      injectReferences: true,
    });
  }, []);

  return searchQuery ? <Metric title={title} searchQuery={searchQuery} /> : null;
};

export default Wrapper;
