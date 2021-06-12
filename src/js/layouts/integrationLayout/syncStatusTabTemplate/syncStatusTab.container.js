import React, { useEffect, useState } from 'react';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useActiveUser, useEntity } from '../../../hooks';
import SyncStatusTab from './syncStatusTab.view';
import { useUserSettings } from '../../../components/userPermissions/hooks';
import { startOfWeek, endOfWeek, format } from 'date-fns';

const ROWS_PER_PAGE_OPTION = [25, 50, 100];

const SyncStatusTabContainer = ({
  apiUsage,
  fetching,
  isRefresh,
  refresh,
  integrationType,
  isFetching,
}) => {
  const { activeAccount } = useActiveUser();
  const { restApi, logsApi } = useBloobirdsApiStateContext();
  const [refreshEvents, isRefreshEvents] = useState(true);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(ROWS_PER_PAGE_OPTION[0]);
  const [logTracing, isLogTracing] = useState(false);
  const [disabledNextPage, setDisabledNextPage] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [totalElements, setTotalelements] = useState(0);
  const [syncLogs, setSyncLogs] = useState([]);

  const [accountSettings, setAccountSettings] = useState({});
  const userSettings = useUserSettings();
  const [logBobjectTypeFilter, setLogBobjectTypeFilter] = useState(undefined);
  const [logDateRangeFilter, setLogDateRangeFilter] = useState({
    type: 'this_week',
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });
  const [logStatusFilter, setLogStatusFilter] = useState(undefined);

  const bobjectTypesRepo = useEntity('bobjectTypes');
  const [bobjectTypes, setBobjectTypes] = useState([]);

  useEffect(() => {
    if (bobjectTypesRepo) {
      const types = bobjectTypesRepo
        .all()
        .filter(type => type.name !== 'Task' && type.name !== 'Opportunity');
      setBobjectTypes([...types]);
    }
  }, [bobjectTypesRepo]);

  useEffect(() => {
    if (refresh) {
      isRefreshEvents(true);
      isRefresh(false);
    }
  }, [refresh]);
  useEffect(() => {
    if (userSettings) {
      restApi
        .service('accounts')
        .get(activeAccount.id)
        .then(response => {
          setAccountSettings(response);
          if (
            response.logTracingEmail &&
            response.logTracingEmail.includes(userSettings.user.email)
          ) {
            isLogTracing(true);
          }
        });
    }
  }, [userSettings]);
  useEffect(() => {
    isFetching(true);
    const requestParams = {
      integrationType,
      page,
      size: pageSize,
      dateTo: logDateRangeFilter.end ? format(logDateRangeFilter.end, 'yyyy-MM-dd') : undefined,
      status: logStatusFilter,
      bobjectType: logBobjectTypeFilter,
    };
    if (logDateRangeFilter.type && logDateRangeFilter.type !== 'all_time') {
      requestParams.dateFrom = format(logDateRangeFilter.start, 'yyyy-MM-dd');
    }
    if (refreshEvents) {
      logsApi
        .request({
          url: `/logs/integrations/${activeAccount.id}`,
          method: 'GET',
          requestParams,
        })
        .then(response => {
          setSyncLogs(response.content);
          isRefreshEvents(false);
          isFetching(false);
          setItemsPerPage(response.content.length);
          setTotalelements(response.totalElements);
          if (response.last) {
            setDisabledNextPage(true);
          }
        });
    }
  }, [page, pageSize, refresh, logBobjectTypeFilter, logDateRangeFilter, logStatusFilter]);

  const handleAddEmail = value => {
    if (value) {
      restApi
        .service('accounts')
        .partialUpdate(activeAccount.id, {
          logTracingEmail: `${accountSettings.logTracingEmail},${userSettings.user.email}`,
        })
        .then(() => {
          isLogTracing(true);
        });
    } else {
      restApi
        .service('accounts')
        .partialUpdate(activeAccount.id, {
          logTracingEmail: accountSettings.logTracingEmail.replace(userSettings.user.email, ''),
        })
        .then(() => {
          isLogTracing(false);
        });
    }
  };
  const onchangePage = newPage => {
    setPage(newPage);
    isRefreshEvents(true);
  };
  return (
    <SyncStatusTab
      onChangePage={onchangePage}
      onChangePageSize={setPageSize}
      handleRefreshEvents={isRefreshEvents}
      refreshEvents={refreshEvents}
      page={page}
      pageSize={pageSize}
      pageSizeOption={ROWS_PER_PAGE_OPTION}
      apiUsage={apiUsage}
      handleAddEmail={handleAddEmail}
      logTracing={logTracing}
      fetching={fetching}
      handleRefresh={isRefresh}
      handleFetching={isFetching}
      disabledNextPage={disabledNextPage}
      syncLogs={syncLogs}
      logsLength={itemsPerPage}
      bobjectTypes={bobjectTypes}
      totalElements={totalElements}
      setLogBobjectTypeFilter={setLogBobjectTypeFilter}
      setLogDateRangeFilter={setLogDateRangeFilter}
      setLogStatusFilter={setLogStatusFilter}
      logDateRangeFilter={logDateRangeFilter}
      logStatusFilter={logStatusFilter}
      logBobjectTypeFilter={logBobjectTypeFilter}
    />
  );
};
export default SyncStatusTabContainer;
