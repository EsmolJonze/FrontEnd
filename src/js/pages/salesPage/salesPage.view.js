import React, { useCallback } from 'react';
import {
  Icon,
  Tab,
  TabGroup,
  Text,
  Tooltip,
} from '@bloobirds-it/bloobirds-platform-component-library';
import SubhomesLayout from '../../layouts/subhomesLayout';
import styles from './salesPage.module.css';
import {
  useActiveUser,
  useDocumentTitle,
  useQueryParams,
  useRouter,
  useSalesTasksCount,
  useSalesMetrics,
} from '../../hooks';
import Metrics from '../../layouts/subhomesLayout/metrics';
import MetricsItem from '../../layouts/subhomesLayout/metrics/metricItem';
import Calendar from '../prospectPage/calendar';
import OnCadenceTab from './onCadenceTab';
import ScheduledTab from './scheduledTab';
import InactiveTab from './inactiveTab';
import MeetingsTab from './meetingsTab';
import BobjectTableContainer from '../../components/bobjectTable/bobjectTable.container';
import { BOBJECT_TYPES } from '../../constants/bobject';
import { OPPORTUNITY_FIELDS_LOGIC_ROLE } from '../../constants/opportunity';
import { CompanyEmptyContent, CompanyErrorContent } from '../../components/bobjectTable/emptyTable';
import BobjectListProvider from '../../contexts/bobjectList';

const DEFAULT_TAB = 'On cadence';

const calendarTooltip =
  'For today the calendar shows the amount of \n' +
  'On cadence, Scheduled and Meeting tasks' +
  "(overdue and today's) For days in the past it\n" +
  'shows just the amount of completed tasks.\n' +
  'For days in the future it shows the to-do tasks.';
const statsTooltip =
  'Stats are showing the number of opportinities \n and the amount won this and last month.';

const CollapsableContent = () => {
  const { opportunitiesWonThisMonth, opportunitiesWonLastMonth } = useSalesMetrics();
  return (
    <div className={styles._content}>
      <div className={styles._calendar}>
        <div className={styles._calendar_title}>
          <Text htmlTag="h4" size="xs" color="softPeanut" uppercase inline>
            TASK BOARD CALENDAR
          </Text>
          <Tooltip title={calendarTooltip} position="right">
            <Icon color="peanut" name="info" size={16} />
          </Tooltip>
        </div>
        <Calendar />
      </div>
      <div className={styles._metrics}>
        <div className={styles._metrics_title}>
          <Text htmlTag="h4" size="xs" color="softPeanut" uppercase inline>
            STATS PER MONTH
          </Text>
          <Tooltip title={statsTooltip} position="right">
            <Icon color="peanut" name="info" size={16} />
          </Tooltip>
        </div>
        <Metrics>
          <MetricsItem
            title="Opportunities won this month"
            value={opportunitiesWonThisMonth?.total}
          />
          <MetricsItem
            title="Amount won this month"
            value={opportunitiesWonThisMonth?.amount || 0}
            size="small"
          />
          <MetricsItem
            title="Opportunities won last month"
            value={opportunitiesWonLastMonth?.total}
          />
          <MetricsItem
            title="Amount won last month"
            value={opportunitiesWonLastMonth?.amount || 0}
            size="small"
          />
        </Metrics>
      </div>
    </div>
  );
};

const RoutedSalesPage = () => {
  const queryParams = useQueryParams();
  const tab = queryParams.get('tab') || DEFAULT_TAB;
  const { history } = useRouter();
  const changeTab = useCallback(newTab => {
    history.push({ search: `tab=${newTab}` });
  }, [history]);
  return <SalesPage tab={tab} changeTab={changeTab} />;
};

const SalesPage = ({ tab, changeTab }) => {
  useDocumentTitle('Sales');
  const {
    onCadenceTodayCount,
    onCadenceOverdueCount,
    scheduledTodayCount,
    scheduledOverdueCount,
    meetingTodayCount,
    meetingOverdueCount,
    inactiveCount,
  } = useSalesTasksCount({ shouldCreateSubscription: false });
  const onCadenceTasksCount = onCadenceTodayCount + onCadenceOverdueCount;
  const scheduledTasksCount = scheduledTodayCount + scheduledOverdueCount;
  const meetingTasksCount = meetingTodayCount + meetingOverdueCount;
  const { activeUser } = useActiveUser();

  return (
    <SubhomesLayout
      id="subhomes"
      title="Sales"
      collapsableContent={<CollapsableContent />}
      bodyContent={
        <div className={styles._page_content} data-intercom="sales-subhome-tabs">
          <TabGroup value={tab} onClick={changeTab}>
            <Tab name="On cadence" dataTest="onCadenceSales" extra={onCadenceTasksCount}>
              <OnCadenceTab />
            </Tab>
            <Tab name="Scheduled" dataTest="scheduledSales" extra={scheduledTasksCount}>
              <ScheduledTab />
            </Tab>
            <Tab name="Meeting" dataTest="meetingSales" extra={meetingTasksCount}>
              <MeetingsTab />
            </Tab>
            <Tab name="Inactive" dataTest="inactiveSales" extra={inactiveCount}>
              <InactiveTab />
            </Tab>
            <Tab name="Full list of opps" dataTest="fullOppsList">
              <BobjectListProvider>
                <BobjectTableContainer
                  title="Opportunities"
                  bobjectType={BOBJECT_TYPES.OPPORTUNITY}
                  emptyContentElement={<CompanyEmptyContent />}
                  errorContentElement={<CompanyErrorContent />}
                  showRightPanelActions={false}
                  requestedQuery={{
                    [OPPORTUNITY_FIELDS_LOGIC_ROLE.ASSIGNED_TO]: [activeUser?.id],
                  }}
                />
              </BobjectListProvider>
            </Tab>
          </TabGroup>
        </div>
      }
    />
  );
};

export default React.memo(RoutedSalesPage);
