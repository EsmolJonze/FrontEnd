import React from 'react';
import ProgressBar from '../../../components/progressBar/progressBar';
import {
  Text,
  Icon,
  Button,
  Switch,
  Spinner,
  RelativeDatePicker,
  Select,
  Item,
  Pagination,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './syncStatusTab.module.css';
import { SearchLogs } from '../../../../assets/svg';
import PropTypes from 'prop-types';
import { numberWithDots } from '../../../utils/strings.utils';
import LogsTable from './logsTable';

const SyncStatusTab = ({
  onChangePage,
  handleRefresh,
  onChangePageSize,
  page,
  pageSize,
  pageSizeOption,
  apiUsage,
  handleAddEmail,
  logTracing,
  fetching,
  handleRefreshEvents,
  totalElements,
  disabledNextPage,
  logsLength,
  syncLogs,
  logDateRangeFilter,
  logStatusFilter,
  logBobjectTypeFilter,
  bobjectTypes,
  setLogBobjectTypeFilter,
  setLogDateRangeFilter,
  setLogStatusFilter,
}) => {
  const handleSyncLogs = () => handleRefresh(true);
  const apiCalls = apiUsage.max - apiUsage.remaining;
  const logStatuses = [{ value: 'FAILED', label: 'Error' }, { value: 'SUCCESS', label: 'Success' }];

  return (
    <>
      <div className={styles._card_container}>
        <div className={styles._api_call_title}>
          <Icon name="barchart" size="24" />
          <Text size="l" weight="medium">
            API call use (past 24 hours)
          </Text>
        </div>
        <div className={styles._api_call_text}>
          <Text size="m" weight="medium">
            API calls used
          </Text>
          <Text size="m" weight="medium" color="bloobirds">
            {apiCalls && apiUsage ? (
              `${numberWithDots(apiCalls)} / ${numberWithDots(apiUsage.max)}`
            ) : (
              <Text color="softTomato" size="s" inline>
                We had an issue getting your API calls! Please review the connected user
              </Text>
            )}
          </Text>
        </div>
        <ProgressBar completed={(apiCalls / apiUsage.max) * 100} />
      </div>
      <div className={styles._card_table_container}>
        <div className={styles._sync_logs_header}>
          <div>
            <Icon name="alignLeft" size="24" color="bloobirds" />
            <Text size="l" weight="medium">
              Sync logs
            </Text>
            <Button
              iconLeft={!fetching && 'refresh'}
              variant="secondary"
              size="small"
              uppercase
              onClick={handleSyncLogs}
            >
              {fetching ? <Spinner size={16} name="loadingCircle" /> : 'refresh'}
            </Button>
          </div>
          <div>
            <Switch checked={logTracing} onChange={handleAddEmail} />
            <Text size="xs" weight="medium" color="peanut">
              Send me an email when new errors occur
            </Text>
          </div>
        </div>

        <div className={styles._sync_logs_table}>
          <div className={styles._sync_logs_table_filters}>
            <div className={styles._sync_logs_time_filter}>
              <RelativeDatePicker
                onChange={rangeDate => {
                  setLogDateRangeFilter({ ...rangeDate });
                  handleRefreshEvents(true);
                }}
                size="small"
                value={logDateRangeFilter}
              />
            </div>
            <div className={styles._sync_logs_separator} />
            <div className={styles._sync_logs_object_filter}>
              <Select
                size="small"
                placeholder="Object type"
                borderless={false}
                width="108px"
                value={logBobjectTypeFilter}
                onChange={value => {
                  setLogBobjectTypeFilter(value);
                  handleRefreshEvents(true);
                }}
              >
                <Item key={'all'} value={''}>
                  <em>All</em>
                </Item>
                {bobjectTypes &&
                  bobjectTypes.map(bobjectTypeItem => (
                    <Item key={bobjectTypeItem.id} value={bobjectTypeItem.name.toUpperCase()}>
                      {bobjectTypeItem.name}
                    </Item>
                  ))}
              </Select>
            </div>
            <div className={styles._sync_logs_status_filter}>
              <Select
                size="small"
                placeholder="Status"
                width="108px"
                borderless={false}
                onChange={value => {
                  setLogStatusFilter(value);
                  handleRefreshEvents(true);
                }}
                value={logStatusFilter}
              >
                <Item key={'all'} value={''}>
                  <em>All</em>
                </Item>
                {logStatuses.map(status => (
                  <Item key={status.value} value={status.value}>
                    {status.label}
                  </Item>
                ))}
              </Select>
            </div>
          </div>
        </div>

        {logsLength > 0 ? (
          <div className={styles._sync_logs_table_table}>
            <LogsTable syncLogs={syncLogs} />
          </div>
        ) : (
          <div className={styles._sync_logs_content}>
            <SearchLogs className={styles._sync_logs_content_img} />
            <Text size="xl" weight="bold" align="center" color="softPeanut">
              No Sync logs could be found
            </Text>
            <Text size="m" align="center" weight="regular" color="softPeanut">
              it appears you haven't synced any data to Salesforce yet
            </Text>
          </div>
        )}
      </div>
      {logsLength > 0 && (
        <div className={styles._pagination}>
          <Pagination
            page={page}
            count={totalElements}
            rowsPerPage={pageSize}
            disabledNextPage={disabledNextPage}
            onChangePage={onChangePage}
            onChangeRowsPerPage={onChangePageSize}
            rowsPerPageOptions={pageSizeOption}
            itemsPerPage={logsLength}
          />
        </div>
      )}
    </>
  );
};

SyncStatusTab.propTypes = {
  apiUsage: PropTypes.number,
  handleAddEmail: PropTypes.func,
  handleRefresh: PropTypes.func,
  logTracing: PropTypes.string,
  onChangePage: PropTypes.func,
  onChangePageSize: PropTypes.func,
  page: PropTypes.number,
  pageSize: PropTypes.number,
  pageSizeOption: PropTypes.array,
};
export default SyncStatusTab;
